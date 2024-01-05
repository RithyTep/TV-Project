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
    {
      name: 'SeaTV',
      url: 'https://seatv.netlinkbroadcaster.com/hls/test.m3u8',
    },
    {
      name: 'SeaTV Radio',
      url: 'https://fmseatv.netlinkbroadcaster.com/hls/test.m3u8',
    },
    {
      name: 'TeaTv',
      url: 'https://livefta.malimarcdn.com/ftaedge00/teatv2.sdp/playlist.m3u8',
    },
    {
      name: 'KHMERTV',
      url: 'https://livefta.malimarcdn.com/ftaedge00/khmertv2020.stream/chunklist.m3u8',
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
    {
      name: 'CCTVPlus1',
      url: 'https://cd-live-stream.news.cctvplus.com/live/smil:CHANNEL1.smil/playlist.m3u8',
    },
    {
      name: 'NBS Korea',
      url: 'https://media.joycorp.co.kr:4443/live/live_720p/playlist.m3u8',
    },

    {
      name: 'ThaiParliament',
      url: 'https://cdn-live.tpchannel.org/v1/0180e10a4a7809df73070d7d8760/0180e10adac40b8ed59433d5f3ce/main.m3u8',
    },
    {
      name: 'ALTV',
      url: 'https://edge6a.v2h-cdn.com/tvb_thai/tvb_thai.stream/playlist.m3u8',
    },
    {
      name: 'Zabb',
      url: 'https://vdo.plathong.net/flash7057/flash7057/playlist.m3u8',
    },
    {
      name: 'DLTV1',
      url: 'https://cdn-live.dltv.ac.th/dltv01.m3u8',
    },

    {
      name: 'NBT 11',
      url: 'https://cdn-edge-ott.prd.go.th/live_vlc/smil:01f1-8b4b-971e-aa35-d5fa.smil/playlist.m3u8?DVR=',
    },
    {
      name: 'SuwannabhumiChannel',
      url: 'https://live.bangkokstream.com:19360/suwannabhumi/suwannabhumi.m3u8',
    },
    {
      name: 'Ning TV ',
      url: 'https://livefta.malimarcdn.com/ftaedge00/ningtv.sdp/playlist.m3u8',
    },
    {
      name: 'Lao Net TV ',
      url: 'https://livefta.malimarcdn.com/ftaedge00/laonet.sdp/playlist.m3u8',
    },
    {
      name: 'VOV TV ',
      url: 'https://live.mediatech.vn/live/285fbc845578c6641d5a4c40534a0d1864b/playlist.m3u8',
    },
    {
      name: 'HanoiTV1 ',
      url: 'https://cecex9g5cpliv.vcdn.cloud/capture/smil:HN1.smil/playlist.m3u8',
    },
    {
      name: 'Hau Giang TV',
      url: 'https://60acee235f4d5.streamlock.net/HGTV/d1/playlist.m3u8',
    },
    {
      name: 'ANTV',
      url: 'https://liveh34.vtvcab.vn/hls/ONANTV_CL/04.m3u8',
    },

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

    // {
    //   name: 'MSJ TV',
    //   url: 'http://124.248.165.18:1935/live/myStream.smil/chunklist_w1860765658_b2260000_sleng.m3u8',
    // },

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
      name: 'Kanali 7',
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
      name: 'Pocket watch',
      url: 'https://dai2.xumo.com/amagi_hls_data_xumo1212A-xumo-pocket-watch/CDN/master.m3u8',
    },

    {
      name: 'ANTD',
      url: 'https://liveh34.vtvcab.vn/hls/ONANTV_CL/04.m3u8',
    },

    {
      name: 'ABN TV',
      url: 'https://vod2.abn.co.kr/IPHONE/abn.m3u8',
    },
    {
      name: 'Arirang Radio',
      url: 'http://amdlive-ch01.ctnd.com.edgesuite.net/arirang_3ch/smil:arirang_3ch.smil/playlist.m3u8',
    },
    {
      name: 'Arirang TV',
      url: 'http://amdlive-ch01.ctnd.com.edgesuite.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8',
    },

    {
      name: 'BTN TV',
      url: 'https://btn.nowcdn.co.kr/btn/btnlive2m/playlist.m3u8',
    },

    {
      name: 'CJ OnStyle Plus',
      url: 'https://live-ch2.cjonstyle.net/cjosplus/live2/playlist.m3u8',
    },
    {
      name: 'CTS기독교TV',
      url: 'https://d34t5yjz1ooymj.cloudfront.net/out/v1/875039d5eba0478fa8375a06b3aa5a37/index.m3u8',
    },
    {
      name: 'EBS 1',
      url: 'https://ebsonair.ebs.co.kr/ebs1familypc/familypc1m/playlist.m3u8',
    },
    {
      name: 'EBS 2',
      url: 'https://ebsonair.ebs.co.kr/ebs2familypc/familypc1m/playlist.m3u8',
    },
    {
      name: 'EBS E',
      url: 'https://ebsonair.ebs.co.kr/plus3familypc/familypc1m/playlist.m3u8',
    },
    {
      name: 'EBS kids',
      url: 'https://ebsonair.ebs.co.kr/ebsufamilypc/familypc1m/playlist.m3u8',
    },
    {
      name: 'EBS+ 1',
      url: 'https://ebsonair.ebs.co.kr/plus1familypc/familypc1m/playlist.m3u8',
    },
    {
      name: 'EBS+ 2',
      url: 'https://ebsonair.ebs.co.kr/plus2familypc/familypc1m/playlist.m3u8',
    },
    {
      name: 'FGTV',
      url: 'https://fgtvlive.fgtv.com/smil:fgtv.smil/playlist.m3u8',
    },

    {
      name: 'Gongyoung Shopping',
      url: 'https://etv.publichs.com/live5.stream/playlist.m3u8',
    },

    {
      name: 'GS My Shop',
      url: 'https://gstv-myshop.gsshop.com/myshop_hd/myshop_hd.stream/playlist.m3u8',
    },
    {
      name: 'GS Shop',
      url: 'https://gstv-gsshop.gsshop.com/gsshop_hd/gsshop_hd.stream/playlist.m3u8',
    },
    {
      name: 'GugakTV 국악방송',
      url: 'https://mgugaklive.nowcdn.co.kr/gugakvideo/gugakvideo.stream/playlist.m3u8',
    },

    {
      name: 'Hau Giang TV',
      url: 'https://60acee235f4d5.streamlock.net/HGTV/d1/playlist.m3u8',
    },
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
      name: 'MCOT HD',
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
