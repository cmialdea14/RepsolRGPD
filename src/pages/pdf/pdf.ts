import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { PadFirmaPage } from '../pad-firma/pad-firma';

/**
 * Generated class for the PdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {
  
  //Creamos variable para guardar los datos del formualrio
  datosFormulario
  //Creamos variable para guardar la firma
  signature

  //Creamos las variables para el formulario
  textoPdf = {
  	p1: '',
  	p2: ''
  };
 
  pdfObj = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private file: File, private fileOpener: FileOpener, public modalController: ModalController) {
  	//Guardamos en nuestra variable los datos del formulario
  	this.datosFormulario = navParams.data.datosFormulario;
  	this.textoPdf.p1 = "Yo, " + this.datosFormulario.nombre + " " + this.datosFormulario.apellido1 + " " + this.datosFormulario.apellido2 +", acepto la nueva ley de protección de datos";
  	this.textoPdf.p2 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.";

    //Guardamos en nuestra variable los datos de la firma
    this.signature = navParams.data.signature;
    console.log(this.signature);
    //Guardamos en nuestra variable el pdf que viene de la pantalla de la firma
    this.pdfObj = navParams.data.pdfObj;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfPage');
  }


  irPad(){
    console.log("Dentro pad");
    this.navCtrl.push(PadFirmaPage, {datosFormulario: this.datosFormulario, pdfObj: this.pdfObj});
  }

  createPdf() {
  	
  	console.log(this.textoPdf.p1);
  	console.log(this.textoPdf.p2);
    
    var docDefinition;

    if(typeof this.signature === 'undefined'){
      docDefinition = {
        content: [
          { text: 'Nueva LOPD Mayo 2018', style: 'header' },
          { text: this.textoPdf.p1, style: 'subheader' },
          { text: this.textoPdf.p2, style: 'story', margin: [0, 20, 0, 20] },
          { text: new Date().toLocaleDateString(), alignment: 'right' }
        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 15, 0, 0]
          },
          story: {
            italic: true,
            alignment: 'center',
            width: '50%',
          }
        }
      }
    }else{
      console.log(this.signature);
      var firma = new Image;
      firma = this.signature.replace(/^data:image\/(png|jpg);base64,/, "");

      docDefinition = {
        content: [
          { text: 'Nueva LOPD Mayo 2018', style: 'header' },
          { text: this.textoPdf.p1, style: 'subheader' },
          { text: this.textoPdf.p2, style: 'story', margin: [0, 20, 0, 20] },
          { image: 'mySuperImage', alignment: 'center', width: 100 },
          { text: new Date().toLocaleDateString(), alignment: 'right' }
        ],
        images: {
          mySuperImage: this.signature, width: 100, height: 100
        },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [0, 15, 0, 0]
          },
          story: {
            italic: true,
            alignment: 'center',
            width: '50%',
          }
        }
      }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    //this.openSignatureModel();
    //this.navCtrl.push(PadFirmaPage, {datosFormulario: this.datosFormulario, pdfObj: this.pdfObj});
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });
 
        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

  openSignatureModel(){
  	let modal = this.modalController.create(PadFirmaPage);
  	modal.present();
  }


}
