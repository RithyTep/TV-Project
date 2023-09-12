import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Hls from 'hls.js';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreChannelService } from '../store/store-channel.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.scss'],
})
export class MainDisplayComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: StoreChannelService
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
  changeChannelTimeout?: number;
  activeLocalChannel = -1;
  activeGlobalChannel = -1;
  channelIndex = 0;
  hls = new Hls();

  ngAfterViewInit() {
    if (Hls.isSupported()) {
      this.route.paramMap.subscribe((params) => {
        const channelName = (params.get('channelName') || '').replace(/-/g, ' ');
        const indexParam = params.get('index');
        
        if (indexParam !== null) {
          const index = +indexParam; // Convert index to number using unary plus operator
        
          // Determine if the channel is local or global based on the index
          const isLocal = index < this.store.localChannels.length;
        
          // Change the channel based on the index and whether it's local
          this.changeChannel(index, isLocal);
        }
      });
    }
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
    const channels = isLocal ? this.store.localChannels : this.store.globalChannels;
    
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
    const channelName = channel.name.replace(/ /g, '-');
    
    // Navigate based on the channel name and index
    this.router.navigate(['/display', channelName, index]);
  }
  volumeLevel = 0;

  increaseVolume() {
    let currentVolume = this.videoplayer.nativeElement.volume;
    if (currentVolume < 1) {
      this.videoplayer.nativeElement.volume = Math.min(currentVolume + 0.1, 1);
      this.volumeLevel = Math.round(this.videoplayer.nativeElement.volume * 100);
    }
  }
  
  decreaseVolume() {
    let currentVolume = this.videoplayer.nativeElement.volume;
    if (currentVolume > 0) {
      this.videoplayer.nativeElement.volume = Math.max(currentVolume - 0.1, 0);
      this.volumeLevel = Math.round(this.videoplayer.nativeElement.volume * 100);
    }
  }
  
  
  onChannelIndexChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.channelIndex = +target.value;
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
    }, 2000); // 3000 milliseconds = 3 seconds
  }
  
}
