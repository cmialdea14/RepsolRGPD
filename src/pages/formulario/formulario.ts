import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { PdfPage } from '../pdf/pdf';

//Importamos el módulo de traducciones. Necesitamos ViewController y el provider TranslateService
import { ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
//Importamos el Storage
import { Storage } from '@ionic/storage';
//Importamos el provider de alertas
import { AlertController } from 'ionic-angular';
//Importamos la pagina de Tabs, para volver a inicio
import { TabsPage } from '../tabs/tabs';
//Importamos la camara
import { Camera, CameraOptions } from '@ionic-native/camera';
//Importamos el validator customizado que hemos dejado en assets
import { DocSpanishValidator } from '../../assets/validators/docspanish.validator';


/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:'form'
})
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  //Creamos variable con la imagen capturada
  foto;

  private formularioAcceso:FormGroup;	

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder, public viewController: ViewController,private translateService: TranslateService,
    private storage: Storage, public alertCtrl: AlertController, private camera: Camera, public toastCtrl: ToastController) {
  	this.formularioAcceso = formBuilder.group(
  		{
  			nombre: new FormControl("",[Validators.required, Validators.pattern("([A-Z][a-zA-Z]*)")]),
  			apellido1:  new FormControl("",[Validators.required, Validators.pattern("([A-Z][a-zA-Z]*)")]),
  			apellido2:  new FormControl("",[Validators.pattern("([A-Z][a-zA-Z]*)")]),
        identidad: new FormControl("",[Validators.required, DocSpanishValidator.notValidNifNiePassport]),
  			email: ["", Validators.email]
  		}
  	)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');

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
    //   //Mostramos el alert
    //   alert.present();

    //   //Limpiamos los datos de memoria y pasamos a la pantalla del formulario
    //   this.storage.remove('datosFormulario').then(()=>{
    //     console.log("Storage limpio desde Formulario");
    //     //Volvemos a la pantalla de inicio
    //     this.navCtrl.setRoot(TabsPage);
    //     this.navCtrl.popToRoot();
    //   });
    // },1200000)//20 minutos
  }

  ionViewWillEnter() {
    //Cambiamos el texto del botón Atrás del NavBar
    if(this.translateService.currentLang == 'es'){
      this.viewController.setBackButtonText('Atrás');  
    }else{
      this.viewController.setBackButtonText('Back');
    }
  }

  //Enviamos el formulario
  enviarForm(){
    //Guardamos en el Storage datosFormulario
    this.storage.set('datosFormulario', this.formularioAcceso.value).then((data) => {
      //Vamos a la pantalla pdf
      // this.navCtrl.push(PdfPage, {datosFormulario: this.formularioAcceso.value});
      this.navCtrl.push(PdfPage);
    })
    
  }

  //Capturamos foto
  capturarFoto(){
    let options:CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      targetWidth:300,
      correctOrientation: true,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options)
    .then((imagenData)=>{
      this.foto = 'data:image/jpeg;base64,' + imagenData;
    })
    .catch((error)=>{
      console.log(error);
      this.mostrarErrorFoto();
    })
  }

  mostrarErrorFoto(){
    //Creamos mensaje de aviso
    let toastErrorFoto;
    this.translateService.get('ToastErrorFoto').subscribe(value => {
      toastErrorFoto = value;
    });
    let toast = this.toastCtrl.create({
      message: toastErrorFoto,
      duration: 3000
    });
    toast.present();
  }

}
