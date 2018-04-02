import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfPage } from './pdf';

//Importamos el módulo de traducciones
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PdfPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfPage),
    TranslateModule,
  ],
})
export class PdfPageModule {}
