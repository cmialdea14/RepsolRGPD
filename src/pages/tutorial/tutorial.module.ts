import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialPage } from './tutorial';
//Importamos el módulo de traducciones
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TutorialPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialPage),
    TranslateModule,
  ],
})
export class TutorialPageModule {}
