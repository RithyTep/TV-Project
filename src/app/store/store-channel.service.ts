import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreChannelService {

  constructor() { }
  
  localChannels  = [
    {
      name: 'PNN',
      url: 'http://203.176.130.123:8989/live/pnn_480k.stream/playlist.m3u8',
    },
    {
      name: 'TVK1',
      url: 'https://live.kh.malimarcdn.com/live/tvk.stream/playlist.m3u8',
    },
    {
      name: 'TVK2',
      url: 'https://live.kh.malimarcdn.com/live/tvk2.stream/playlist.m3u8',
    },
    {
      name: 'TV5',
      url: 'http://203.176.130.123:8989/live/tv5_480k.stream/playlist.m3u8',
    },
    {
      name: 'Bayonv TV',
      url: '  http://203.176.130.123:8989/live/bayontv_480k.stream/playlist.m3u8',
    },
    {
      name: 'BTV',
      url: '  http://203.176.130.123:8989/live/bayontv1_480k.stream/playlist.m3u8',
    },
    {
      name: 'SEA TV',
      url: 'http://203.176.130.123:8989/live/seatv_480k.stream/playlist.m3u8',
    },
    {
      name: 'WIKI TV',
      url: 'http://206.189.93.160:1935/live/myStream_720p/playlist.m3u8',
    },
    {
      name: 'CTV9',
      url: 'http://203.176.130.123:8989/live/ctv9hd.stream/playlist.m3u8',
    },
    {
      name: 'Fresh News',
      url: 'https://streaming.freshnewsasia.com/live/ngrp:myStream_all/chunklist_w1992010384_b1496608.m3u8',
    },
    {
      name: 'Apsara TV',
      url: 'http://203.176.130.123:8989/live/apsaratv_480k.stream/playlist.m3u8',
    },
    {
      name: 'Hang Meas TV',
      url: 'http://167.99.72.244:1935/hm_hdtv/_definst_/smil:HMHDTV.smil/chunklist_w422093947_b800000_sleng.m3u8',
    },
    {
      name: 'Raksmey Hang Mease',
      url: 'http://malisresidencess.com:1934/rhm_hdtv/smil:RHMHDTV.smil/chunklist_w616528546_b1800000_sleng.m3u8',
    },
    {
      name: 'TeaTv',
      url: 'https://livefta.malimarcdn.com/ftaedge00/teatv2.sdp/playlist.m3u8',
    },
    {
      name: 'KHMERTV',
      url: 'https://livefta.malimarcdn.com/ftaedge00/khmertv2020.stream/chunklist.m3u8',
    },
    {
      name: 'MSJ TV',
      url: 'http://124.248.165.18:1935/live/myStream.smil/chunklist_w1860765658_b2260000_sleng.m3u8',
    },
    {
      name: 'Netlink TV',
      url: 'https://netlink.netlinkbroadcaster.com/hls/test.m3u8',
    },
  
  ];
  globalChannels: { name: string; url: string }[] = [
    {
      name: 'LOKAL',
      url: 'http://andriant.my.id'
    },
    {
      name: 'CH2 STARMAX',
      url: 'http://stream.rs.co.th/ch2-hi/index.m3u8'
    },
    {
      name: 'CH3 HD',
      url: 'http://27.254.130.64/feed/ch3hd/playlist.m3u8'
    },
    {
      name: 'CH5',
      url: 'http://27.254.130.64/feed/ch5hd/playlist.m3u8'
    },
    {
      name: 'CH7 HD',
      url: 'http://27.254.130.64/feed/ch7hd/playlist.m3u8'
    },
    {
      name: 'CH8',
      url: 'http://stream.rs.co.th/ch8-hi/index.m3u8'
    },
    {
      name: 'MCOT-HD',
      url: 'http://27.254.130.64/feed/chmcothd/playlist.m3u8'
    },
    {
      name: 'CH11 NBT',
      url: 'http://27.254.130.64/live01/ch14.m3u8?p=m3u8'
    },
    {
      name: 'CH11 NBT',
      url: 'http://122.155.92.8:1935/live/ch1_L.sdp/chunklist.m3u8'
    },
    {
      name: 'Workpoint',
      url: 'https://gcorigin.wisdomcloud.net/live/master/playlist.m3u8_500.m3u8'
    },
  ]
  ; 
}
