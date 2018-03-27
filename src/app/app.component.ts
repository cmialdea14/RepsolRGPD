import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

//Usamos el provider TranslateService
import { TranslateService } from '@ngx-translate/core';

//Importamos el STORAGE para utilizarlo en todas las páginas
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private translateService: TranslateService, storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      //Idioma por defecto del aplicativo
      this.translateService.setDefaultLang('en');
      this.translateService.use('en');


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

