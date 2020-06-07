import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdMobPro } from '@ionic-native/admob-pro/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {


  constructor(private router: Router,private admob: AdMobPro, private platform: Platform) {}
       openCat(){
       	this.router.navigate(['cat']);
       }
       openDog(){
        this.router.navigate(['dog']);
       }
     

        ionViewDidLoad(){
           this.admob.onAdDismiss()
           .subscribe(() => { console.log('User dismissed ad'); });
         } 

onClick() {
  let adId;
  if(this.platform.is('android')) {
    adId = 'ca-app-pub-3940256099942544/1033173712';
  } else if (this.platform.is('ios')) {
    adId = 'YOUR_ADID_IOS';
  }
  this.admob.prepareInterstitial({adId: adId})
    .then(() => { this.admob.showInterstitial(); });
} 

}
