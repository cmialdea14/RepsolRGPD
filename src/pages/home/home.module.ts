import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
//Importamos el módulo de traducciones
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TranslateModule,
  ],
})
export class HomePageModule {}
