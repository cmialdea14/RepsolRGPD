import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { FormularioPage } from '../formulario/formulario';

//Importamos el servicio de traducción
import { TranslateService } from '@ngx-translate/core'

//Importamos el Storage
import { Storage } from '@ionic/storage';
//Importamos el tutorial
import { TutorialPage } from '../tutorial/tutorial';

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

  // ionViewWillLeave(){
  //   //Se ejecuta cuando la página deja de estar activa
  //   //Guardamos el valor que había en el Storage antes de limpiarlo
  //   this.storage.set('tutoDone',this.tutoDone);
  //   console.log("ionViewWillLeave home--> Esto es el valor de tutoDone: " + this.tutoDone);
  // }

  irInfoPage(){

    //Si no ha visto el tutorial, lo mostramos
    // this.storage.get('tutoDone').then((done) => {
    //   console.log("ionViewDidLoad formulario--> Esto es el valor de tutoDone: " + done);
    //   if (!done) {
    //     //Creamos la variable tuto-done, para decir que ya hemos visto el tutorial
    //     this.storage.set('tutoDone', true);
    //     //Usamos setRoot y no push para que no aparezca el botón back en el tutorial
    //     this.navCtrl.setRoot(TutorialPage);
    //     //this.navCtrl.popToRoot();
    //   }else{
    //     //Una vez visto el tutorial, limpiamos el storage y pasamos al formulario.
    //     //Limpiamos los datos de memoria y pasamos a la pantalla del formulario
    //     this.storage.clear().then(()=>{
    //       console.log("Storage limpio desde Home");
    //       this.navCtrl.push(FormularioPage);
    //     });   
    //   }
    // });

    this.storage.clear().then(()=>{
      console.log("Storage limpio desde Home");
      this.navCtrl.push(TutorialPage);
    });  
    	
  }

  cambioIdioma(lang) {
    this.translateService.use(lang);
  }

}
