import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';

import { PdfPage } from '../pdf/pdf';

//Cambio texto botón Back(Usamos el provider TranslateService)
import { ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the PadFirmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pad-firma',
  templateUrl: 'pad-firma.html',
})
export class PadFirmaPage {

  //Creamos variable para guardar los datos de la firma
  signature = '';
  isDrawing = false;	

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,//anchura trazo
    'canvasWidth': 600,
    'canvasHeight': 460,
    'backgroundColor': '#FFFFFF',
    'penColor': '#091742'//'#000000'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController,
    public viewController: ViewController,private translateService: TranslateService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadFirmaPage');
  }

  ionViewDidEnter() {
    //Cambiamos el texto del botón Atrás del NavBar
    if(this.translateService.currentLang == 'es'){
      this.viewController.setBackButtonText('Atrás');  
    }else{
      this.viewController.setBackButtonText('Back');
    }

    //Limpiamos el pad
    this.signaturePad.clear()
    this.storage.get('signature').then((data) => {
      this.signature = data;
    });

  }  

  drawComplete() {
    //No hacemos nada al terminar cada trazo
    //this.isDrawing = false;
  }
 
  drawStart() {
    this.isDrawing = true;
  }
 
  savePad() {
    if(this.isDrawing){
      this.signature = this.signaturePad.toDataURL();
      //Guardamos la firma en el local Storage
      this.storage.set('signature', this.signature);
      //Limpiamos el pad
      this.signaturePad.clear();
      //Creamos mensaje de aviso
      let toastFirmado;
      this.translateService.get('ToastFirmado').subscribe(value => {
        toastFirmado = value;
      });
      let toast = this.toastCtrl.create({
        message: toastFirmado,
        duration: 3000
      });
      toast.present();
    }else{
      //Limpiamos el pad
      this.signaturePad.clear();
      //Creamos mensaje de aviso
      let toastNoFirmado;
      this.translateService.get('ToastNoFirmado').subscribe(value => {
        toastNoFirmado = value;
      });
      let toast = this.toastCtrl.create({
        message: toastNoFirmado,
        duration: 3000
      });
      toast.present();
    }
    //Quitamos la página de la pila del navegador de páginas 
    this.navCtrl.pop();
    
  }
 
  clearPad() {
    this.signaturePad.clear();
  }

  cancelPad(){
  	this.signaturePad.clear();
    this.navCtrl.pop();
  }

}
