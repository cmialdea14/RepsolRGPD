import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormularioPage } from './formulario';

//Importamos el módulo de traducciones
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FormularioPage,
  ],
  imports: [
    IonicPageModule.forChild(FormularioPage),
    TranslateModule,
  ],
})
export class FormularioPageModule {}
