var admobid = {};
var AdMob;
// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    interstitial: 'ca-app-pub-2643990797936639/9816186940'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    interstitial: 'ca-app-pub-2643990797936639/5283835941'
  };
} else {
  admobid = { // for Windows Phone
    interstitial: 'ca-app-pub-3940256099942544/1033173712'
  };
  AdMob == false;
}