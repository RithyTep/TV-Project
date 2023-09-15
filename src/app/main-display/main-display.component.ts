import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  documentRef: DocumentReference<unknown> | null = null; // Explicitly define the type
  data!: {
    SelectedIndex: number;
    ChannelName: string;
    IncreaseVolume: number;
    DecreaseVolume: number;
    key: string;
    username: string | null;
  };
  unsubscribe!: () => void; // Add this property
  volumeLevel = 0;

  selectedIndex: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: StoreChannelService,
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}
  login() {
    this.auth.loginWithGoogle();
  }
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
    const collectionRef = this.firestore.collection('test');
    const documentId = 'v9dWU1YRCsIOISzKbbjH'; // Replace with your desired document ID
    const user = await this.afAuth.currentUser;
    if (user) {
      const username = user.displayName; // Get the username from the authenticated user

      const data = {
        SelectedIndex: selectedIndex,
        ChannelName: channelName,
        IncreaseVolume:
          this.volumeLevel < 1 ? this.volumeLevel + 0.1 : this.volumeLevel,
        DecreaseVolume:
          this.volumeLevel > 0 ? this.volumeLevel - 0.1 : this.volumeLevel,
        key: '',
        username: username, // Add the username field
      };

      this.data = data;
      const docRef: AngularFirestoreDocument<unknown> =
        collectionRef.doc(documentId);
      this.documentRef = docRef.ref; // Access the underlying Firebase document reference
      data.key = docRef.ref.id; // Store the key of the document in the data object
      docRef
        .set(data)
        .then(() => {
          // Document successfully created or updated

          // Update the selected index in Firestore
          if (this.documentRef) {
            updateDoc(this.documentRef, { SelectedIndex: selectedIndex });
          }
        })
        .catch((error) => {
          // Error occurred while creating or updating the document
        });

      this.unsubscribe = onSnapshot(this.documentRef, (doc) => {
        const data = doc.data() as FirestoreData;
        if (data) {
          const selectedIndex = data.SelectedIndex;
          this.router.navigate(['/display', data.ChannelName, selectedIndex]);
        }
      });
      return docRef;
    }
    throw new Error('User is not authenticated.'); // or return Promise.reject('User is not authenticated.');
  }
  ngOnInit() {
    this.fetchData();
    this.firestore
      .collection('test')
      .doc('v9dWU1YRCsIOISzKbbjH')
      .valueChanges()
      .subscribe((data: any) => {
        if (data && data.ChannelName) {
          const channelName = data.ChannelName;
          this.selectedIndex = data.SelectedIndex || 0; // Update selectedIndex
          this.router.navigate(['/display', channelName, this.selectedIndex]);
        }
      });
  }
  fetchData(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const userDoc: AngularFirestoreDocument<FirestoreData> =
          this.firestore.doc<FirestoreData>(`test/${user.uid}`);
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
          const index = +indexParam; // Convert index to number using unary plus operator

          // Determine if the channel is local or global based on the index
          const isLocal = index < this.store.localChannels.length;

          // Change the channel based on the index and whether it's local
          this.changeChannel(index, isLocal);

          // Get the document reference
          const docRef = this.createCollection(index, channelName);

          // Subscribe to changes if docRef is defined
          if (docRef) {
            (await docRef).valueChanges().subscribe(async (data: any) => {
              if (data) {
                // Update the video volume based on IncreaseVolume and DecreaseVolume
                if (data.IncreaseVolume !== undefined) {
                  this.videoplayer.nativeElement.volume =
                    data.IncreaseVolume / 100;
                }
                if (data.DecreaseVolume !== undefined) {
                  this.videoplayer.nativeElement.volume =
                    data.DecreaseVolume / 100;
                }

                // Update the channel URL if it has changed
                if (
                  data.ChannelUrl !== undefined &&
                  this.activeLocalChannel === index
                ) {
                  this.playChannel(data.ChannelUrl);
                }

                // Retrieve the username from the authenticated user
                const user = await this.afAuth.currentUser;
                const username = user?.displayName;

                // Update the username in Firestore
                if (this.documentRef && username) {
                  const firestore = getFirestore();
                  const docRef = doc(firestore, 'test', this.documentRef.id);
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
      const documentKey = this.data?.key; // Retrieve the key of the document
      console.log('Document Key:', documentKey);
      // Other cleanup tasks or operations
    }
    this.unsubscribe();
  }
  playChannel(channelUrl: string) {
    if (channelUrl.startsWith('blob:')) {
      fetch(channelUrl)
        .then((response) => response.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          this.videoplayer.nativeElement.src = url;
          this.videoplayer.nativeElement.play();
        });
    } else {
      this.hls.loadSource(channelUrl);
      this.hls.attachMedia(this.videoplayer.nativeElement);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        this.videoplayer.nativeElement.play();
      });
    }
  }
  changeChannel(index: number, isLocal: boolean) {
    const channels = isLocal
      ? this.store.localChannels
      : this.store.globalChannels;

    // Prevent index from going below 0 or above the length of the channels array
    if (index < 0) {
      index = 0;
    } else if (index >= channels.length) {
      index = index % channels.length;
    }

    if (isLocal) {
      this.activeLocalChannel = index;
      this.activeGlobalChannel = -1; // Reset active global channel
    } else {
      this.activeGlobalChannel = index;
      this.activeLocalChannel = -1; // Reset active local channel
    }

    const channel = channels[index];
    this.playChannel(channel.url);

    // Replace spaces with hyphens in the channel name
    const channelName = channels[index].name;
    this.createCollection(index, channelName);
    // Navigate based on the channel name and index
    this.router.navigate(['/display', channelName, index]);
  }
  updateChannelIndex(num: number) {
    this.channelIndex = this.channelIndex * 10 + num;

    // Clear any existing timeout to reset the delay whenever a number button is clicked
    if (this.changeChannelTimeout) {
      clearTimeout(this.changeChannelTimeout);
    }

    // Set a timeout to change the channel after a delay
    this.changeChannelTimeout = setTimeout(() => {
      this.changeChannel(this.channelIndex, true);
      // Reset channelIndex after changing the channel
      this.channelIndex = 0;
    }, 2000); // 2000 milliseconds = 2 seconds

    // Update Firestore
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

      // Update Firestore
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
