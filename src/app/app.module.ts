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

import { TabsPageModule } from '../pages/tabs/tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { FormularioPageModule } from '../pages/formulario/formulario.module';
import { PdfPageModule } from '../pages/pdf/pdf.module';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { SignaturePadModule } from 'angular2-signaturepad';
//Importamos Storage de Ionic
import { IonicStorageModule } from '@ionic/storage';

//Importamos módulo de traducción
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

//Importamos la camara
import { Camera, CameraOptions } from '@ionic-native/camera';


//Creamos una función que desde src/assets/i18n obtengan los archivos de las traducciones de la aplicación
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    PadFirmaPage
  ],
  imports: [
    BrowserModule,
    //Añadimos el HttpClientModule para poder usar el HttpClient
    HttpClientModule,
    TabsPageModule,
    HomePageModule,
    FormularioPageModule,
    PdfPageModule,
    IonicModule.forRoot(MyApp, {
      //Cambiamos el valor del texto del botón back de la navegación 
      backButtonText: 'Atrás'
    }),
    SignaturePadModule,
    IonicStorageModule.forRoot(),
    //Importamos el modulo de traducción
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
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
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
