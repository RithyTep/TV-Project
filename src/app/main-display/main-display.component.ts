import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone,
} from '@angular/core';
import Hls from 'hls.js';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreChannelService } from '../store/store-channel.service';
import { HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { updateDoc, onSnapshot, doc, getFirestore } from 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

interface FirestoreData {
  SelectedIndex: number;
  ChannelName: string;
  IncreaseVolume: number;
  DecreaseVolume: number;
  key: string;
  username: string | null;
}

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss'],
})
export class MainDisplayComponent implements AfterViewInit {
  HouseForm: any;
  documentRef: DocumentReference<unknown> | null = null;
  data!: FirestoreData;
  unsubscribe!: () => void;
  volumeLevel = 0;
  selectedIndex: any;
  userData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: StoreChannelService,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private ngZone: NgZone
  ) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.changeChannel(this.activeLocalChannel - 1, true);
    } else if (event.key === 'ArrowRight') {
      this.changeChannel(this.activeLocalChannel + 1, true);
    }
  }

  @ViewChild('videoPlayer') videoplayer!: ElementRef;
  changeChannelTimeout!: any;
  activeLocalChannel = -1;
  activeGlobalChannel = -1;
  channelIndex = 0;
  hls = new Hls();

  async createCollection(selectedIndex: number, channelName: string) {
    const user = await this.afAuth.currentUser;

    const collectionRef = this.firestore.collection('users');
    const documentId = user?.uid;

    if (user) {
      const username = user.displayName;
      console.log('username', user);
      const data = {
        SelectedIndex: selectedIndex,
        ChannelName: channelName,
        IncreaseVolume:
          this.volumeLevel < 1 ? this.volumeLevel + 0.1 : this.volumeLevel,
        DecreaseVolume:
          this.volumeLevel > 0 ? this.volumeLevel - 0.1 : this.volumeLevel,
        key: '',
        username: username,
      };

      this.data = data;
      const docRef: AngularFirestoreDocument<unknown> =
        collectionRef.doc(documentId);
      this.documentRef = docRef.ref;
      data.key = docRef.ref.id;
      docRef
        .set(data)
        .then(() => {
          if (this.documentRef) {
            updateDoc(this.documentRef, { SelectedIndex: selectedIndex });
          }
        })
        .catch((error) => {});

      this.unsubscribe = onSnapshot(this.documentRef, (doc) => {
        const data = doc.data() as FirestoreData;
        if (data) {
          const selectedIndex = data.SelectedIndex;
          this.router.navigate(['/display', data.ChannelName, selectedIndex]);
        }
      });
      return docRef;
    }
    throw new Error('User is not authenticated.');
  }

  ngOnInit() {
    this.fetchData();
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.ngZone.run(() => {
          this.userData = user;
          this.auth.userDataAuth = this.userData;
          this.firestore
            .collection('users')
            .doc(this.userData?.uid)
            .valueChanges()
            .subscribe((data: any) => {
              if (data && data.ChannelName) {
                const channelName = data.ChannelName;
                this.selectedIndex = data.SelectedIndex || 0;
                this.router.navigate([
                  '/display',
                  channelName,
                  this.selectedIndex,
                ]);
              }
            });
          console.log(
            'User is authenticated',
            this.userData?.uid ?? 'UID not available'
          );
        });
      }
    });
  }

  fetchData(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        const userDoc: AngularFirestoreDocument<FirestoreData> =
          this.firestore.doc<FirestoreData>(`users/${user.uid}`);
        userDoc.valueChanges().subscribe((data: FirestoreData | undefined) => {
          const {
            SelectedIndex = 0,
            ChannelName = '',
            IncreaseVolume = 0,
            DecreaseVolume = 0,
            key = '',
            username = null,
          } = data || {};

          this.data = {
            SelectedIndex,
            ChannelName,
            IncreaseVolume,
            DecreaseVolume,
            key,
            username,
          };
        });
      } else {
        this.data = {
          SelectedIndex: 0,
          ChannelName: '',
          IncreaseVolume: 0,
          DecreaseVolume: 0,
          key: '',
          username: null,
        };
      }
    });
  }

  ngAfterViewInit() {
    if (Hls.isSupported()) {
      this.route.paramMap.subscribe(async (params) => {
        const channelName = (params.get('channelName') || '').replace(
          /-/g,
          ' '
        );
        const indexParam = params.get('index');

        if (indexParam !== null) {
          const index = +indexParam;

          const isLocal = index < this.store.localChannels.length;
          this.changeChannel(index, isLocal);

          const docRef = this.createCollection(index, channelName);

          if (docRef) {
            (await docRef).valueChanges().subscribe(async (data: any) => {
              if (data) {
                if (data.IncreaseVolume !== undefined) {
                  this.videoplayer.nativeElement.volume =
                    data.IncreaseVolume / 100;
                }
                if (data.DecreaseVolume !== undefined) {
                  this.videoplayer.nativeElement.volume =
                    data.DecreaseVolume / 100;
                }

                if (
                  data.ChannelUrl !== undefined &&
                  this.activeLocalChannel === index
                ) {
                  this.playChannel(data.ChannelUrl);
                }

                const user = await this.afAuth.currentUser;
                const username = user?.displayName;

                if (this.documentRef && username) {
                  const firestore = getFirestore();
                  const docRef = doc(firestore, 'users', this.documentRef.id);
                  await updateDoc(docRef, { username });
                }
              }
            });
          }
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.documentRef) {
      const documentKey = this.data?.key;
      console.log('Document Key:', documentKey);
    }
    this.unsubscribe();
  }

  playChannel(channelUrl: string) {
      this.hls.loadSource(channelUrl);
      this.hls.attachMedia(this.videoplayer.nativeElement);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        this.videoplayer.nativeElement.play();
      });
  }

  changeChannel(index: number, isLocal: boolean) {
    const channels = isLocal
      ? this.store.localChannels
      : this.store.globalChannels;

    if (index < 0) {
      index = 0;
    } else if (index >= channels.length) {
      index = index % channels.length;
    }

    if (isLocal) {
      this.activeLocalChannel = index;
      this.activeGlobalChannel = -1;
    } else {
      this.activeGlobalChannel = index;
      this.activeLocalChannel = -1;
    }

    const channel = channels[index];
    this.playChannel(channel.url);

    const channelName = channels[index].name;
    this.createCollection(index, channelName);
    this.router.navigate(['/display', channelName, index]);
  }

  updateChannelIndex(num: number) {
    this.channelIndex = this.channelIndex * 10 + num;

    if (this.changeChannelTimeout) {
      clearTimeout(this.changeChannelTimeout);
    }

    this.changeChannelTimeout = setTimeout(() => {
      this.changeChannel(this.channelIndex, true);
      this.channelIndex = 0;
    }, 2000);

    const channelName = this.store.localChannels[this.channelIndex].name;
    this.createCollection(this.channelIndex, channelName);
  }

  increaseVolume() {
    this.updateVolume(0.1);
  }

  decreaseVolume() {
    this.updateVolume(-0.1);
  }

  updateVolume(change: number) {
    let currentVolume = this.videoplayer.nativeElement.volume;
    const newVolume = Math.max(Math.min(currentVolume + change, 1), 0);
    if (currentVolume !== newVolume) {
      this.videoplayer.nativeElement.volume = newVolume;
      this.volumeLevel = Math.round(newVolume * 100);

      const channelName =
        this.store.localChannels[this.activeLocalChannel].name;
      this.createCollection(this.activeLocalChannel, channelName);
    }
  }

  onChannelIndexChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.channelIndex = +target.value;
  }
}
