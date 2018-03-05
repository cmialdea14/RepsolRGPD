import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { Storage } from '@ionic/storage';

import { PdfPage } from '../pdf/pdf';

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

  //Creamos variable para guardar los datos del formualrio
  datosFormulario;
  pdfObj;

  signature = '';
  isDrawing = false;	

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 340,
    'canvasHeight': 200,
    'backgroundColor': '#FFFFFF',
    'penColor': '#000000'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController) {
    this.datosFormulario = navParams.data.datosFormulario;
    this.pdfObj = navParams.data.pdfObj;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PadFirmaPage');
  }

  ionViewDidEnter() {
    this.signaturePad.clear()
    this.storage.get('savedSignature').then((data) => {
      this.signature = data;
    });
  }  

  drawComplete() {
    this.isDrawing = false;
  }
 
  drawStart() {
    this.isDrawing = true;
  }
 
  savePad() {
    this.signature = this.signaturePad.toDataURL();
    //La guarda en el local Storage, pero no es lo que nos interesa
    //this.storage.set('savedSignature', this.signature);
    this.signaturePad.clear();
    let toast = this.toastCtrl.create({
      message: 'Firmado correctamente',
      duration: 3000
    });
    toast.present();

    //Mandamos la firma que ha dibujado a la página del documento.
    this.navCtrl.push(PdfPage, {signature: this.signature, datosFormulario: this.datosFormulario, pdfObj: this.pdfObj});

  }
 
  clearPad() {
    this.signaturePad.clear();
  }

  cancelPad(){
  	this.signaturePad.clear();
    this.navCtrl.pop();

  }

}
