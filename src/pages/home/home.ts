import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { FormularioPage } from '../formulario/formulario';

//Importamos el servicio de traducción
import { TranslateService } from '@ngx-translate/core'

//Importamos el Storage
import { Storage } from '@ionic/storage';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'start'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private translateService: TranslateService, private storage: Storage, private viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    //Ocultamos el botón BACK/ATRÁS para la página home 
    this.viewCtrl.showBackButton(false);
  }

  irFormAcceso(){
    //Limpiamos los datos de memoria y pasamos a la pantalla del formulario
    this.storage.clear().then(()=>{
      console.log("Storage limpio desde Home");
      this.navCtrl.push(FormularioPage);
    });
  	
  }

  cambioIdioma(lang) {
    this.translateService.use(lang);
  }

}
