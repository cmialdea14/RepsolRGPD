import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Importamos la TABS para pasar a ella en cualquier momento del tutorial
import { TabsPage } from '../tabs/tabs';
//Importamos el Storage
import { Storage } from '@ionic/storage';
//Importamos la página del formulario
import { FormularioPage } from '../formulario/formulario';
//Importamos el servicio de traducción
import { TranslateService } from '@ngx-translate/core'
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

	slides = [
	    {
	      title: "Bienvenido a REPSOL",
	      description: "Para su comodidad y seguridad, <b>Repsol</b>, pone a su disposición una nueva app para la aceptación de la nueva <b>ley de protección de datos</b>. <br/> <br/>Para comenzar, os mostramos un pequeño <b>tutorial</b>, que usted podrá cerrar en cualquier momento con el botón <i>Omitir</i> de la parte superior derecha.",
	      image: "assets/imgs/repsol.jpg",
	      icon: "school",
	    },
	    {
	      title: "Datos Personales",
	      description: "Debe rellenar los campos obligatorios del formulario de acceso y tomarse una foto.",
	      image: "assets/imgs/form.jpg",
	    },
	    {
	      title: "Nueva Ley de Protección de Datos",
	      description: "Se mostrará el documento a firmar, ya completado con los datos recogidos en el formulario.",
	      image: "assets/imgs/documento.jpg",
	    },
	    {
	      title: "Firma del documento",
	      description: "Al pulsar <b>Firmar</b>, le aparecerá el pad de firma, con el cual debe firmar el documento.",
	      image: "assets/imgs/firma.jpg",
	    },
	    {
	      title: "Documento cumplimentado!",
	      description: "Para terminar el proceso, pulse en <b>Enviar</b>",
	      image: "assets/imgs/documentoFirmado.jpg",
	    },
  	];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private translateService: TranslateService, public viewController: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

    ionViewWillEnter() {
    //Cambiamos el texto del botón Atrás del NavBar
    if(this.translateService.currentLang == 'es'){
      this.viewController.setBackButtonText('Atrás');  
    }else{
      this.viewController.setBackButtonText('Back');
    }   

  }

  //Navegamos a la home
  navegarHome(){
  	this.navCtrl.setRoot(TabsPage);
  	//this.navCtrl.popToRoot();
  	this.storage.set('tutoDone', true);
  }

  irFormAcceso(){
  	this.navCtrl.push(FormularioPage);
  }

}
