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
import { TutorialPage } from '../pages/tutorial/tutorial';

import { TabsPageModule } from '../pages/tabs/tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { FormularioPageModule } from '../pages/formulario/formulario.module';
import { PdfPageModule } from '../pages/pdf/pdf.module';
import { TutorialPageModule } from '../pages/tutorial/tutorial.module';

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
// Emulamos la cámara para el desarrollo
// En los providers cambiar:
// Desarrollo: {provide: Camera,useClass: CameraMock}
// Producción: Camera
class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("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");
    })
  }
}

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
    TutorialPageModule,
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
    PadFirmaPage,
    TutorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileOpener,
    {provide: Camera,useClass: CameraMock},
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
