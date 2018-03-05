import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FormularioPage } from '../pages/formulario/formulario';
import { PdfPage } from '../pages/pdf/pdf';
import { PadFirmaPage } from '../pages/pad-firma/pad-firma';


import { HomePageModule } from '../pages/home/home.module';
import { FormularioPageModule } from '../pages/formulario/formulario.module';
import { PdfPageModule } from '../pages/pdf/pdf.module';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { SignaturePadModule } from 'angular2-signaturepad';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PadFirmaPage
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    FormularioPageModule,
    PdfPageModule,
    IonicModule.forRoot(MyApp, {
      //Cambiamos el valor del texto del botón back de la navegación 
      backButtonText: 'Atrás'
    }),
    SignaturePadModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FormularioPage,
    PdfPage,
    PadFirmaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
