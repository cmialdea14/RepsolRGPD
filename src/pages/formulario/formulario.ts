import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { PdfPage } from '../pdf/pdf';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  private formularioAcceso:FormGroup;	

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder:FormBuilder) {
  	this.formularioAcceso = formBuilder.group(
  		{
  			nombre: new FormControl("",[Validators.required, Validators.pattern("([A-Z][a-zA-Z]*)")]),
  			apellido1:  new FormControl("",[Validators.required, Validators.pattern("([A-Z][a-zA-Z]*)")]),
  			apellido2:  new FormControl("",[Validators.required, Validators.pattern("([A-Z][a-zA-Z]*)")]),
  			email: ["", Validators.email]
  		}
  	)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  //Enviamos el formulario
  enviarForm(){
  	console.log(this.formularioAcceso.value);
  	//Vamos a la pantalla pdf
  	this.navCtrl.push(PdfPage, {datosFormulario: this.formularioAcceso.value});
  }

}
