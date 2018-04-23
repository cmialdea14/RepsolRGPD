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
      console.log(data);
      var data2 = data.replace('////', '');
      //this.pdfBase64 = 'base64:prueba.pdf//' + data2;
      //this.pdfBase64 = data2;

      this.pdfBase64 = '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bHMgPDwvTnVtcyBbMCA8PCAvUyAvRCA+PiBdID4+Cj4+CmVuZG9iagoKMiAwIG9iago8PAovVGl0bGUgPGZlZmYwMDZlMDA3NTAwNjUwMDc2MDA2ZjAwMjAwMDc0MDA2MTAwNjIwMDZjMDA2NTAwNzIwMDZmPgovQXV0aG9yIDxmZWZmPgovQ3JlYXRvciA8ZmVmZjAwNGQwMDY5MDA2MzAwNzIwMDZmMDA1MzAwNzQwMDcyMDA2MTAwNzQwMDY1MDA2NzAwNzkwMDIwMDA1MDAwNDQwMDQ2MDAyMDAwNDUwMDc4MDA3MDAwNmYwMDcyMDA3NDAwNjUwMDcyPgovUHJvZHVjZXIgPGZlZmYwMDRkMDA2OTAwNjMwMDcyMDA2ZjAwNTMwMDc0MDA3MjAwNjEwMDc0MDA2NTAwNjcwMDc5MDAyMDAwMzg+Ci9DcmVhdGlvbkRhdGUgKEQ6MjAxODA0MTMxMjM3MjIrMDAnMDAnKQovTW9kRGF0ZSAoRDoyMDE4MDQxMzEyMzcyMiswMCcwMCcpCj4+CmVuZG9iagoKMyAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzEyIDAgUiBdCi9NZWRpYUJveCBbMCAwIDc5MiA2MTJdCi9SZXNvdXJjZXMKPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQ10KL0ZvbnQgPDwvRjEgNiAwIFIgL0YyIDkgMCBSPj4KL1hPYmplY3QgPDwvSW0wIDUgMCBSPj4KL0V4dEdTdGF0ZSA8PCAvR1MwIDw8IC9UeXBlIC9FeHRHU3RhdGUgL1NBIHRydWUgPj4gPj4KPj4KPj4KJVNjYWxpbmcgRmFjdG9yOiAxMDAlCmVuZG9iagoKNCAwIG9iago8PAovVHlwZSAvR3JvdXAKL1MgL1RyYW5zcGFyZW5jeQovQ1MgL0RldmljZVJHQgo+PgplbmRvYmoKCnhyZWYKMCAxNQowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDI2NTIgMDAwMDAgbiAKMDAwMDAwMjc0MiAwMDAwMCBuIAowMDAwMDAzMTE3IDAwMDAwIG4gCjAwMDAwMDMzNzggMDAwMDAgbiAKMDAwMDAwMDAxNiAwMDAwMCBuIAowMDAwMDAwMjk3IDAwMDAwIG4gCjAwMDAwMDA0NDAgMDAwMDAgbiAKMDAwMDAwMDQ1NiAwMDAwMCBuIAowMDAwMDAwNDcyIDAwMDAwIG4gCjAwMDAwMDA2NDAgMDAwMDAgbiAKMDAwMDAwMDY1NyAwMDAwMCBuIAowMDAwMDAwNjc0IDAwMDAwIG4gCjAwMDAwMDA3NjggMDAwMDAgbiAKMDAwMDAwMjYzMSAwMDAwMCBuIAoKdHJhaWxlcgo8PAovU2l6ZSAxNQovUm9vdCAxIDAgUgovSW5mbyAyIDAgUgovSUQgWzw5MTJiZTg0ZDhjNTI1MWVmNDlhY2RjNGI2ZWJhYTc5OT4gPDkxMmJlODRkOGM1MjUxZWY0OWFjZGM0YjZlYmFhNzk5Pl0KPj4KCnN0YXJ0eHJlZgozNDQ1CgolJUVPRgo=';
      console.log(this.pdfBase64);

    });
    //this.openSignatureModel();
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {

      let email = {
        to: 'cmialdeatelco@gmail.com',
        attachments: [
          'base64:prueba.pdf//' + this.pdfBase64
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
