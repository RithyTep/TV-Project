import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreChannelService {
  constructor() {}

  localChannels = [
    // {
    //   name: 'PNN',
    //   url: 'http://203.176.130.123:8989/live/pnn_480k.stream/playlist.m3u8',
    // },
    {
      name: 'TVK1',
      url: 'https://live.kh.malimarcdn.com/live/tvk.stream/playlist.m3u8',
    },
    {
      name: 'TVK2',
      url: 'https://live.kh.malimarcdn.com/live/tvk2.stream/playlist.m3u8',
    },
    // {
    //   name: 'TV5',
    //   url: 'http://203.176.130.123:8989/live/tv5_480k.stream/playlist.m3u8',
    // },
    // {
    //   name: 'Bayonv TV',
    //   url: '  http://203.176.130.123:8989/live/bayontv_480k.stream/playlist.m3u8',
    // },
    // {
    //   name: 'BTV',
    //   url: '  http://203.176.130.123:8989/live/bayontv1_480k.stream/playlist.m3u8',
    // },
    // {
    //   name: 'SEA TV',
    //   url: 'http://203.176.130.123:8989/live/seatv_480k.stream/playlist.m3u8',
    // },
    // {
    //   name: 'WIKI TV',
    //   url: 'http://206.189.93.160:1935/live/myStream_720p/playlist.m3u8',
    // },
    // {
    //   name: 'CTV9',
    //   url: 'http://203.176.130.123:8989/live/ctv9hd.stream/playlist.m3u8',
    // },
    // {
    //   name: 'Fresh News',
    //   url: 'https://streaming.freshnewsasia.com/live/ngrp:myStream_all/chunklist_w1992010384_b1496608.m3u8',
    // },
    // {
    //   name: 'Apsara TV',
    //   url: 'http://203.176.130.123:8989/live/apsaratv_480k.stream/playlist.m3u8',
    // },
    // {
    //   name: 'Hang Meas TV',
    //   url: 'http://167.99.72.244:1935/hm_hdtv/_definst_/smil:HMHDTV.smil/chunklist_w422093947_b800000_sleng.m3u8',
    // },
    // {
    //   name: 'Raksmey Hang Mease',
    //   url: 'http://malisresidencess.com:1934/rhm_hdtv/smil:RHMHDTV.smil/chunklist_w616528546_b1800000_sleng.m3u8',
    // },
    {
      name: 'TeaTv',
      url: 'https://livefta.malimarcdn.com/ftaedge00/teatv2.sdp/playlist.m3u8',
    },
    {
      name: 'KHMERTV',
      url: 'https://livefta.malimarcdn.com/ftaedge00/khmertv2020.stream/chunklist.m3u8',
    },
    // {
    //   name: 'MSJ TV',
    //   url: 'http://124.248.165.18:1935/live/myStream.smil/chunklist_w1860765658_b2260000_sleng.m3u8',
    // },
    {
      name: 'Netlink TV',
      url: 'https://netlink.netlinkbroadcaster.com/hls/test.m3u8',
    },
    // {
    //   name: 'MBC TV',
    //   url: 'http://123.254.72.24:1935/tvlive/livestream2/playlist.m3u8',
    // },

    // {
    //   name: 'TJB TV',
    //   url: 'http://1.245.74.5:1935/live/tv/.m3u8',
    // },
    // {
    //   name: 'UBC TV',
    //   url: 'http://59.23.231.102:1935/live/UBCstream/playlist.m3u8',
    // },

    // {
    //   name: 'CJB TV',
    //   url: 'http://1.222.207.80:1935/live/cjbtv/playlist.m3u8',
    // },
    // {
    //   name: 'JIBS TV',
    //   url: 'http://123.140.197.22/stream/1/play.m3u8',
    // },

    {
      name: 'Kanali 7 Ⓢ',
      url: 'https://fe.tring.al/delta/105/out/u/1200_1.m3u8',
    },

    {
      name: 'Alpo TV',
      url: 'https://5d00db0e0fcd5.streamlock.net/7236/7236/playlist.m3u8',
    },
    {
      name: 'CNA',
      url: 'https://live1.mediadesk.al/cnatvlive.m3u8',
    },

    {
      name: 'News 24 Ⓢ',
      url: 'https://tv.balkanweb.com/news24/livestream/playlist.m3u8',
    },
    {
      name: 'Ora News',
      url: 'https://live1.mediadesk.al/oranews.m3u8',
    },
    // {
    //   name: 'Panorama TV Ⓢ',
    //   url: 'http://198.244.188.94/panorama/livestream/playlist.m3u8',
    // },
    {
      name: 'Report TV',
      url: 'https://deb10stream.duckdns.org/hls/stream.m3u8',
    },
    {
      name: 'Syri',
      url: 'https://stream.syritv.al/SyriTV/index.m3u8',
    },

    {
      name: 'Tropoja',
      url: 'https://live.prostream.al/al/smil:tropojatv.smil/playlist.m3u8',
    },
    {
      name: 'TV 7 Albania',
      url: 'https://5d00db0e0fcd5.streamlock.net/7064/7064/playlist.m3u8',
    },
    {
      name: 'TV Apollon Ⓢ',
      url: 'https://live.apollon.tv/Apollon-WEB/video.m3u8?token=tnt3u76re30d2',
    },
    {
      name: 'Vizion Plus',
      url: 'https://fe.tring.al/delta/105/out/u/rdghfhsfhfshs.m3u8',
    },
    {
      name: 'CCTV1',
      url: 'https://node1.olelive.com:6443/live/CCTV1HD/hls.m3u8',
    },
    {
      name: 'CCTV2',
      url: 'https://node1.olelive.com:6443/live/CCTV2HD/hls.m3u8',
    },

    {
      name: 'CCTV7',
      url: 'https://node1.olelive.com:6443/live/CCTV7HD/hls.m3u8',
    },
    {
      name: 'CCTV8',
      url: 'https://node1.olelive.com:6443/live/CCTV8HD/hls.m3u8',
    },
    {
      name: 'CCTV9',
      url: 'https://node1.olelive.com:6443/live/CCTV9HD/hls.m3u8',
    },
    {
      name: 'CCTV10',
      url: 'https://node1.olelive.com:6443/live/CCTV10HD/hls.m3u8',
    },

    {
      name: 'CCTV17',
      url: 'https://node1.olelive.com:6443/live/CCTV17HD/hls.m3u8',
    },

    {
      name: 'TV BRICS Chinese',
      url: 'https://brics.bonus-tv.ru/cdn/brics/chinese/playlist.m3u8',
    },

    // {
    //   name: 'Arirang',
    //   url: 'http://amdlive.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8',
    // },

    {
      name: 'ABC News',
      url: 'https://content.uplynk.com/channel/3324f2467c414329b3b0cc5cd987b6be.m3u8',
    },
    {
      name: 'CBS News',
      url: 'https://cbsnews.akamaized.net/hls/live/2020607/cbsnlineup_8/master.m3u8',
    },
    // {
    //   name: 'NBC News',
    //   url: 'http://dai2.xumo.com/xumocdn/p=roku/amagi_hls_data_xumo1212A-xumo-nbcnewsnow/CDN/playlist.m3u8',
    // },
    {
      name: 'Reuters TV',
      url: 'https://reuters-reutersnow-1-eu.rakuten.wurl.tv/playlist.m3u8',
    },
    {
      name: 'Spacetoon',
      url: 'https://streams.spacetoon.com/live/stchannel/smil:livesmil.smil/playlist.m3u8',
    },
    {
      name: 'Cartoon Network',
      url: 'https://playout.cdn.cartoonnetwork.com.br/playout_02/playlist-720p.m3u8',
    },
    {
      name: '4Fun TV',
      url: 'https://stream.4fun.tv:8888/hls/4f_high/index.m3u8',
    },
    {
      name: 'Desi',
      url: 'https://live.wmncdn.net/desichannel/7e2dd0aed46b70a5c77f4affdb702e4b.sdp/mono.m3u8',
    },
    {
      name: 'Dove',
      url: 'https://dai.google.com/linear/hls/event/dfbBGQhPQQqypdEAjpUGlA/master.m3u8',
    },
    {
      name: 'zindagitv',
      url: 'https://5ad386ff92705.streamlock.net/live_transcoder/ngrp:zindagitv.stream_all/chunklist.m3u8',
    },
    {
      name: 'Battery Pop',
      url: 'https://dai2.xumo.com/xumocdn/p=redbox&deviceid=&is_lat=&subp=RedboxdesktopWebWindows/amagi_hls_data_xumo1212A-redboxbatterypop/CDN/1280x720_5000000/index.m3u8',
    },
    {
      name: 'Pocket watch',
      url: 'https://dai2.xumo.com/amagi_hls_data_xumo1212A-xumo-pocket-watch/CDN/master.m3u8',
    },
    // {
    //   name: ' NASA TV',
    //   url: 'http://iphone-streaming.ustream.tv/uhls/6540154/streams/live/iphone/playlist.m3u8',
    // },
    // {
    //   name: 'NASA TV Media channel',
    //   url: 'http://iphone-streaming.ustream.tv/uhls/10414700/streams/live/iphone/playlist.m3u8',
    // },
  ];

  globalChannels: { name: string; url: string }[] = [
    {
      name: 'LOKAL',
      url: 'http://andriant.my.id',
    },
    {
      name: 'CH2 STARMAX',
      url: 'http://stream.rs.co.th/ch2-hi/index.m3u8',
    },
    {
      name: 'CH3 HD',
      url: 'http://27.254.130.64/feed/ch3hd/playlist.m3u8',
    },
    {
      name: 'CH5',
      url: 'http://27.254.130.64/feed/ch5hd/playlist.m3u8',
    },
    {
      name: 'CH7 HD',
      url: 'http://27.254.130.64/feed/ch7hd/playlist.m3u8',
    },
    {
      name: 'CH8',
      url: 'http://stream.rs.co.th/ch8-hi/index.m3u8',
    },
    {
      name: 'MCOT-HD',
      url: 'http://27.254.130.64/feed/chmcothd/playlist.m3u8',
    },
    {
      name: 'CH11 NBT',
      url: 'http://27.254.130.64/live01/ch14.m3u8?p=m3u8',
    },
    {
      name: 'CH11 NBT',
      url: 'http://122.155.92.8:1935/live/ch1_L.sdp/chunklist.m3u8',
    },
    {
      name: 'Workpoint',
      url: 'https://gcorigin.wisdomcloud.net/live/master/playlist.m3u8_500.m3u8',
    },
  ];
}
