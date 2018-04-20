import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { PadFirmaPage } from '../pad-firma/pad-firma';
//Importamos la pagina de Tabs, para volver a inicio
import { TabsPage } from '../tabs/tabs';

//Cambio texto botón Back(Usamos el provider TranslateService)
import { ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

//Importamos el Storage
import { Storage } from '@ionic/storage';

//Importamos el provider de alertas
import { AlertController } from 'ionic-angular';
//Importamos el email composer
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the PdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'pdf'
})
@Component({
  selector: 'page-pdf',
  templateUrl: 'pdf.html',
})
export class PdfPage {
  
  //Creamos variable para guardar los datos del formualrio
  datosFormulario
  //Creamos variable para guardar la firma
  signature
  //Creamos variable para guardar la fotografía
  fotoFormulario
  //Creamos las variables para el formulario
  textoPdf = {
  	p1: '',
  	p2: ''
  };
 
  pdfObj = null;
  pdfBase64 = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private plt: Platform, private file: File, private fileOpener: FileOpener, public modalController: ModalController,
    public viewController: ViewController,private translateService: TranslateService, private storage: Storage, public alertCtrl: AlertController, private emailComposer: EmailComposer) {
  	//Guardamos en nuestra variable los datos del formulario
      this.storage.get('datosFormulario').then((value) => {
      this.datosFormulario = value;
      this.textoPdf.p1 = "Yo, " + this.datosFormulario.nombre + " " + this.datosFormulario.apellido1 + " " + this.datosFormulario.apellido2 +", acepto la nueva ley de protección de datos";
      this.textoPdf.p2 = "Lorem ipsum dolor sit amet,"+ 
      "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc."+
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.";
    }).catch(()=>{
      //Si no existen datos del formulario, volvemos a la página de inicio e iniciamos la pila de páginas de navegación
      this.navCtrl.setRoot(TabsPage);
      this.navCtrl.popToRoot();
    });
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfPage');
    // //Obtenemos los titulos de la alerta timeout de los ficheros de traducción
    // let alertTimeOutTitle;
    // let alertTimeOutSubtitle;
    // this.translateService.get('AlertTimeOutTitle').subscribe(value => {
    //   alertTimeOutTitle = value;
    // });
    // this.translateService.get('AlertTimeOutSubtitle').subscribe(value => {
    //   alertTimeOutSubtitle = value;
    // });

    // //Volvemos a la página de inicio a los 20 minutos
    // setTimeout(()=>{
    //   //Generamos un mensaje de alerta, para indicar que su tiempo a finalizado y debe empezar de nuevo
    //   let alert = this.alertCtrl.create({
    //     title: alertTimeOutTitle,
    //     subTitle: alertTimeOutSubtitle,
    //     buttons: ['OK']
    //   });
    //   alert.present();
    //   this.navCtrl.setRoot(TabsPage);
    //   this.navCtrl.popToRoot();
    // },1200000)//20 minutos
  }

  ionViewWillEnter() {
    //Obtenemos la fotografía, al entrar en la página, pero antes de ser cargada
    this.storage.get('fotoFormulario').then((value) => {
      this.fotoFormulario = value;
    })
    //Obtenemos la firma, en caso de existir, al entrar en la página, pero antes de ser cargada
    this.storage.get('signature').then((value) => {
      this.signature = value;
    })
    //Cambiamos el texto del botón Atrás del NavBar
    if(this.translateService.currentLang == 'es'){
      this.viewController.setBackButtonText('Atrás');  
    }else{
      this.viewController.setBackButtonText('Back');
    }
  }


  irPad(){
    console.log("Dentro pad");
    this.navCtrl.push(PadFirmaPage);
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
      console.log(this.fotoFormulario);
      // var firma = new Image;
      // firma = this.signature.replace(/^data:image\/(png|jpg);base64,/, "");

      docDefinition = {
        content: [
          { text: 'Nueva LOPD Mayo 2018', style: 'header' },
          { text: this.textoPdf.p1, style: 'subheader' },
          { text: this.textoPdf.p2, style: 'story', margin: [0, 20, 0, 20] },
          { image: this.fotoFormulario, alignment: 'center', width: 100 },
          { image: 'firma', alignment: 'center', width: 100 },
          { text: new Date().toLocaleDateString(), alignment: 'right' }
        ],
        images: 
          {
            firma: this.signature, width: 100, height: 100
          }
        ,
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

    console.log ('El contenido del pdf: ' + this.pdfObj);
    this.pdfObj.getBase64((data) => {
      var dataReplace = data.replace("/","_");
      this.pdfBase64 = 'base64:prueba.pdf//' + dataReplace
    });
    //this.openSignatureModel();
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {

      let email = {
        to: 'cmialdeatelco@gmail.com',
        attachments: [
          'base64:' + this.pdfBase64
        ],
        subject: 'Prueba email ionic',
        body: 'Ionic framework',
        isHtml: false
      };      

      this.emailComposer.open(email)
      .then(()=>{
        console.log("correo enviado");
        let alert2 = this.alertCtrl.create({
          title: "Correo enviado",
          subTitle: "Funcionando..."
        });
        alert2.present();    
        setTimeout(()=>{
          //Ocultamos alerta
          alert2.dismiss();
        },6000)//5 Segundos            
      })
      .catch((err)=>{
        console.log("error enviando email");
        console.log(err);
        let alert3 = this.alertCtrl.create({
          title: "ERROR enviando correo",
          subTitle: err
        });
        alert3.present();    
        setTimeout(()=>{
          //Ocultamos alerta
          alert3.dismiss();
        },6000)//5 Segundos        
      });      

      //Si ha guardado conectamos ftp

      // .then((res: any) => {

      //   console.log('Login successful', res);
      //   let alert1 = this.alertCtrl.create({
      //     title: "RGPD Por enviar",
      //     subTitle: "Conexión correcta ftp fichero"
      //   });
      //   alert1.present();  
      //   //this.fTP.upload(this.file.dataDirectory + 'rgpd.pdf','C:/Program Files (x86)/freeFTPd/ftproot');
      //   setTimeout(()=>{
      //     //Ocultamos alerta
      //     alert1.dismiss();
      //   },6000)//5 Segundos   
      //  })
      // .catch((error: any) => {

      //   console.error(error);
      //   let alert2 = this.alertCtrl.create({
      //     title: "ERROR Conexión ftp fichero",
      //     subTitle: error
      //   });
      //   alert2.present();    
      //   setTimeout(()=>{
      //     //Ocultamos alerta
      //     alert2.dismiss();
      //   },6000)//5 Segundos        

      // });
    } else {
      //Prueba email


      // On a browser simply use download!
      //this.pdfObj.download();
    }

    //Volvemos a la página de inicio después de descargar el pdf
    //Generamos un mensaje de alerta, para indicar que se ha finalizado el proceso
    // let alert = this.alertCtrl.create({
    //   title: "RGPD Enviada",
    //   subTitle: "Dirijase al mostrador para recoger su tarjeta de acceso"
    // });
    // alert.present();

    setTimeout(()=>{
      //Ocultamos alerta y redirigimos
      //alert.dismiss();
      this.navCtrl.setRoot(TabsPage);
      this.navCtrl.popToRoot();
    },6000)//5 Segundos

  }

  openSignatureModel(){
  	let modal = this.modalController.create(PadFirmaPage);
  	modal.present();
  }


}
