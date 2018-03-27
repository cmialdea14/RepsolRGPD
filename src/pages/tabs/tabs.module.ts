import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';

//Importamos el módulo de traducciones
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    TranslateModule,
  ]
})
export class TabsPageModule {}
