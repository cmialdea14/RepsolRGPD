webpackJsonp([0],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormularioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pdf_pdf__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_validators_docspanish_validator__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Importamos el módulo de traducciones. Necesitamos ViewController y el provider TranslateService


//Importamos el Storage

//Importamos el provider de alertas

//Importamos la camara

//Importamos el validator customizado que hemos dejado en assets

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormularioPage = (function () {
    function FormularioPage(navCtrl, navParams, formBuilder, viewController, translateService, storage, alertCtrl, camera, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.viewController = viewController;
        this.translateService = translateService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.toastCtrl = toastCtrl;
        this.formularioAcceso = formBuilder.group({
            nombre: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^([A-ZÁÉÍÓÚ]{1}[a-zñáéíó]+[\\s]*)+$")]),
            apellido1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\\s]*)+$")]),
            apellido2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern("^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\\s]*)+$")]),
            identidad: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_7__assets_validators_docspanish_validator__["a" /* DocSpanishValidator */].notValidNifNiePassport]))
        });
    }
    FormularioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormularioPage');
        // //Obtenemos los titulos de la alerta timeout de los ficheros de traducción
        // let alertTimeOutTitle;
        // let alertTimeOutSubtitle;
        // this.translateService.get('AlertTimeOutTitle').subscribe(value => {
        //   alertTimeOutTitle = value;
        // });
        // this.translateService.get('AlertTimeOutSubtitle').subscribe(value => {
        //   alertTimeOutSubtitle = value;
        // });
        // //Volvemos a la página de inicio a los 20 minutos
        // setTimeout(()=>{
        //   //Generamos un mensaje de alerta, para indicar que su tiempo a finalizado y debe empezar de nuevo
        //   let alert = this.alertCtrl.create({
        //     title: alertTimeOutTitle,
        //     subTitle: alertTimeOutSubtitle,
        //     buttons: ['OK']
        //   });
        //   //Mostramos el alert
        //   alert.present();
        //   //Limpiamos los datos de memoria y pasamos a la pantalla del formulario
        //   this.storage.remove('datosFormulario').then(()=>{
        //     console.log("Storage limpio desde Formulario");
        //     //Volvemos a la pantalla de inicio
        //     this.navCtrl.setRoot(TabsPage);
        //     this.navCtrl.popToRoot();
        //   });
        // },1200000)//20 minutos
    };
    FormularioPage.prototype.ionViewWillEnter = function () {
        //Cambiamos el texto del botón Atrás del NavBar
        if (this.translateService.currentLang == 'es') {
            this.viewController.setBackButtonText('Atrás');
        }
        else {
            this.viewController.setBackButtonText('Back');
        }
    };
    //Enviamos el formulario
    FormularioPage.prototype.enviarForm = function () {
        var _this = this;
        //Guardamos en el Storage fotografía
        //this.storage.set('fotoFormulario',this.foto);
        //Guardamos en el Storage datosFormulario
        this.storage.set('datosFormulario', this.formularioAcceso.value).then(function (data) {
            //Vamos a la pantalla pdf
            // this.navCtrl.push(PdfPage, {datosFormulario: this.formularioAcceso.value});
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pdf_pdf__["a" /* PdfPage */]);
        });
    };
    FormularioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-formulario',template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\formulario\formulario.html"*/'<!--\n  Generated template for the FormularioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'TituloNavBarForm\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<!--Toma de fotogorafía\n	<ion-card class="cardFoto">\n	  <ion-card-title text-center>\n	      {{ \'Foto\' | translate }}\n	  </ion-card-title>\n	  <div class="itemFoto">\n	  	<img *ngIf="foto" [src]="foto"/>\n	  </div>\n	  <ion-card-content>		\n		<button ion-button type="button" block small (click)="capturarFoto()">{{ \'BotonFoto\' | translate }}</button>\n		<p text-center *ngIf="!fotoCapturada">{{ \'TextoInfoFoto\' | translate }}</p>\n	  </ion-card-content>\n	</ion-card>\n	-->\n	<!--Titulo Formulario-->\n	<h2 class="titleForm">{{ \'TituloForm\' | translate }}</h2>\n	<div class="instruccion">\n		<h4>{{ \'TextoInfoFormulario\' | translate }}</h4>\n		<div class="personIcon">\n			<ion-icon class="icon-person-group" ios="ios-person-outline" md="md-person"></ion-icon>\n		</div>\n	</div>	\n	<!--Formulario con data driven forms (FORM BUILDER)-->\n	<form class="formulario" [formGroup]="formularioAcceso" (ngSubmit)="enviarForm()">\n		<ion-list>\n			<ion-item>\n				<ion-label floating>{{ \'Nombre\' | translate }}</ion-label>\n				<ion-input type="string" formControlName="nombre" ></ion-input>\n			</ion-item>\n			<div class="validator-info" *ngIf="formularioAcceso.controls.nombre.hasError(\'required\')">\n				  {{ \'CampoObligatorio\' | translate }}\n			</div>\n			<div class="validator-error" *ngIf="formularioAcceso.controls.nombre.hasError(\'pattern\')">\n				 {{ \'ValidacionNombre\' | translate }}\n			</div>\n			<ion-item>\n				<ion-label floating>{{ \'Apellido1\' | translate }}</ion-label>\n				<ion-input type="string" formControlName="apellido1" ></ion-input>\n			</ion-item>\n			<div class="validator-info" *ngIf="formularioAcceso.controls.apellido1.hasError(\'required\')">\n				  {{ \'CampoObligatorio\' | translate }}\n			</div>\n			<div class="validator-error" *ngIf="formularioAcceso.controls.apellido1.hasError(\'pattern\')">\n				  {{ \'ValidacionApellido\' | translate }}\n			</div>			\n			<ion-item>\n				<ion-label floating>{{ \'Apellido2\' | translate }}</ion-label>\n				<ion-input type="string" formControlName="apellido2"></ion-input>\n			</ion-item>\n			<div class="validator-error" *ngIf="formularioAcceso.controls.apellido2.hasError(\'pattern\')">\n				  {{ \'ValidacionApellido\' | translate }}\n			</div>	\n			<ion-item>\n				<ion-label floating>{{ \'Identidad\' | translate }}</ion-label>\n				<ion-input type="string" formControlName="identidad"></ion-input>\n			</ion-item>\n			<div class="validator-info" *ngIf="formularioAcceso.controls.identidad.hasError(\'required\')">\n				  {{ \'CampoObligatorio\' | translate }}\n			</div>\n			<div class="validator-error" *ngIf="formularioAcceso.controls.identidad.hasError(\'notValidNifNiePassport\')">\n				  {{ \'ValidacionIdentidad\' | translate }}\n			</div>							\n			<button class="nextButton" ion-button type="submit" color="secondary" [disabled]="!formularioAcceso.valid">{{ \'BotonSiguiente\' | translate }}</button>\n\n		</ion-list>\n\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\formulario\formulario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], FormularioPage);
    return FormularioPage;
}());

//# sourceMappingURL=formulario.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_ftp__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pad_firma_pad_firma__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




__WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;




//Importamos la pagina de Tabs, para volver a inicio

//Cambio texto botón Back(Usamos el provider TranslateService)


//Importamos el Storage

//Importamos el provider de alertas

//Importamos el email composer

//Importamos el social-sharing para compartir por email el pdf

/**
 * Generated class for the PdfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PdfPage = (function () {
    function PdfPage(navCtrl, navParams, plt, file, fileOpener, modalController, viewController, translateService, storage, alertCtrl, emailComposer, socialSharing, fTP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.modalController = modalController;
        this.viewController = viewController;
        this.translateService = translateService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
        this.fTP = fTP;
        //Creamos variable para guardar la fotografía
        //fotoFormulario
        //Creamos las variables para el formulario
        this.textoPdf = {
            p1: '',
            p2: ''
        };
        this.pdfObj = null;
        this.pdfBlob = null;
        //Guardamos en nuestra variable los datos del formulario
        this.storage.get('datosFormulario').then(function (value) {
            _this.datosFormulario = value;
            _this.textoPdf.p1 = "Yo, " + _this.datosFormulario.nombre + " " + _this.datosFormulario.apellido1 + " " + _this.datosFormulario.apellido2 + ", acepto la nueva ley de protección de datos";
            _this.textoPdf.p2 = "Lorem ipsum dolor sit amet," +
                "consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc." +
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.";
        }).catch(function () {
            //Si no existen datos del formulario, volvemos a la página de inicio e iniciamos la pila de páginas de navegación
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
            _this.navCtrl.popToRoot();
        });
    }
    PdfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PdfPage');
        // //Obtenemos los titulos de la alerta timeout de los ficheros de traducción
        // let alertTimeOutTitle;
        // let alertTimeOutSubtitle;
        // this.translateService.get('AlertTimeOutTitle').subscribe(value => {
        //   alertTimeOutTitle = value;
        // });
        // this.translateService.get('AlertTimeOutSubtitle').subscribe(value => {
        //   alertTimeOutSubtitle = value;
        // });
        // //Volvemos a la página de inicio a los 20 minutos
        // setTimeout(()=>{
        //   //Generamos un mensaje de alerta, para indicar que su tiempo a finalizado y debe empezar de nuevo
        //   let alert = this.alertCtrl.create({
        //     title: alertTimeOutTitle,
        //     subTitle: alertTimeOutSubtitle,
        //     buttons: ['OK']
        //   });
        //   alert.present();
        //   this.navCtrl.setRoot(TabsPage);
        //   this.navCtrl.popToRoot();
        // },1200000)//20 minutos
    };
    PdfPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //Obtenemos la fotografía, al entrar en la página, pero antes de ser cargada
        // this.storage.get('fotoFormulario').then((value) => {
        //   this.fotoFormulario = value;
        // })
        //Obtenemos la firma, en caso de existir, al entrar en la página, pero antes de ser cargada
        this.storage.get('signature').then(function (value) {
            _this.signature = value;
        });
        //Cambiamos el texto del botón Atrás del NavBar
        if (this.translateService.currentLang == 'es') {
            this.viewController.setBackButtonText('Atrás');
        }
        else {
            this.viewController.setBackButtonText('Back');
        }
    };
    PdfPage.prototype.irPad = function () {
        console.log("Dentro pad");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pad_firma_pad_firma__["a" /* PadFirmaPage */]);
    };
    PdfPage.prototype.createPdf = function () {
        console.log(this.textoPdf.p1);
        console.log(this.textoPdf.p2);
        var docDefinition;
        if (typeof this.signature === 'undefined') {
            docDefinition = {
                content: [
                    { text: 'Nueva LOPD Mayo 2018', style: 'header' },
                    { text: this.textoPdf.p1, style: 'subheader' },
                    { text: this.textoPdf.p2, style: 'story', margin: [0, 20, 0, 20] },
                    { text: new Date().toLocaleDateString(), alignment: 'right' }
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                    },
                    subheader: {
                        fontSize: 14,
                        bold: true,
                        margin: [0, 15, 0, 0]
                    },
                    story: {
                        italic: true,
                        alignment: 'center',
                        width: '50%',
                    }
                }
            };
        }
        else {
            // var firma = new Image;
            // firma = this.signature.replace(/^data:image\/(png|jpg);base64,/, "");
            docDefinition = {
                content: [
                    { text: 'Nueva LOPD Mayo 2018', style: 'header' },
                    { text: this.textoPdf.p1, style: 'subheader' },
                    { text: this.textoPdf.p2, style: 'story', margin: [0, 20, 0, 20] },
                    { image: 'firma', alignment: 'center', width: 100 },
                    { text: new Date().toLocaleDateString(), alignment: 'right' }
                ],
                images: {
                    firma: this.signature, width: 100, height: 100
                },
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                    },
                    subheader: {
                        fontSize: 14,
                        bold: true,
                        margin: [0, 15, 0, 0]
                    },
                    story: {
                        italic: true,
                        alignment: 'center',
                        width: '50%',
                    }
                }
            };
        }
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_2_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
    };
    PdfPage.prototype.downloadPdf = function () {
        //Si ha guardado conectamos ftp
        var _this = this;
        // .then((res: any) => {
        //   console.log('Login successful', res);
        //   let alert1 = this.alertCtrl.create({
        //     title: "RGPD Por enviar",
        //     subTitle: "Conexión correcta ftp fichero"
        //   });
        //   alert1.present();  
        //   //this.fTP.upload(this.file.dataDirectory + 'rgpd.pdf','C:/Program Files (x86)/freeFTPd/ftproot');
        //   setTimeout(()=>{
        //     //Ocultamos alerta
        //     alert1.dismiss();
        //   },6000)//5 Segundos   
        //  })
        // .catch((error: any) => {
        //   console.error(error);
        //   let alert2 = this.alertCtrl.create({
        //     title: "ERROR Conexión ftp fichero",
        //     subTitle: error
        //   });
        //   alert2.present();    
        //   setTimeout(()=>{
        //     //Ocultamos alerta
        //     alert2.dismiss();
        //   },6000)//5 Segundos        
        // });
        // } else {
        //Prueba email
        // On a browser simply use download!
        //this.pdfObj.download();
        // }
        //Volvemos a la página de inicio después de descargar el pdf
        //Generamos un mensaje de alerta, para indicar que se ha finalizado el proceso
        // let alert = this.alertCtrl.create({
        //   title: "RGPD Enviada",
        //   subTitle: "Dirijase al mostrador para recoger su tarjeta de acceso"
        // });
        // alert.present();
        setTimeout(function () {
            //Ocultamos alerta y redirigimos
            //alert.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */]);
            _this.navCtrl.popToRoot();
        }, 6000); //5 Segundos
    };
    PdfPage.prototype.openSignatureModel = function () {
        var modal = this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__pad_firma_pad_firma__["a" /* PadFirmaPage */]);
        modal.present();
    };
    // blobTopdf(){
    //   this.pdfObj.getBlob((data) => {
    //     console.log(data);
    //     this.pdfBlob = data;
    //     var replaceFile:boolean = true;
    //     this.file.writeFile(this.file.applicationStorageDirectory,'rgpd.pdf',this.pdfBlob)
    //     .then(()=>{ console.log('Fichero pdf creado') })
    //     .catch((err)=>{ console.log('ERROR generando fichero pdf: '+ err) })
    //   });
    // }
    PdfPage.prototype.connectFtpServer = function () {
        var _this = this;
        this.fTP.connect('192.168.1.121', 'ionic', '1234')
            .then(function (res) {
            var alert22 = _this.alertCtrl.create({
                title: "Conectado!!",
                subTitle: "Bienvenido al servidor"
            });
            alert22.present();
            setTimeout(function () {
                //Ocultamos alerta
                alert22.dismiss();
            }, 6000); //5 Segundos         
        })
            .catch(function (error) {
            var alert24 = _this.alertCtrl.create({
                title: "ERROR conexión ftp",
                subTitle: error
            });
            alert24.present();
            setTimeout(function () {
                //Ocultamos alerta
                alert24.dismiss();
            }, 6000); //5 Segundos            
        });
    };
    PdfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdf',template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\pdf\pdf.html"*/'I<!--\n  Generated template for the PdfPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'TituloNavBarRGPD\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-item>\n		<h2><ion-icon class="libro" ios="ios-book-outline" md="md-book"></ion-icon> {{ \'TituloNavBarRGPD\' | translate }}</h2>\n	</ion-item>\n	<div class="instruccion">\n		<h4>{{ \'TextoInstruccionLectura1\' | translate }}<br/>{{ \'TextoInstruccionLectura2\' | translate }}</h4>\n		<div class="lectura-group">\n			<ion-icon class="icon-lectura-group" ios="ios-glasses-outline" md="md-glasses"></ion-icon>\n			<ion-icon class="icon-lectura-group" ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon>\n			<ion-icon class="icon-lectura-group" ios="ios-paper-outline" md="md-paper"></ion-icon>\n		</div>\n	</div>\n	\n	<div class="documento" text-wrap>\n		<h2>{{ \'TituloDocumento\' | translate }}</h2>\n		<p>{{textoPdf.p1}}</p>\n		<p>{{textoPdf.p2}}</p>\n	</div>\n\n	<div class="foto-firma">\n		<div class="recuadroFirma" >\n			<p *ngIf="!signature">Firma</p>\n			<img *ngIf="signature" [src]="signature"/>\n		</div>\n	</div>	\n<!-- 	<div class="foto-firma">\n		<img *ngIf="fotoFormulario" [src]="fotoFormulario"/>\n		<img *ngIf="signature" [src]="signature"/>\n		<div class="recuadroFirma" *ngIf="!signature">\n			<p>Firma</p>\n		</div>\n	</div> -->\n\n	<div class="instruccion">\n		<h4 *ngIf="!signature">{{ \'TextoInstruccionSinFirma\' | translate }}</h4>\n		<h4 *ngIf="signature">{{ \'TextoInstruccionFirmado\' | translate }}</h4>\n<!-- 		<div class="lectura-group">\n			<ion-icon *ngIf="!signature" class="icon-lectura-group" ios="ios-create-outline" md="md-create"></ion-icon>\n			<ion-icon *ngIf="signature" class="icon-lectura-group" ios="ios-arrow-round-forward" md="md-arrow-round-forward"></ion-icon>\n			<ion-icon *ngIf="signature" class="icon-lectura-group" ios="ios-person-add-outline" md="md-paper"></ion-icon>\n		</div> -->\n	</div>	\n\n	<ion-grid>\n		<ion-row>\n			<ion-col col-6>\n				<button ion-button block (click)="irPad()" color="secondary" icon-right>{{ \'BotonFirmar\' | translate }}<ion-icon ios="ios-create-outline" md="md-create"></ion-icon></button>\n			</ion-col>\n			<ion-col col-6>\n				<button ion-button block (click)="createPdf();connectFtpServer()" color="secondary" [disabled]="!signature" icon-right>{{ \'BotonEnviar\' | translate }}<ion-icon ios="ios-send-outline" md="md-send"></ion-icon></button>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\pdf\pdf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_ftp__["a" /* FTP */]])
    ], PdfPage);
    return PdfPage;
}());

//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formulario_formulario__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Importamos la TABS para pasar a ella en cualquier momento del tutorial

//Importamos el Storage

//Importamos la página del formulario

//Importamos el servicio de traducción


/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialPage = (function () {
    function TutorialPage(navCtrl, navParams, storage, translateService, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.translateService = translateService;
        this.viewController = viewController;
        this.slides = [
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
    }
    TutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialPage');
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        //Cambiamos el texto del botón Atrás del NavBar
        if (this.translateService.currentLang == 'es') {
            this.viewController.setBackButtonText('Atrás');
        }
        else {
            this.viewController.setBackButtonText('Back');
        }
    };
    //Navegamos a la home
    TutorialPage.prototype.navegarHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        //this.navCtrl.popToRoot();
        this.storage.set('tutoDone', true);
    };
    TutorialPage.prototype.irFormAcceso = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__formulario_formulario__["a" /* FormularioPage */]);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\tutorial\tutorial.html"*/'<!--\n  Generated template for the TutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'TituloNavBarTuto\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager="false">\n    <ion-slide>\n      <img src="/assets/imgs/repsol.jpg" class="slide-image"/>\n      <h1 class="slide-title">{{ \'TituloTuto\' | translate }}</h1>\n      <ion-icon ios="ios-information-circle-outline" md="md-information-circle"></ion-icon>\n      <p>{{ \'TextoTuto1\' | translate }}<b>{{ \'TextoTuto2\' | translate }}</b>{{ \'TextoTuto3\' | translate }}<b>{{ \'TextoTuto4\' | translate }}</b>. <br/> <br/>{{ \'TextoTuto5\' | translate }}</p>\n      <button ion-button large icon-end color="primary" (click)="irFormAcceso()">{{ \'BotonSiguiente\' | translate }}</button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\tutorial\tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/formulario/formulario.module": [
		215
	],
	"../pages/home/home.module": [
		316
	],
	"../pages/pdf/pdf.module": [
		318
	],
	"../pages/tabs/tabs.module": [
		319
	],
	"../pages/tutorial/tutorial.module": [
		320
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioPageModule", function() { return FormularioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formulario__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Importamos el módulo de traducciones

var FormularioPageModule = (function () {
    function FormularioPageModule() {
    }
    FormularioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__formulario__["a" /* FormularioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__formulario__["a" /* FormularioPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], FormularioPageModule);
    return FormularioPageModule;
}());

//# sourceMappingURL=formulario.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadFirmaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Cambio texto botón Back(Usamos el provider TranslateService)


/**
 * Generated class for the PadFirmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PadFirmaPage = (function () {
    function PadFirmaPage(navCtrl, navParams, storage, toastCtrl, viewController, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.viewController = viewController;
        this.translateService = translateService;
        //Creamos variable para guardar los datos de la firma
        this.signature = '';
        this.isDrawing = false;
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 600,
            'canvasHeight': 460,
            'backgroundColor': '#FFFFFF',
            'penColor': '#091742' //'#000000'
        };
    }
    PadFirmaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PadFirmaPage');
    };
    PadFirmaPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        //Cambiamos el texto del botón Atrás del NavBar
        if (this.translateService.currentLang == 'es') {
            this.viewController.setBackButtonText('Atrás');
        }
        else {
            this.viewController.setBackButtonText('Back');
        }
        //Limpiamos el pad
        this.signaturePad.clear();
        this.storage.get('signature').then(function (data) {
            _this.signature = data;
        });
    };
    PadFirmaPage.prototype.drawComplete = function () {
        //No hacemos nada al terminar cada trazo
        //this.isDrawing = false;
    };
    PadFirmaPage.prototype.drawStart = function () {
        this.isDrawing = true;
    };
    PadFirmaPage.prototype.savePad = function () {
        if (this.isDrawing) {
            this.signature = this.signaturePad.toDataURL();
            //Guardamos la firma en el local Storage
            this.storage.set('signature', this.signature);
            //Limpiamos el pad
            this.signaturePad.clear();
            //Creamos mensaje de aviso
            var toastFirmado_1;
            this.translateService.get('ToastFirmado').subscribe(function (value) {
                toastFirmado_1 = value;
            });
            var toast = this.toastCtrl.create({
                message: toastFirmado_1,
                duration: 3000
            });
            toast.present();
        }
        else {
            //Limpiamos el pad
            this.signaturePad.clear();
            //Creamos mensaje de aviso
            var toastNoFirmado_1;
            this.translateService.get('ToastNoFirmado').subscribe(function (value) {
                toastNoFirmado_1 = value;
            });
            var toast = this.toastCtrl.create({
                message: toastNoFirmado_1,
                duration: 3000
            });
            toast.present();
        }
        //Quitamos la página de la pila del navegador de páginas 
        this.navCtrl.pop();
    };
    PadFirmaPage.prototype.clearPad = function () {
        this.signaturePad.clear();
    };
    PadFirmaPage.prototype.cancelPad = function () {
        this.signaturePad.clear();
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], PadFirmaPage.prototype, "signaturePad", void 0);
    PadFirmaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pad-firma',template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\pad-firma\pad-firma.html"*/'<!--\n  Generated template for the PadFirmaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'TituloNavBarFirma\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n		<div>\n			<h2>{{ \'TituloPad\' | translate }}</h2>\n		</div>\n		<div class="boli">\n			<img src="/assets/imgs/boliRepsol3.jpg">\n		</div>		\n\n		<div class="infoFirma">{{ \'TextoInfoFirma\' | translate }}</div>\n		<div class="colPad" [ngClass]="{\'drawing-active\': isDrawing}">\n			<signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n		</div>\n		<ion-grid>\n			<ion-row>\n				<ion-col col-4>\n					<button ion-button full color="danger" (click)="cancelPad()">{{ \'BotonCancelar\' | translate }}</button>\n				</ion-col>\n				<ion-col col-4>\n					<button ion-button full color="light" (click)="clearPad()">{{ \'BotonLimpiar\' | translate }}</button>\n				</ion-col>\n				<ion-col col-4>\n					<button ion-button full color="secondary" (click)="savePad()">{{ \'BotonGuardar\' | translate }}</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\pad-firma\pad-firma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
    ], PadFirmaPage);
    return PadFirmaPage;
}());

//# sourceMappingURL=pad-firma.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Importamos el módulo de traducciones

var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tutorial_tutorial__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Importamos el servicio de traducción

//Importamos el Storage

//Importamos el tutorial

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, translateService, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translateService = translateService;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        //Ocultamos el botón BACK/ATRÁS para la página home 
        this.viewCtrl.showBackButton(false);
    };
    // ionViewWillLeave(){
    //   //Se ejecuta cuando la página deja de estar activa
    //   //Guardamos el valor que había en el Storage antes de limpiarlo
    //   this.storage.set('tutoDone',this.tutoDone);
    //   console.log("ionViewWillLeave home--> Esto es el valor de tutoDone: " + this.tutoDone);
    // }
    HomePage.prototype.irInfoPage = function () {
        //Si no ha visto el tutorial, lo mostramos
        // this.storage.get('tutoDone').then((done) => {
        //   console.log("ionViewDidLoad formulario--> Esto es el valor de tutoDone: " + done);
        //   if (!done) {
        //     //Creamos la variable tuto-done, para decir que ya hemos visto el tutorial
        //     this.storage.set('tutoDone', true);
        //     //Usamos setRoot y no push para que no aparezca el botón back en el tutorial
        //     this.navCtrl.setRoot(TutorialPage);
        //     //this.navCtrl.popToRoot();
        //   }else{
        //     //Una vez visto el tutorial, limpiamos el storage y pasamos al formulario.
        //     //Limpiamos los datos de memoria y pasamos a la pantalla del formulario
        //     this.storage.clear().then(()=>{
        //       console.log("Storage limpio desde Home");
        //       this.navCtrl.push(FormularioPage);
        //     });   
        //   }
        // });
        var _this = this;
        this.storage.clear().then(function () {
            console.log("Storage limpio desde Home");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tutorial_tutorial__["a" /* TutorialPage */]);
        });
    };
    HomePage.prototype.cambioIdioma = function (lang) {
        this.translateService.use(lang);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title class="titulo">{{ \'TituloNavBarInicio\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<ion-item>\n			<img src="/assets/imgs/repsol.jpg">\n		</ion-item>\n		<ion-card>\n			<img src="/assets/imgs/edificio_campus_Repsol.jpg"/>\n			<div class="card-title">{{ \'TituloHome\' | translate }}</div>\n			<div class="card-subtitle">{{ \'SubtituloHome\' | translate }}</div>\n		</ion-card>\n		<ion-grid>\n			<ion-row>\n				<ion-col col-3></ion-col>\n				<ion-col col-3>\n					<button ion-button color="repsol" large round block icon-right (click)="cambioIdioma(\'es\')">{{ \'BotonEs\' | translate }}<ion-icon name="flagcountry-es"></ion-icon></button>\n				</ion-col>\n				<ion-col col-3>\n					<button ion-button large round block icon-right (click)="cambioIdioma(\'en\')">{{ \'BotonEn\' | translate }}<ion-icon name="flagcountry-en"></ion-icon></button>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-2></ion-col>\n				<ion-col col-8>\n					<button ion-button large round block icon-right color="secondary" (click)="irInfoPage()">{{ \'BotonComenzar\' | translate }}<ion-icon name="ios-play"></ion-icon></button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageModule", function() { return PdfPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pdf__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Importamos el módulo de traducciones

var PdfPageModule = (function () {
    function PdfPageModule() {
    }
    PdfPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pdf__["a" /* PdfPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pdf__["a" /* PdfPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], PdfPageModule);
    return PdfPageModule;
}());

//# sourceMappingURL=pdf.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Importamos el módulo de traducciones

var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Importamos el módulo de traducciones

var TutorialPageModule = (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_pdf_pdf__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pad_firma_pad_firma__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_formulario_formulario_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pdf_pdf_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial_module__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_ftp__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_http_loader__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(315);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//Importamos Storage de Ionic

//Importamos módulo de traducción




//Importamos email composer


//Importamos la camara

// Emulamos la cámara para el desarrollo
// En los providers cambiar:
// Desarrollo: {provide: Camera,useClass: CameraMock}
// Producción: Camera
var CameraMock = (function (_super) {
    __extends(CameraMock, _super);
    function CameraMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraMock.prototype.getPicture = function (options) {
        return new Promise(function (resolve, reject) {
            resolve("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUREBIWFhUWGR0YGRcYGBgYHhoYIBgbHRgYGxgaHSgiGholHRgYITEhJSkrLi4uGiAzODMsNygtLisBCgoKDg0OGxAQGzEmICYrLS0vLS83LS8vLy0tLS0tKy0vLTArLS8vLS0tLy0tLy0tLS0vLS0tLS0tLS0tLS0tLf/AABEIALIBGwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAABBAADBQYCB//EAEEQAAIBAgQDBAULAgUEAwAAAAECEQADBBIhMQVBURMiYXEGFIGRsjI0UlNzgpKhscHRI0IzYnLh8AcVQ/EWJNL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwEEBQIG/8QAOxEAAQMCAwQHBgUEAwEBAAAAAQACAwQREiExBRNBUSJhcYGRobEUMjNSwdE0crLh8CNCgvEGFaIk0v/aAAwDAQACEQMRAD8A+ielXpC6ObFkwR8puev9o6ac6wNp7Scxxiiy5n6BbFBQte3eSdwXKtjrp1N24T4u381hGolOrj4la4hjGjR4BD1y59Y/4m/mo38nzHxKN0z5R4BH1y59Y/4m/mjfyfMfEo3TPlHgERi7n1j/AIm/mjfSfMfEo3TPlHgEfW7n1j/ib+aN9J8x8SjdM+UeAU9bufWP+Jv5o30nzHxKjdM+UeCnrdz6x/xN/NG+k+Y+JRumfKPBH1u59Y/4m/mjfSfMfEo3TPlHgj61c+sf8TfzRvpPmPiUbtnyjwU9aufWP+I/zRvpPmPiUbpnyjwR9aufWP8AiP8ANG+k+Y+JUbtnyjwU9aufWP8AiP8ANG+k+Y+JRu2ch4K2xcvOYRnJ3gMf5rpjpnnC0kntK5c2Jou4BbOB4XcvWc63riuNCHLAHxBrTp6OWeHE15DhqDe3cVRlqGRSYS0EdVrpa/aFtTnxZLxolss2vQtMCq8jBE045ru5NufE3TWuLyMMeXM2HkvC2bh7P+s8uYOrafn5e+uRFIcHTPS7cl0XM6XRGXYtK/eS6Das3QuQTLZ1Pd+US/OfGr8j2TAxRPthGpuDlrcqqxroyHyNvfla2emS9WriLGHu3ZLACVDk5ie6c/TwqWOYy1PI/M8Re9zobqHNc7+qxuQ52tYa5KYHB5rBZmbMHyZs7fTjaY2IrmCnxQEuJve17n5rc0Sy4ZbAC1r2sOV+SXxFolnRWYEO6qQ7nUEkI4J5gaEe2daRJGS5zGkjpOANzqL2aQTxGhHfxTGOAAcQNATkPEfUKcNdVUPcxEFlkK+YgakTo3h4VNK5rGhz5MyNDc8e37InaXHC1mQOot9l74jjDlIzpBAKlMysdddC5IGld1M5DCMQzsRa4Ov5iohiGK9jxve1vQJ5cTayib6iRpKKevt0JG/SrYmgDQTIPAfzx5KuY5b+55lL3bSvcJN4hFWSUOXUt3FgaSR+lIexkspOOzQM7G2ZPRHK6Y1zmMthzJ49mZ5rxax1z1rstBbD5Iyg90GPlETOm80tlTKavdf24rWsNAba2v33XToWbjHxtfXj2aJfhrk2rjFpKlQM7vAnfZhSaVxML3k5gj3ibeoTJ2gPa0DI30A+ysxDk4dnzAMGABR3Oh6941MriaZz7i4I90n7lQxoEwbbK3ED7I8Utm32JFwwwEwzbdd66rY91uyHGx1zPiop3B+MYdOoLXgdg5uwuphhocs6EQJrUs32dxly1z424WsqVzvWhmfV1rEe5ayki/dJgwJbUxoPk9axnPp8JtI69sve14cFfDZLi7B5fdVWLVxkJzXJMZO8YOsHnXEcUz2Xu65tbM552K7c6NrrWFuOSrs277glO0IGhgt/NKjjqZASzEbdZ+66e6Fps6w8F5vm6hyuXB6En+a5l38RwvJB7Sumbp4u0Apnh/GbtoiWLLzVjPuJ2NPptozwO1JHI5+HJJmpI5BpY8wuzsXQ6h12YSK9fFI2Rge3Qi6wntLXFp4L5hxczib0/WP8RrxNX+If+Y+q9XT5Qs7B6JSqycpQoRoQjQhGhClCEaEI0KFKEI0IRoUKUIV2EtszhVMHkdo6n3UyJjnvAbquJHBrSSte5grlyFbE5gcgAOaO+CU98GtJ1PJIAHTX05/3aKkJWMuRHbXlw1S64bsSt4MtwCDEHYkgHXxB/KkCL2ciVpDh9DkmmTe3jIIP2WjjMfbe23q63M4hiSSQoBmdTV6aqjkiO4BvkezPrVWOF7XjekW07UnhrmIvhgmXWQYVFJ5nUCaqxuqqlpDbcjkB9E97YYSC6/mV5bF4hBJEZdMxRSRG2sVwZ6tgz4cbD1sut1A7Tj1lesKj9i2VwGLq4lgNg0mPOK6hZIYSQ4XLgdeV/rZcyFu8FxlYjTsTOLvqju8r8tnUAyWbXIT9FQD7afNI2J7nXHvFwsbknOxPIC/elRsL2huegHYOPaSsq3i3ACgiBoJVT+ZFZraiRoDQch1D7K4Ymk3+60m4PdeGdlmBHly0FX3UE0lnPcNPLuVUVUbMmhJ4TB5hcmZSIjmZiPM8qqQU4eH3/t9b2t38E+SXCW24p4Lats1hmYAXFYECZ0+SfKauAQxPMDifeB/YqveR7RKBwI/ddkbY3gT5V6nC3Wyw8R5rjOEWHZHCyQTqMsjTb215Wgje+NwbpfPK63al7WuBd6pXFYh9bMCJ2CxJG2lVZ5ZM4eF9LJsbG5ScbLzevAtbtO0uAQqLqYGpzE6LpWzT7FqKljXTHC0C3WsyfakEDy2PpOKzsRxHLd7JLST2T3AWLNORGaP7eSmtuD/jtE1uIgnMDxWRNtupL8LbDInwWMvpdc/usWY8A6n35jV53/G6AjJtlnt/5FWA52K6nC445CrzZOXMyBxcyqRMsAMyiIO1Y1RsEtaW00hseeh7CtuDbGIgzsF+rh2hPcNx3ZLlYlrbahkI18jWJG6WgJhnaQOpap3dUBJEQV4xjNfbPoAdFBOsDzqtOXVL8eg4AnknRhsLcPikKoKwu09HD/8AWT73xtXrtlH/AORvf+orCrR/Xd3egXz7i/zi99o/xmvL1fx3/mPqvRU/wWflHolarpqNCE1gsE1zbQczXQaSlyShicfBIvU1y8hoShK5yVvWBy0pTZOaY154pampqNChShCNCFKFCNCFKEJjA4js7i3AJymYPPlToJd1IH2vZKlj3jC3muhPpOoiLQOgJ0AgjkOoHI1snbLBazL6dxWd/wBc46uskuKcXS7bhUAZtDpEANKgdRVSrrmTR2DbE69VjkOtPgpXRvuTkPqM164fhlNsm2/ykKuCQIM+PKP0rumhaYyWHUWPUf8ASiaQh9nDQ3CXTHGxcYYcgrOhYSdoJquKo00jhAcuvwTTCJmDejNCybl0HM5jmNBy7u+kTpRHvZwcTsuP080OwRnIZqlMES+QkCAST0gSR4kRSBTEvwE8LnqsLldmYBuIBXnhy90LdEsMwkESNdRv0NONI02DXi5F8wRl5pYndmS3TJU4nChcmVg2caGI5xSZYAzDhN8X+kxkmK9xay11uXu0yIU0Ve8RyGm/gZrVxVBlwMtkBn1f7VItiwYnX1OSrGS0WQ39c4Y9w/KBnrSf6cBcwy53BOXEZ8130pAHYOFteBS2KsqQ19LmaHEjKRqZI5+FImjYQZ2Pv0hwtmc/omRvcCI3NtknrPHb7DMWAWY0STPP9R76tx7TqXDE4i2mQv8AVIdRQg2Az7Vl5ntmFY94aRImdNutZt5YDZp1HXx6uat2ZIMxolcXduibeHAe4CO0JYAidrak/wBx617DY2yWQtE9R7x042XmtqbRfITFBoNeHcqbGCyi2beZHtXjcKvDESBmQsDrOuu+tbctRYkOFwRbL1WXHTXALTYg3zz7kvxXGLYcXBZYsCTnB01BBBYyx0JGvWmQHejDi7kqpO5OLD3/AMzWJi+L2bzBrthgQIzLcJMSTsRHOrjYXsFmu8lQfUxyG72+a0b923fm5h1zXyuUksUfYDNlGjmBrHupQDmdF+nkrBcyS7o/e8D4cV4GN9QZLIBcETdk91p27PpH0uZpNRRx18ZEg7OYXcNW6ge0M7+R7F12HxCG2HUhhGa2Y3HQ+INeAqYDRuMcurfd617WCYVLA9mh1RvYKLK3TmzE6iNI5H21UkprQCU3uTnytwVhkt5CzgF03o582T73xtXoNlfhG9/6ismt+O7u9Avn3F/nF77R/jNeYq/jv/MfVeip/hM/KPRK1XTVrjDW1QSJJHOh5GjRmqpkeSc8ldZt3CIRWI6KCf0qBDVHRjvA/ZLc+PUkeK9Ngbx/8Vz8J/ip9iqnaxu8CgTRfMPEJa9gbw/8L/hNMFBUDWM+BXbZ4fmHikmw7j5SMPNSP2rs00zdWHwKcJozo4eIVdITFx/pR6RXrWKTD2GVZyyWAMFjAOvIV6TZey4JqV08oJ1tY8lj1tbJHOIoyBpr1pfEek2IsYpLLXLV8MVByLG5iNCe9T49lU09M6UNcwi+p5dvBLfXTRTCMkOBtorvSf0kv28YuGsMiiFBLAaM2upOwgrStmbLglpDPMCdbW5D97rqtrpWTiKMjhrzK1OH4u+q3Ll/EWLiIhMW40PUkbCqU8NO9zI4onNJIHSv5KzHJK0OdI9pAHBYXCfSDGX7V2729m2LfJkGpiYmf5rVqtm0UEjI925xdyJyVKCsqJWOfiAt1LS9H/SxrmFvXryCbPNdA07DwM1Sr9jsjqI4oj7/AD4J9LtBz4XPePd80rwXjOOxYe6j2bVpDBLLMaSY6wNdafWUNBRlsbmuc46WPd5lKp6mqqAXghrQhb9IsVjb7W8CFt213dhOnInoTyAqTs2koYQ+r6TjwHPq7OJQKyepkLYMgOJTHC/SDEWsb6liiryQA6iNSJFKqdnU8tH7VTgt5g9Wq7hq5WVG4lz60cD6RX7vE2w6FeyUmRlEwog6+dRPsyCHZ4mcDjIHHn1diI6ySSqMY90LvsLigFyOJHjqNAcsDz/WseGdobgfmPtp5q++Mk4m6/y6vwt83Lh6lH0JEZihmJ2k02KUyyHra7xIS3sDGd48LrR4bZBZVJQP2YVSSrgEMS2gPNTv51dpYxja0kYsIA0NiDc8eIVaZxDSbG17nUcMvNIcWuJmTs4yiSADMDNI8vKqVY9mNhj0F9O3JWadrsJx65ei93+JgXg9sAjKAVI0OpJ/Ou5K3DMHxjKwBHiuWU948Lua6rC8TsOobOgncMQCD7a9FFWU8jQ7EO+wWPJTzMdaxWXx/GWrmSyjrq4LMIgDbf21nbSqIZcMDXDMi54BW6OKRl5HDhkFVb4dbVYTEgeErMmN+9G0UttHExtmTW8L+v2TDUSE3dH6/ZY+IYqXbMHK91DyLEwvsEyfI0bKpN/W9M4mszvwK52hUbmmu0WLsrLD4fw+5YvNlvK4vJqZAcSZNzJ3ojeTHyhXu5ZWuZci1vDsXjYYHskIDr4h39ts1kcRxV5b6ov9MLoik6R1Yncnck01jYpIi4580iV80cwaMuX7rpcNjUYBGe2zkahWB151kPic0lwBt1rbjmY4BpIvyCoxfBlKEWbaht9tD56ba/pTI6p2K7ybJUlIzAQxousZPRe8oDJcTODoAWkeIMVf/wCwiORBss3/AKuVubXC60rKC9LX8hu2QVyO0W85jK55AHYzpNRiwgYND425JmEPJ3lsTcrHS/NX8HxEu9h7qXHYG4BbHdRhugOxlddNNDWN/wAgohPSGRrbFul9SFp7GqzHUbtzgcXLQFddjbTG3du7o628pnx6cq83UMcYpJf7XBtlvxOGNrOIJutX0d+bJ9742rR2T+Eb3/qKp1vx3d3oF8/4t84vfaP8ZrzFX8d/5j6r0VP8Jn5R6JWq6avdplVg77DUmCdPIamrlDIGVDC45XSamN0kTmN1K3cH/wBQcBbEZ7h8rVz9wK9hvmrHbseqOo80b3/VfArsmIbytqPicUb4cl1/0041I8/sqrH/AFQwt51tpZxMsY1S3A8TFzQVD6ljGlzsguXbImAvcef2VmP4yrg5Q3tj9jVKTa1MGmxS2bOmxC4WHXkdV6FcLd4Bdv8AE2e/aPYSdTsRlgCQepn2V6xu0YqfZwZC8Y7DxvmsJ1G+WsLpG9Fe+DcJvYPGkCx2lljAuZVLKDsQ2+mxH/DzWVkFdRgmTC8D3bmx6radhU09PJTTkBl28+I/nFIcQ4RiGx9y/cwbXrZdoXMFDKBlQzryANWqetpm0LIWTBjsIz1sdTllxukTU8zql0joy4X/ANLZu4F/ULy2MF2Fy4QvZhgxZZAJJgcidKzmVDBXRmWfG1ud7WAPLirjonezOEceEnhqqfR70MtHDhsXaY3JJy52XTkIUjWm7Q25KJ8NM8Ycs7A9uoS6TZrN1eVufJUcTTEvhzhcPw42UJ3zgyPHQanqSabTOpY5/aJqnG63L9z5ALiYTOi3UcWELf4F6Pm1gGwzkB7ivmI1gsCPbAgeysmu2iJa0TsGTSLdds/NXaekwUxiOpBv3rmuCrjuH9rbGDN3ORDLJEiQDKgyNdjBrarDQ7RwPM2G3A2Bz7Tr15rOpxU0mJu7vfiP59k76O+jmIbENjcWIfVlTSS0aT9EDYCq+0Np07YBSU3u6E8Lce26dS0cplM82vAJD0dwuMw197zYJ7jPP94SCTJ1gzVraEtFVQtiE4aB1X004hIpWVEMheYySeuy+ocOsh3VXbJPt1jaTA35mvKQRMfLgc6w5+nj1rble5rMQFynbvCcp1uKE0kscpB+iVEkH8qsSUJYc3AN5nI9ls8/JJbU4h7pv1Z998l4x+BCAXLZY22JAJGUyP1BGoI/Kl1FOIgHxklpJAJyOXqDqCuoZi8lrxmEjVRPRoQpQhGoUI0IXnH2rrWkGHaLgZrggAzkWI10/v517X/jDWNie9wyJAXmNvl7nMaw5gEpBcZctBr2MtBXJVMyoqswjdsuh0EaRtXo5IhJ0YneeSwopnRXfO3PS9s1et3DYggko2XXvHLp7YqrgqIMhcXVzHTVFiSDZMWsbhk7qXbC+UfrFcOhndm4E+K7bPTtya5o8F7ucTsAS19T4KZ/fw6VyKeU/wBpUmqhAzePFecLxe1d7tpx5ahj74n2USU8kebgiKpilyY5UDhaK8hRkdSLkliSDrOp1Mjz10p8dUSLOOmiS+kaDdo111/hVwuWLbWgvq6sbigC2FzwzldSATGRoIJ5bU5zXSscDcgg66aJIdHE9trA3Gmuv2W/exg7A2p1ygR4i4dPdXgZKhvs5hvna3g4/RewbEd7j6/ULc9Hfmyfe+Nq19lfhG9/6is+t+O7u9Avn/FvnF77R/jNeYq/jv8AzH1Xoqf4TPyj0SwqumqVKFi47gUktbIE/wBp/Y1rQbSsMMg71cjqrCzkj/8AGrjHVlHvNWTtWIDIErl8zStzhfCrdgd3Vjux3/2FZNTVyTnpaclWc4lP1VXKNCFKFCNCFKEI1KhGoQrcPYZ2yoJO9MjidI7C0Zrh72sF3Lft8KtKgzo5IUExrrEnmOc1stooWsGNpvYX8M1nmpkLuiRa6yeJW0BQ2gcrLOu/ymH7VmVTYwWmPQjj2kK5C55BD9QfoCrGwiizm1z9PvdPIH8q7MDRBizxfv8Aa/kuRI4yW4JvgmBRkLsAZlRmkCeUEbmrVBTRvYXuF75Z6X6kiqmc12EduS9ejyW0vMuICyNBm2mdd+dGzWxRzubPa40vp1qKwyOiBi8locXxmEdxm1KEaqJBA3XxHKrlbUUMjwHai2YHkq9NFVMabcefqjibuHuYQuxUuV+8HjYdBPLaKmV9LLRl7iMVu/Fy8eGllDGzsqMI0v3WXKivOLXRoQjQoRqEKVKE4nAjjLYQXTbKlgdAZDASD+GvYf8AHKrdQuFr5rzm2qXfPab2yISOM9BXSy1i3dVjnD66HaDoJNembXAuxuHCywHbOtGY2u43WRifQDFKuZcr+R/mnt2jEdbhVXbKlAyIKoT0HxpEi0I/1Cuvb4ea4/6yfq8Un/8AGMX2nZ9i09eXv6Uz2uG18SV7DPiw4VtcH9Ecar5clsdS0NHhprVSeqgeNT3ZK/TUdRGdB35rrLfopekO+IEAGUCQDp1knT9qobyO1g3vJWlu5L3Lu4Bctd9FsSmJsXXbtUzoc45KGBMjyFXxVwiJwAtkclmuo5zM1xOIXC7PAYJnQ9mcrk5s8naT3QRtsK8JTUzpYzuzZxzxdVzl6L2M0oY4Y8xpbwzW/hUKoFJkjQnqeZ99bkLS1gadQs2QhziQvm3FfnF77R/jNeNq/jv/ADH1XqKf4TPyj0StV01GhClCEaFCNCFKEI0IRoUKUIRoCEalQvSKSQBudBQ0FxsFBIAuU7hs1lyLgZCVKzGoMgyOu1W4sVO8iQFtxb0SH2laC2xzTwxLJDvculdYDKQCYMb+OtW96+MB73uI6wc0jdtd0WtF0hhsaRdW5c70COW2u3LSZqlFUlsokfnbJWHwgsLW5LpLmIwoU3BdYncLmO/SK3XTUTW7wP7r/RZYZUk4C3vsrPRK8psZdsp18zzrvY72mnw8lxtFh3t+a5nit0PedgNz/wANefrHiSdzhzWtTtLYwCtThuFtdmk7vJZjyAkx7gfzrRpIId02+pvc8tcvAKpPJJjdbhoFncYsIt09ke4QGHhI/wCH21n1sUbJjuvdIBHerNM97o+nrok6qp6NChSoQjUoRoULV9HsVkux1/X/AHEitbY9QI5sB0d6qjXxY48Q4LfxLpbJYqJY5g/hpPj7K9i27gvPOs1aBH96azuOvj50lNUuDKcw2/uH70IXu5aB12PI/wDOVCERoJPmaELN4rjxAQa59DyIkSPI06NnFKkfwSuKm1YW0PlHSP8AMeQ9hrO2nUYYyG6uyHerdFFdwvoMykMM13CgsVENA1PnXn4jUbPBeW5HJarxFU5X0XQ8KxBuWlciCZ2/1EftW9RTGeESHK9/UhZlQwRyFo4W9F874t84vfaP8ZryVX8d/wCY+q9LT/CZ+UeiVqumqUIRoQjQoUoQvCXlLFQwLDcAiR5jlXZjcGhxBsdCuQ5pNgc1bXClShCNCEalQpUITeEuWgIuITrIZTB8qswvhAtI09o1SZGyXuw9xWtifSUkBbdsADYv3jWjLtdxAbG3TicyqbNni93HwyV3DsJ60qPfuMZZly7AQJEeyaZTQe2ta+ZxOZFuC4ml9mJbG0aAq21w21EiyTvoS5OjQdPzpjKOC1xHftudDZcuqJNC/wBOSaTAQVyWE3E93lzgnXSrDaYNIwRjUXy+6SZrg4nnxWa+KXD37ykEAkRA8P8AeqJnZS1ErToSLeCtCN08THJfhfBTeTPmiSQNJGm5J5Cq1Js41DMZNr3t+6ZUVYidhsvfEcE2HQQ2Zc0EMuzRuPAimVNO+kYMLri9sxx5hcwzNndmLG3Dksh3JMkyTzrLc4uNzqroAAsEK5Uo1ChGpQpQoRoQvSTIjflUtvfLVQbcV1PDcat1Dbu6HmDy8fKvYbOr96MLsnjULArKXAbj3SpYuXLLFbffQNBG+p2huRmJHn0rZIa4XOSzQS02Gaft49b39MSCRrEERAnXp3hSnRloumtkBNlL+NYWXuWyGyqTqCI7obUeRFDWdIAoc/okhLYrFOHe18rQQw5zErAEZgATPQiu2tFg5Lc43LUMNYS0gd9WExPLYSfaDHnSqioDGlzjYJkMJcQAM0rgMX2t4mBuMs7xrmI8dq89BV+1VBNtLW7M7n0WvJDuYrdt+3gnsRiRctkkDKImdgpBPvEfnVuWYSxm4y435EFJZGWPyOf1Vno982T73xtU7J/CN7/1FcVvxnd3oFwPFvnF77R/jNeYq/jv/MfVeip/gs/KPRK1XTVS+Lthxba4gdtlLAMfJZk00QyOYXhpwjU2NvFcGRgdhJF+SNrGW2drauC6RmUHVZ2n3VLoJGsEjmkA6HmoErHOLQcxqvdi+jjMjKwkiVIIkaESK4kjfGbPBB68lLXtcLtN1jcY9I8PbLWRiAl3acrOEJ65REjpNadFsuoktMY7s11AuOq/85KnUVsTLx47O8bJrgXBreGQkMXZu89xtS3j4Ck11dJVvAIsBkGjgu6amZA02NydTzSaelAeWsYe7dRWyFkykz/onNHjpVl2yCywlla1xFwDf10ShX4rmNhIBtcW9NV0KmsY6q+jUqEahCNCFv8Ao/ws3bbE21KnZidZHIdPP9a2dnUZmjJLARwPHs/dZ1XUCN4Acb8ldh+FZle32OWJiYLkxocxIAWem+ulMiosbXR7u1ufvX53yAHZryXD6nCQ/Hf08M81d6MAqpRhBS8JHmhX9aZsoOY0tdq1+feLJddZxDhxb6G6iY+4Mf2TOcuYjLygjT9RQ2qlG0N052V9O0IMEZpMYGdtUwLfe+TMH6m8+x+k7Ae2nhvSyH/l58yQEvFlr/6aPIBKcRwytjgHEqVzRtMA6flVapha+vAeLgtunQyObS3ac72WzgMSOyDoujfJtDKNRuAdJ61qU8o3Iewa6NyHhoqM0Z3mFx01dn5rzxXELkDOMysQnZ90gMTuSJ1EHauayVm7Dni4JAw5anmc9OpTTsdiIabEZ3z0/dcdxGyEvOi7KxA8pry1TG2OZ7G6AlbcLi6NrjqQqKQmKVCEalCNChECdBQATkFCewQNq4pvIyqdNQV05xI1q5T/APzyh0zSAeYISJP6rCIyCVXjLy9qzWiQsjLvOwpc8rd+Xwmw4eAXUbDuw2TXitXh/HGUd9THUDTzj+D7K2KbbDwLTNJ6wqE2z2k/0zbqWlhOJ4caoFUnTQhev0svWtVu1KaQfEHfl6qiaKVn9vgvFnF2hZ7O4VOYHPluJuxJaCGmNYHhFNdtGmDsQkb4hLbSSluEtPmqb/HLagrbEzvE6nqWYb+w+dUJ9tQt9y7j4BW49nSH3skjmZ1JuJ3SsoAdNNPafOs2SWaoBfMLgtu3krjY2RWbGeOaz7ltrbQZVh+XuqpH/QJbJk5Pd/UALdF7v4x3ADMSBSZqmSXJxyXTImMzAXVej3zZPvfG1em2T+Eb3/qKx634zu70C4Hi3zi99o/xmvMVfx3/AJj6r0NP8JnYPRK1XTl814hnHGD2Sy+fQeaRJ8pn2V7mmwHZI3pyt9dO9eYlxCvOAZ3+iYwvC7vreIw9pmCMB2tz+4gSYB6sT7qVLVw+yxTyAXHujh29wTGQSb58TDlxPH+Fe/Rvj1vD4G9bzBbqFyinmSO6R1g7+VcbS2bJU1sb7XYbXPr5Lqjq2Q07236Qvb6JbE9m2Ct2MIna3IF6+4EkEDMwLHXNOkdB40+LesrHTVDsLb4GDnwGXLj/AKS34HU7Y4hd3vOP7rpcL6aYTsll2zBQCuRiRprsIisSXYVZvXWAtc2NwtGPadPgGedtLFZPFEGGb/uGAuKbbH+pbnQyen/INaFMXVTfYaxpxDQ9n871UmAgPtNOcjqF23DsWL1pLqggOoYA+NeZqIDBK6N2oNlsxSCRgeOKZpK7UqEI1KhP4Til63bKW2IU+G3keVW4qyeKMsYbD070iSmikeHOGa9Ybi1+2cwuMZEd8ltPbUx11TEcQce+59Vy+lheLWHdkvWB4jetl7qgMGIzFhIzTIOkQZNTBVTxl0rRe+txlfh3qJYIngMOVtLclrcO4jiL2ZjcW2ggFgq6nkBm51pU1VVVF3F4a0cbDXlmqc0EEVgGknlc/RDiPbdmblvEXGA1ZT3CB1hfI1FUJ92ZI5XEDUaG3PJTDusWB7APMLGweKcXRc1cjUySZXnqayoJ5GyiTNxGvZxV6WNhZg0+66LDNburZFgyEfMymJUfuK3YnRTNjEJ911yOIWY8PjLzJxFr8Cq71y3asql7VhcNwICJOpKz0GtKkfFBCGTahxcGjtJF+QXTWvkkLo9LWv6rnL90u7Od2JJ9prBkeXvLzqTdabGhrQ0cF7w+GdzCKWPhUxQySmzBdQ+RrBdxsmP+3EfKdAemaf0mrHsZHvOaO/7Je/B0BVd/AugBIlTsy6g+0UuSlkYL2uOYzClszHZceSXquU1bBshLIgIblsrcbecrRlUmI5jnWoYxFCCLY2kOOt7HQcuIVIPL5OOE3A5XGq8XuNMUREQKFEa96fyFcSbSeWNYxoAHPP6BdNpGhxc43v3I43BkhrhbUIrRljfl4GuqinLg6QnPCDpbuURSgEMA4kJv1m12WbPczbTlTeNojbxq1v4NzixOvpoNbdiTu5N5awt3pfhOAW5bdmywDAJbKZ/QAzuarUNIyaN73Wy67fsm1E5Y9rR915x2Ai2lxcupykAzr++oOv5VzU0gETJG2zysDfP+A39FMM93uYe1esXhksABlFxjM6kARGgjfeiohjpAA4Yib8SALWyyURyPmuQbBMIjKXFqAoUEKQG1IBgFqstZIwvEWgFwLXzIvldKLmkAv1vrp6I+j+Ht3S/aatM69OvvqNlQwzlxlzdf+eaKySSMDBol/SC2i3Yt9O9HX/1FI2qyJk9o+WfamUbnuju/uW96PfNk+98bVtbJ/CN/y/UVnVvxj3egXBcW+cXvtH+M15mr+O/8x9V6Gn+EzsHolarpyot4G2tw3QgDtu0amnuqJXRiMuOEaBKETA8vAzPFXqgBJAAJ38fOklxIsSuwAEqOFWAxbsUzNuco1qya2owhuM2HWlezxXJwhXYXCJbEW0VR4CKVLPJKbyOJPWumRsYLNFlFwVsbW0E7wq/xUmolOrz4lG6YP7R4JE+jOELZvV0nrB/mrQ2rW2w7w2SDRU974AtW2gAAAAA0AHKqLnFxudVYAAFgvVcqUaFCNShdjwnEg4SEtBiBDDTU9SK9PRytNIAxl7ZEZarEqIyKi7nWVfpHdjDqrqgYxAG461xtN9qYNeACdByXVE28xLSbLMwy2TbjPCkoWSe8SofMAOckr/wVnxCAxe9kcJI43F72HXl/ArbzLj0zzseGdreGav4JdAR7TyktmDFdOUgyI/tH502gdZjonXbncEjsyzFuCXVNJcHtzytZO4/FLDAurXLgywsQJ0md9jzq3UTNsQXAudll6+HNIhjNwQCAM81mXLF1TltWwFHOFJPiSZrPfHUNOGJtgOw3687q2HxuF3nPvVOMsME7RlyODBjSZ5wNjSZ4niPeOGFwyy4ruN7S7CDcLXw2BstZdrgUad15M/JHeOupkmtSOmgdC50gA5O46DPXmqT5pWyNDSesd+iyLuHshSVuyQNBB1PtrKkipgwlr7ngLFXWvlLgC1aPo5jrdtHViAzEb7EVe2XUxRRua4gEniq1bC97wRoFtLxCypKu9uRz0Fawq6dhLXub5KgYJSAWgoNxO2c3Z3EhRJ8fCj2yI33bhYC6BTvyxtOa5/juW5czWQCMveK7Tr+1YW0QyaXFCLi2ZGl1p0mJjLSc8k1ftA4d74OrogK9MrKsz92nysa6lfODm5rcuwgfRJa4iZsXInPtBP1WfZ4YcnaOyoukE6zJ00FUo6F273r3Bo681ZdUDFgaLlNYh1cMpv2+8Qdm3AirUr45Wlu9bmRz4ZJLA5hBDDlfks3E4fJcKMdjBI6dazZot1IWOOnFWmPxsDgtW7w5ASApIH+eJjNyjfuk1qPoomkgNvbr5X+xVRs7za58uz7rxiEt2r1tgIEkldwIYgEdRpt4UqUQ087HDmSRrbMi48PJdML5Y3Dz7rrc4RhrbWRMPqe8V8dd62qGGJ8A/u1zIWfUyPbIeHUlbuM7O5fXT5II90VWfUiGWZvULeCc2LeMjPWuaBMyND4V5oE3utWylQoXYej3zZPvfG1et2T+Eb/l+orErfjHu9AuC4r84vfaP8ZrzNX8d/5j6r0NP8JnYPRK1XTUaEKUIRoUI0IUoQjUqEahCNCFKlQnMFgGuhipHd61YgpXTAlvBKlmbGQDxTCpdwzFkaCNGj9wdx404MnpCXsOmqUTHOMLglL957ryxLMdP4FVpJJJ33cbkpzWMjbYZBdDdwC4S29xDmuAKO8BCz0rbfTMoYnSMN3Za8LrMbM6peGuybn32VHBeJ3bl9UuPmUzIIGvdNIoK2aWcMe64N/RNqqeOOIuaLHL1WfhMOmXO5Yd8KAsb6nc+VUoIY8ON5PvWFlZkkdfC3lfNOXMuZgLtxckyCAdB0NW3YC9wD3DDrofBIbiwg4QbpPiUDLlZirKG70T+VVauww4SSCAc06DO9xmDZO2MBaHduZy3Z9qYIAiJgVZjpYAMMlycOI2052SHzyHNtrYsP0VljB4djaAFz+rMajSCRr7q6jp6R5jADune2fI2UPlnbi06KrGFw7IGGcZmyCSDBjc+FcCCkdGHC4ucPepMkwcQbZC6Vw+BPaZXUlVbKxHWKrRUp3uF4yBsbc058wwXacyLhLX7RU6ggHUT05VWljLDmLXzHYmtcHaLS4VibfZujqSY7kAnvQ2unPUCtCimi3TmPFzwtnnmqtRG/GHNPb2ZKp8Uy2haZGHdI1BE/1A86+6kmd7IRE5pGRGeX92K/0XYja6TGDx+llo8B4kn+HdC7ABjzg6A+81obNrYz/TlA0sD9Cq1XTu99ngtx3sKJPZ6f6a2nOpmi5t5LOAmJsLrj8Yxu3XKAnMSQPCvI1JNRM8sF7rciAijAcdF0L25PygJOkk6yt3lH+YV6BzLnUZ6X7H9XWswOtw/l2/ZZXG7TFg0GANTroS7GJ+8Kydoxux47ZW17XOP1Cu0rhht1/QfZVYXi122uRCI8qVBtCeFmBhFl1JSxyOxOCVxN9rjF23NVppnTPL36pzGBjcLdF4pS6RoULr/R/5sn3vjavW7J/CN/y/UViVnxj3egXBcV+cXvtH+M15mr+O/wDMfVehp/hM7B6Jaq6apQhGhCNChShCNAQjUqFKhCNSoRoQtLhN11FzIyiRGrKJM/5iKvUUj2NfhIzHEgepVWoa1xbiHr9EzxLECG1BLToCG3iTpoAKfVTNs7PM9+volwsOWWncqPR+0DfBOyAvHWB/vSNmsDpwT/aC7wXdY4iKw42Hitfgdn1m3e7UmGcGR4DatKgZ7ZHJvCc3BU6t/s72YOAWjg+AWrTi4paRO5HSOlXoNlwwvEjSbhVZa6SRuAgZrm8LZZ7PdExdBOoGkHmSKwoY3Ph6I0eDw5HmtSR4bJn8p+i18Aom4cyr3s7fJfNb6SCYrUpw27zcDO50N28sjkqUxNmixOVhqLFYnFyMy5YgKNAQY8NKyK8tLmhvLwV+nBsb810fDcZbuKq20VrmSGzd2AAAQTBmZrcpaiGVrWxgF2HO+WQy5FZk8UjCS42bfKystcUwsLqqldhlPdPMSB16V22togBcgEdWnkuXU1Tnqb+arutZuLnVAbVtsxYErrzOWNYrh7qeVmMAYGm9xln2WzXTRKx2EnpEaa+axHu3Rce5aVmRiTOQlSOuo/Osd0kzZXyRNJaTfQkHr0V8NjLGtebEdeaPCLue/NyDIPLTSDoOW1FDIZam788vSxRUNwRWattrym5cTvSmvICCeWh2mtgysMj487tz8e4qgGODGu5/zqWdxwKUtNyDsDBB3gnWs7aIaWRu4XcDnfWxVqlJDnDqH2VNjEYdLZV/6msgZcpH3ppTJqSOIsk6fLKxHfddvjnc/E3o+fklMRilZcqWlUdd2/Eaqyzsc3CxgaPE+KcyNwN3OJ9PBLA9KrgkaJtl6LHqffQXOOpUWCJY9T76C5x1KLBCuUKChCNChGhC6/0f+bJ9742r1uyfwjf8v1FYlb8Y93oFwfFfnF77R/jNeZq/jv8AzH1XoKf4TOweiVqunI0IRoUKUIRoQjUqFKhCNChGpQvSESJEjmJifbyoBAOag3tkt+zbW4f6SBREhThlaB/rJ73nWyxglP8ATFhyLAfM6rOc4s98368RHlwSePyFVXTNmGotC1C85A3qtUbstDf7r64cOX1T4sdyeFueLNa7cDFi2byXCHUSDoR5eIPlWkdmimjMzHkOAvf+cO5UhWGZ+7c3Ipz0Yxz3VcvGhEAADlrVnZNS+dri+2R4ZJFfC2IjCtptq1SqAXzzB4YM3fzBddR1AmNa8RBAJHdO9s8xzXppJC0dG18lRDLpqJG2okH9qRZ7MjcXHkmXa5OYrDottSNWMTBnlJq1NDGyIEe9l6ZpMb3F5B0SakjYxVMEjRPIvqhQoTfD7Qd8rE5YJIHOBNWaWNsj8LibWJNupKmcWtu3VdlZKBQgA1Ajbp3QRMzFesYWBoYLaf643vZYbg4ku/nXwsuWxSi1dFyzMQTDaxyPsrzc7RBKJIb8Tn4HuWvGTIwtkRfi97MfkoToTkWfbIJrl1fUYyTZpOpsPPIlApYsPEjtK9YkXriN2hZ8rCI1SIMmQI6e+upW1ErDvCXWIt8vG5va3LxUM3THDCALjvTWB4itpOzciUMgoA2bTaTsZ0mrVPWsgZunnNp4C9+q/PrSJYHSuxt488rJYcMe4DdEANLRlf8AZYqt7DLMDMMr3NrH6BO9oZGcHLLh91mxWcVaRqEKUKERQhGhCNChShC6/wBH/myfe+Nq9bsn8I3/AC/UViVvxj3egXB8V+cXvtH+M15mr+O/8x9V6Cn+EzsHolarpyIoUI0IUoQjUqEaEI1CFKlQjUIRFSFC67hvpE1w5BbVYWZLHkP9NelpNqumdgDQMufLuWNPQNYMRcTny/dZHFuONfUKUVR7z7CRpWZWbSfUsDS0AePmrtPRthN73K8YG5cuQjsxtLvJhRppJ6TFLp3Sy2a8ksGt9F1K1jLuaOkfFFcVew7MLfdDGQNGB6Qeddb6elcRHkCcuPZmoMcUzQX5kdyefieIj/FBO8ZRMGMukSNZ38Ktuq6u2T/IX6svHySBTwX93+cVlYTHtbBEBgdYadD1EGs2CqfELajkeatyQteb6FNcNx47bNe/ugZvojwnYVYpatu+LpuOV+X2Sp4Du8MfDhzWzjexS2zC8zGCAC+aSRG1as/s8UZcJCcshe9+5UYt894BYB3LlK8ythGhQrMPeKMGXcf8iu45HRuDmrl7Q4WK2V40mjlDnEd0Rl0EDXeK1xtOP3y04hbLhl1qj7G/3QcvNU4fEFi7uCJXKoAMQTrHWBrSYpXPc+R4I6NgLG1ic+1MewNDWt53Krxtw9uWCBhoozAwdgDMjXSl1Lne0FwbcaC97HlyzXUTRurXtxyVylVZXL/4UIVAJE66BtoMGZ8aa0sa9ry73LAgadx0sePeuCHFpaB71zf9urgkMWIOUqoy81nXoZk1QnBacBAFuXHzKsR59K5z5rdt8KLZXF2NFIWfAeNbjaAvIkD7aZfwrPNUG3bh55rIfCMzMQNMxEkwJmsh1O973FulzmrolaAAdbLzcwjAE6EDeCDFcPpntaXZZcipErSbKiq6YjQhGhQpQhSpQuv9H/myfe+Nq9Zsn8I3/L9RWJW/GPd6BcHxX5xe+0f4zXmav47/AMx9V6Cn+EzsHolqrpyNChShCNAQjUqFKhCNSoRoQjUIT/CuH9qTJgDpEzBjflOlXaOkE97nIctepVqifd2sF5weHWGa4CcpC5ZjUmNT4VzBE2xdINCBbTMqZHnIM453XQ8T9H5RezYKqKTqJJO51rbqtl4mNDHWDQVmwV1nHELklY+HNx7agWc6roDy/wDdZURlkiAEeIBXn7tjyS6xKuGFvsjWxZyiM3u+j0Jpu5qXxmMR4Rr4cutL3kLXBxdfh/tUAXWzWwmqgyuxA0iOemp9tJHtD7xhuY1HVlbw1Tf6bbPJyPFO8AwSXVNu7aPUOAR7Jq3s6njnaY5Gf5aKvVzPjIex3cveJ4FattL3wF6aTXUuy4InXfJYea5ZWyPHRZn5JDiD4fLlsKxM/LP8VRqXUgbhgBvzVmET3vIe5IVRVhShCNCExgHVbilxK8+fLeKfTPYyUF+iXMHFhDdV1vqHaAOt9wCBAWAPZXqPZTMA9shAI4aLF3+7JaWDvWfx7DdnYg3Gcs4jN4AzHvqjtKHc09i8uuRr1XVmkk3ktw21hw7klh8GrWJBYc2JGkgmPZBOoqnFTMkprtJHPlcad1jqO9WHyubLY93P/a9YbB2ypyEsVJ75ELI2Ec5qYaaFzbsNyOPDstxUPleD0sgeHFV28Q7nPkt6QJK8+Q3pbJ5ZTjwty42/ddGNjOjcpzh39TM1y6EgxlAWD4wat0h3xc6R+GxtYWt253SJ/wCnYMbfrVnFrSKjZbw1/thdecSBPKmV7I2xOLZO7LPq0uuadzy4XZ35pHifD+zS20biD4nefzI9lUK2k3MbHc/XX9u5WIJ945wWdWarKNCFKEIipQuv9H/m6fe+Nq9Zsn8I3/L9RWJWfGPd6BcHxX5xe+0f4zXmav47/wAx9V6Cn+EzsHolqrpqlCEaEI1KhSoQjQoRqUI1CFKELqPQ50K3FIEyDrz5D3GfeK9DsRzC17TrcH7fzrWRtIOu0hZxx39a52aZ876CTqeojqZqj7V/XeI23xHz7uatbn+m3EbWCaxuOxmRs6ZU2PdGg8/3qxPVV+B2Ntm8cv380mKGlxDCbntRwUvhlEfJFyIMbZddN966pyX0oFtMWmWls0S9GYnnb6q58GozFcxyh1MuTqoUh/z2proGtxYb5Bw1PCxv5rgSuNr2zsdOd8kjxJ7j4p8g7ykgRpoOZPlzNUKp0slW7d6jLLLIc1YgDGQDFofqgMZiXDKGaF+VEDzHj5VHtNbI0tBOWv8APsjdU7SDYZ6L3w117MyVLk6BmInzPl40yke3d5kF19CT6qJw7Fxt1JbiKiQwKSdwpJg+0VVqw24cCLnUD/SbCTaxB70nVROUoQjQhGhCbwePup3bbkAnbxq1BVzx9CNyRJBG/pOCY4racr2j3c8MUOkQQJ06in1schbvHvxZ200KXA5oOFrbZXWzd42lq2qZO8AO7pG3WtZ+044IwzD0rDLgqLaN0jy6+VzmlOH8ZtKxzJkXWI11J1qrTbTgY7pNwj68U6akkc3I3KpTi4W7cdUlW2G3tpDdotZM97W5FMNKXRtaTmFVguGm8C6MuYH5J/LWlU9E6paXxuGIHQ/ddy1AiIa4Zc1VjsPd7Ql7ZzHoND5RSqmGoMpMjDc8h9l1FJFg6JyWne4feupbBGUIsd4xyHTy51oyUdTURsDsg0ce7+Zqq2eKJziM7ngsNlgkbxppWG4WJCvg3CFQpUqUL0KhC67gHzdPvfG1et2T+Eb/AJfqKxKz4x7vQLg+KfOLv2j/ABmvM1fx3/mPqvQQfCZ2D0S1V01ShCNSoRoQpUIRqVCNCEahC92bRZgoiWIAnTUmK7YwvcGjibLlzg0EngtfDYe7h3JVRczHJ3CdGDK0EESDp+daUUc1I+7RivllfUEGxyyVJ74522JtbPPlYjmvFvhd20FuCA472TZoG58a4bRTwBsg94Z4eNh6ro1MchLOByvwzVvEOMi4hRFaX+UWOb2L4Uyp2iJYyxjTd2t8+4LmGkLHYnEZacPFXcNtTZCkKDLaPmG8QRCnXSnUjT7OGkC9zkbjXjoUud1pCRe2WluHeFo4jD6PBtmXcalu6Sq9FPeEbeO9XZY8nWLT0nc8rgdRzH8KrMfm3I6DlnYnr0WTfv5Lt8w4DtowWdJOnegQdPdWZJNu5ZTmA46gcO+2quMZiYwZXA0v9kBxNJBUFIO6oktoJnXQyD7659ujBu0EZ8AM8hrn/LqfZ3Wsc+0nJesLge0DOiZnJkKSAApPmJNdRUu9aXsbdxN7HQAntCiSbAQ1xsNL9azsZby3GUCIMRVCoYGSuaOBVmN2JgKppK7RoQjQhShCssfKXzH613GbPb2j1XD/AHStnGgKoZ1JUXHUqdJnXMPEA/lWvUgNaHSC4DnAjt4jsVGLpEhpzsDf6Km4ltlzEkKMoLkQzEIFyIJPSSeUiq7mQvZiJNha7rZmzQMLRc8rk8O5MBka7Dxzy4C5JufRBMaFgWlVZMaAlgOpcjU+WlDKprLCIAXy437S4692Skwl3vkn08PuveJvob1wXlkbBgSCIHhvXc0sRne2Zt+R4iy5Yx4jaYz3K/AXcNZOcXXZugUj9Rr76bSyUVMd4HuJ5WI+n1S5m1Eow4QAveK9JGP+GgHidT7uX511Ptx5H9Ntu3+fdcx7PaPfK84hgzMtx7jlVzGCqLsDoIPXwrmZwe5zZXucWi50A0vkM/oumDCAWAC5txJ+iSGHtRnzvlmIyCZ6ZpjlVLc0+HeYnYdLWzv23sn45L4bC/b9NVVj7IRyqzEAid9QDS6qJscpa3TLXrC7heXMuVQKrJiNCF13APm6fe+Nq9bsn8I3/L9RWHWfGPd6BcHxT/Hu/aP8ZrzNX8d/5j6r0MHwmdg9EtVdNRFCEalQpUIRqVCNCEahClCE9wbAi9eFtjA1J6wOQq5Q04qJhG45KvUzGKMvC6/GcKm3Fu4yuBAYt8ofRbqPHcV6WeivHZjyHWte+vUefqFixVPTu5oI5cusJPg3CQoyyFcDvsApMmYUEggCB051WoqEMGHR1syLE58Be+SfU1OI31HAZ2y4rn+JYI2b/ZoxJ0KnY67e2sSqpjTz7th5W71owTCWLE4dq0LmHvLGfGhZ5G69XHwTstjqLf5OVYSRO92K/cFXhuH3O92WKSdzluMJ1gT7SBr1riKkkz3U4vxsSu3zsyxxnvASS3Lt1hbNxzJiGZiPbJ5VSDp5nCIuJueJNk8tjjGMNHcAvXZ2RobjH/MF0HsJk11gphkXE9YGXnmUYpTnYeKewPEDhhK/1Ef5PeKwRvoQYNXYKt1GLt6bXaZkWtrlYqtLAKjI9EjvWXib2d2eIzGYrMmk3jy+1rq2xuBobyVdLXaNCFKEI0KFKFCvty7KpY6kASSYkxTW4pHNYScyB2XyXJswFwC28VwS67gAAW17qidl6+Z3NbM2y55HgCwaMh1D7nUrPjrI2tudTme1eMVwO+zkyG5AkgaDbQbVxNsqpe8m9+R7NMl1HWwhttErxexlurn0JC5v0P5Cq1fFgnbj4gX9D5JtM/FGcPC9kzcNtoDQoUjKFdD79NBoN53qw8wPsH2ABysWn6Zd90tokbmM763B+6V4o4YKdM2oMMrSNIJygCdx7Kp172vYHZYswbEHLgTYBNgBaSOHYR6pi8P617Q6oQPPKNKsStO/my1aQPAJbfhs7fqm7WGXsR3F7PJLN/d2mv71cZAzcC7Rgw3J/uxJDpHbzU4r5DhZIY60M7MwJgKIBjXKPA1Rqo243PcNA0WGWdh1FWYnHCAOv1SmIthTpsRIqjNGGEW0IunsdcZqsUldLreAfN0+98Zr1uyfwjf8v1FYlZ8Y93oFwnFP8e79o/xmvM1Xx3/mPqvQ0/wmdg9EtVdNRqVClQhGhQpUoXoVCFKEI1KhPcLwd52zWRqnOYg1bpaeeR2KHUcUieWJgtJxWrxXg2Jcgs3aRPhHkPH9q0KzZ9XIQXOxeX8uqdPV07LgDCkeDWr8k2DHI7ax4GqlDHU5mA2VipdDkJM1djOGXUdLtw5szLJ8ZHKmz0U8cjZXm9yLnvS4qiNzSxmVgUzx1bRZe0ZwYOwB0nxirG0BAXN3hINuGaVSGQNOABeuALaDt2bOTA+UANM68xNGzhAHu3biTYa5cQirMhaMYHH0Kz7TKBccT2qPmXoVzQf1qgxzGh7x77XXHZfNWXBxLWn3SLd6b/7dbbWCJAIAmNQv8mrnscTulYi4GQ04fuk794yv/M1Vf7OLgYQqd22B9I7knrSpN1Z4eLBuTbczqum47tIOZzPYsmspXEaEI0IUoUI0KEalCIoQn8FiHa4qtdaCebEVdpp5Xyta55sesqvLGxrCQ0eC3PVz9Z7M7eHjW3uT8/8A6Kz8Y+XyCzsPhg91w5zRGrEtynrWfFA2SZ4fna2ufC6tPkLWNLcvJebi2WGVPlQf7SIIE7z4GuHilkGCP3s+BGYUgytN3adqt4RhbbWznEliV8tR/P5Uygp4XxHGMzl2afdcVMjw/o8M1VYa9dLRcIVdJmPLbnpSYjU1BcA8ho46dmll28RRgXbmV5xIupagklHbNOoOb2+/2VE4qIobE3aTe/G6mPdPfpmBbuS+HxRDFnJad9d/Gq0NSWvLn3N9U18YLbNyVmHt9oWZj5a8+X6UyGP2hznPPZ28Fw927AAStUU9dZwD5un3vjNet2T+Eb/l+orErPjHu9AuE4p84u/aP8RrzNX8d/5j6lehp/hM7B6JakBNRoUI1CFKlQjQhGoQpQoRqULa4Ljblq2xtJmlhIgnSPCtSgqZYI3GNt+l9FRqoWSvAebZLTPHLpZVFpgGIksp0PMDwArQ/wCymLmtDDnqSD4Kp7HEASXaJb0c4qloulwwCSQ37VX2ZWxwl0chsLmxTa2mdIA5qu4/xhHC27XfOYMY8DIFO2jtBjw2OLpG4PhmuKOlcwl78srJLG43NBu4caaTmPuMbVTqKnFYyw+afFDbJj/JDA46Cexw+p00LHmCPzAqKeqsTuYc+q/aplhuP6j8u5VYfB3VfMQsmZUuusiCN/GlRU07H4yBne4JGd9eK7fLG5uEE9tjwTf/AHVrQVHsAEADUnWOfQ+yrPt74AGPisbeKT7MJCXNeszFYvPplCiSdOprOnqN6LWtmT4q1HHg43S9V01GhClCEaFCNSoRoUo1ChPcHS2bsXRII0kwJ5fvV7Z7YnTYZRcEZdqrVJeGXYmeMWUTIFWLnMAljHIE9dqsbQijjwBgs/tubcO9LpnudcuN2qm0L1pZUMJ37p08TIpLBUwMxNuL65eqY7dSGxUXiNwlQkA7aAd49fOgV07iBHkdMuJUGCMAl2nohiLLd4s/eGrAeYG+3MVzNE/pFzukMyPJSx7cgBlwXrA4gC21smJ1HQmNJ9w/OppZgInRE2vmOV7cfD1USxkvDwruJ8RLrlJB1BgbAR16zT66tMrMBI14cP4UuCAMdcLzgLVvs2ZlzQdRMEL9IDnS6SOHdOe8Xsc+ocwupnPxhrTb6nkhw68qs8/JI0n8j561FFNHG94OnC/kpnY5wFtUqtljqFJHWqYhkfm0ZJpe0ZErquBoRYQEQe98Rr1Wy2ObStDhnn+orHqyDMSOr0C5X0p4Y1u81wDuOZnox3B8zr7axNq0jopTIB0XZ9/Fa1BUB8YYdR6LErLV9SoQjUqEaEI1CFKlCNChGhCstq0FlDQNyJgdJI2rtofYubew1tfzXJLbgFbXDOGJiLUpcZbi6NOoPiK1aSkZVxXY8hw14hUJ6h0D+k0Fp0Xk8Aya37yIPAyT5DT965Oyt3nPIGjxJ/nepFdj+G0lDAGyl+LRLDLAL6d49NKKYwR1FozfLInmplEr4unlnw5J29i17B1dDmYHMxES06ATv18qtyTsEDmvbmQbm1s/55JDYnb0FpyGg6locLtr6taVVDZhJBOk/wB0mDzO1XKNrPZY2tANx/u/eq1Q52+c4m1v4ExZ4dYYSbKAyQe6DqDB157U9lJTPFzGPAcEp08zTbGV6u21HcW0pVRJB03nYQeldOYwdBrAQP5lkoa53vFxuVzPpFhraOptiAyyR06acq87tSCKKRpjFri9lrUUj3tOPgVk1lq4jQhShQvVChGpUqVChGhQjQhaGFVhbzIVzsSJLKCoHTMRqevhWhCHiLHHbETrcAgd5GqrSEF9naDqOfgF5SxdBkMJ+0T/APVLbHUtOIHP8zf/ANLoviIsR5H7Ky8Qjq5ABIOYKVMHUSIJHjTpC2N7ZXCxINwCDY6XyJXDLuaWjuvda/FcOgw7OqjMQsnmdRvWrXQxNpXPaMyBnx1CpU8jzMGk5C6ow/YG2HKWwFWGnU5v9PM+NIiFIYhIWtsBnfM37OJ60x++Dy25zOXK3asyxhQR2jsESYHMnwA/esqKnaW72R2Fl+89Q+6tvlIOBoufJWjiQTSyqhecwS3mab/2LIujA0Acb5k9q49nLs5Dc+nYoLdu7/hkI5/tPySfA8vKgMp6k/0jhf8AKdD2HgjFJF72Y58e9O8Lw4YBXcZgSMkKSPf76v0MLXtDJHZi/RsCQkVEhabtGXPNb2Gs5EC9PZrz2rdhjEbA0cFmyPxuLlY6giCJB3BphAIsVyCQbhc7jMDaDkC0g+6v8ViTU8QebMHgFpRTSFou4+Kp9Tt/Vp+EfxStxF8o8Amb1/zFT1O39Wn4R/FG4i+UeARvX/MVPU7f1afhH8UbiL5R4BG9f8xU9Tt/Vp+EfxRuIvlHgEb1/wAxU9Ut/Vp+EfxRuIvlHgEb1/zFT1S39Wn4R/FR7PF8o8Ajev5lT1S39Wn4R/FHs8XyjwCN6/5ir8HaVW7qgToYAEjoY3FOhjax3RFr8kuRznDMp26xVYUkDoNKsvcWtsDZIaATcrPbCodSik9SoqiYY3G5aPAKyJHjIEoeqW/q0/CP4qPZ4vlHgEb1/wAxXo4ZDuin2CujDG7Vo8Ebx40JRtWVUyihT1AAPvFDY2MOJgAPVkoc9zhZxugbKnUqNfAUbtmtgjG7mvaKACAAJ3jSfPrXQAbkMrqCSdVWcMh3RfcK4MMZ1aPALrePHEqeq2/oL+EVHs8PyDwCN6/mVPVbf0F/CKPZ4vlHgEb1/Mr16rb+gv4RU+zxfKPAKN6/mVPVbf0F/CKPZ4vlHgEbx/Mqeqp9Bfwij2eL5R4BG9fzKnqqfQX8Io9ni+UeARvX8yp6qn0F/CKPZ4vlHgEbx/MqerJ9Bfwij2eL5R4BG8fzKvtd0Qug6DSnxjALNyHUlu6RuV77Q9T76ZidzUYQqntKYlQY2kAxSHxtdYOAK7DnDQrx6sn0F/CKX7PF8o8Ap3j+ZU9WT6C/hFHs8XyjwCN4/mU1hRAIXQdBpVuABrbNyCTIbm5V80+5XFkCx60XKLBM4G0oWQoBO5AAnz60+njY1t2gAnXrSpXEusSmKsJS/9k=");
            //resolve("/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEBAWFRAVFR4XFxcXGBcSFhUaFhkWFxgWFhUYHSggGxwnGxcVIjEhJikrLy4uGB8zODMsOSgwLisBCgoKDg0OGxAQGy8lICYwKy8vMC0vNy0tLS0tLS0tLS0tLS0uLS0tLS0tLS0tKy0tLS0tLS0tLS4tLS0tLS0tLf/AABEIAIgBcwMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAQMEAgj/xABKEAABAwIDAwcIBwcCAwkAAAABAAIDBBEFEiEGBzETQVFhcYGTFyIyVFWR0dIUUlNygpKxFiNCYqGiwUWDNENzCBUkM0SjssLw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAjEQEBAAICAwACAgMAAAAAAAAAAQIRISIDEjFBUROBI0Jx/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARRdftFSQ/8AnVUTOpz2g+66iZN4uFg/8dGey5/QK6qbi1Iqn5SMK9dZ/d8E8pGFeus/u+Cap7RbEVT8pGFeus/u+CHeRhfrrPc74JqntFsRVzAttaSslMVI58paLveGOEbOgOeQBc8wGqsaiiIiAiIgIi8OJ4vT04zVE7Ih/O4Nv2AoPcipU+9XCGmxrAbc7WvePeAvbhW8HDahwbFWMzONgHXjJPQMwCuqm4tCLgLlRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQQO2W1UOHwcrNdzicscbfSkd0C/ADiTzD3LD63aPFsXm5KEyZT/yYXGKNo4XlfcEj7xtpoF6N91c9+JOjdfJDEwMHN54zucO02H4Vr27vZuOio42NaOVkaJJX87nuAPHoAsAOpdOMZtxtueVn4ih4JuS0Dq2q846lkI0HUZHi7vcFZoN0WFtGrJXHpMrv0FlflDbXY8yhpJal+uQWa3ne9xysaO1xHYLnmWfbKt+mM/DMNvcKwTDgGCmdLVuF2xcrIA0fXldfzR0Die4leXdnu6ZVsdV1rSKd5PIxNJbmF9Xk3vl5gOe1+hUfDaafEq5jHuLpqmUco/obxe4dAawGw6gF+pKSmZGxscbcrGNDWgcwAsAt5W4zTnhJnd64U7yVYX6u7xJPiu2HdhhTTf6Jm6nPe4e66ncd2jpKNodVVDIr8AT5zvusHnHuCr+Hb0sMmlbE2ZzXPcGtL43MYSTYDMRYXPSsbydNYxa8Ow6GBgjp4mRRjg1jQxvbYc/Ws43n7x5qOdtNRhhkDc0jngvy5vRaACNba69S0TF8RZTwSTym0cTC89w4DrPDvX5gpYp8RrQHH9/VTXcR/Dm1NuprRp90LWE3zWfLlZNT7W67qa6sqaZ1VWzF/KvPJNytY1rGebcBo1u7NqeYBXdebDqJkMUcMQyxxsDGjoDQAP0Vfx3eDh1K4slqmmUcWRgyub1ODb2PUVj7eHT5OVpRV7ZfbOjry5tLKTIwZnMe0xvy3tmAPEX0uOrpXh3hbZxUNNJycsZrSMscWYF4LtM7mA3ytFyT1W501d6NzW0BvO3lfRS6loiDUgfvJNHNguOAB0MltbcBpfoUfsHu3M4FbjBfNJJ5zIpHFxseDpSdTfmZwA9wz3YiOmkrWSYjUMZAx3KvMrrcs8G7Wnpu7zj1C3Ot58oOFe0YPzhby68Rywvv2qdpsPhjbkjhjYzhlaxrW+4Cyx7fjs7SxCCaCFrJppCxzWNAEmlwcg4uvYXHG60N28PCvaEJPQHZiewAKSkwGnkqW1cjTJMxlos5JbEDqTGzg1x53cdFmXV26ZYzKadOw9LPFQU8dUSZ2xAOubkdDSecgWHcpxRuKY9SUwvU1UUXRne1pPYCbnuXVgW09HWZhSVLJSy2YNvcA8DYgG3WoqXRR2M45TUrc9VURxNOgzuALj0NHFx7F5cC2toatxZS1TJJGi5bq11ukNcASOsKLtNrON8u1VRRxRR0rjG+Ym8oAJa1tvNYToHG416L26VorngC5IAHEnQBV+vxbC6l7KWWamqJHO82Ilk5zAE3yC9rAHUqz6zlzNRFbosSqqigElW9zzyjhG93pPYLanp87MAecBXdfEcYaAGgBoFgBoAOgBReObT0dJb6VVRxOPBpdd56wwecfcl5qziJdFTqPefhUjg0VYaSbAva9jb/AHiLDvVwBHMprRLK5RRuL4/S0ovVVMUN+Ae9rSexpNz3KEG8vCb/APHs7bPt78tldU3FtReTC8UgqGCSmmZLGf4mODxfoJHA9S9aiiIiAiIgIiICIiAiIgIiICIiAiIgo28bd4zEcsscohqmNyhxbma9t7hrwNdCSQRwurjh8bmxMbJbO1gDst8twLG1+ZehFdpqfQrFN/OO5pYaNp0jHKyfeddrAe7Me8LZqmdsbHPebNY0uJ6ABcr8oY7iT6qpmqDcvmkLgOexNo2dzQ1vct+Obu3Lz5ax1+2nbhMFu6escPR/cxnrsHSEdxYFbN5u3Yw+MRw2dWSC7QdWxt4co8foOcjoBUjs7Sx4XhbOV0bBCZZSOJcQZH26SXEgdwX59nnmxKtzSOtNUygEk6RNPMCeZjP0PSrJ7W1LfTGSfWg7stjTXPOI4kXTBxIja/XlCDq938gNwGjTj1KAxfDmV2OuhoWNEIlYCWABobCGctJYacQWjpIHSrjie0ElSwYXs+wmONoikqfRija0ZS1knTbi4a66XvcW3YvZKnwqndZwMmXNNMRluGgmw+qxovYd5udVPb8tem+FP38bQZWRUMZ1k/ey9TGmzG97rn8HWvJuH2eu6WueNADDD32Mj/6Bv5lne0mKyV9bJMxpLppAyJvPYkMib1c3ZcrWtva4YThMNHTutPI3kg4aEAC80vaSbDreOhas1jMf25y7yuV+RAbyt4ss8rqLD3ERB3JukYbPmeTlyRkcG30vxJ6ANbDhWxlFheHSz1sbJZ+TLpC8BwBcNIYh22F+JJv0AZ3uxjpoqh1bWPaymo25hf8AilddrA1vFxAzGw58quktDWY/Kx8rX0mEMN2tdpLN/NbptpfgOa51EymuGsN5dr/SL3D4BI+SaqfmETYjA1wJBe99i8tP8oaNel3Uq1vNpaSGudBRx5REAJXlzpHSSO85xc55JJAI16SV+gZ3QUFI4taI6enjJDRoLNHDtJ/VfmfC6V9dWsY7WSqnJf8AjcXyG46G5vcrhd25M+SaxmMatu43e0klBHPWwB8s15ASXNyxn0BofqgO/EqFtfW0Uk30bCaJmTMGCUXfJM8mwEVzZrL8/Px0HHRt8+PimpGUMJs6dpa62mWFoDXDT62jezMq1uKwAS1ElW9vmU9mR/8AUeLuI+6wj86kvHtVyk3MIvWwW7uCija+djZawi7nOGZsf8kYPAD63E2WZ0uOV+IYk2kkrZhDJUPaRE4RFsbM5OUtH1W891uO1GJtpqSed3CONx7TazQOskgLJdxGCl88tZILiNvJtPS99nPI7Bb8xUl4trWU5mMdO9PY2gw+njdCJDVyy2zvkdI5zWi7y4HS3o8OchRe73Fhh8NRWlhfPMW0tLEL3lffM933QTGL9OnFfG+DGvpOIua03jp28k3ozXzSOHflH4FcNzeyZc1lfVC+VuWlYRoxpJzTW+s4k26rnn018w5YnPkulb242VmjpPp+J1Tn4jNI1rIhlyMDjdzOnRgJs0gAgcdSejctQOkxNr23ywxuc4/eGQA9pJ9y43w7SfSq10THfuKW8Y6HSf8AMd3HzfwnpWhbrcJbh2Gvq6nzXStM8l+LI2t8xmvPlBNul9kt1gSTLycfhBb+Noj+7oY3aEcrPbnHCOM9R85xHU1Nw+zYHKVz29MMPULgyOHaQG9x6VmdXUT4hWF1v/EVMtmt4huY2a3sa21+wr9D4jUxYRhd2i7aeIMYOeR5s1t+tzzc9pUy4x9VwvtlcvxFd3qbwjSXpaQj6W4Xe/iIGuGlhzyEcBzDU8165uw2CFZevxHNIx5vG15JMx55ZCdS3ma3gePCyomAYdLiNfHG9xc+eXPM/ny+lK6/3QQOstC/UdPA1jWsYA1jQGtA4AAWATLrNRcL73d+Ma262Y/7xxBtPh0DWRws5OomDMsTXE+jcaOe1v8ACOnmXdt5vGNM0UGGv86JojkqPSLS0BuSPpdpq7mOmp4Wre1tWaKkyQutU1F2MPOxtvPk7hYDrcOhZrud2WFXVcvK29PTEOsdQ+U6sBvxA9I9eXrSfN0yustY/atGwe7ASAVmLZpZpPObE8l1geBmJ1c4/V4Dr5s+3hV0MtbI2khYyCI8kwRtA5QtNnO0GpLrgdnWtz3k7Q/QqGR7XWmeOTi6c7xbMPui7u5YvukwMVOIRgtvFTt5Z3R5pAjH5iD+Eq43/ap5JOMI3HYLABRUUMJA5XLnlI55H+c7uBNh1AKwoi4vRJoREQEREBERAREQEREBERAREQEREBERBn2+vHOQoORabSVTuTHUwDNIfdZv4wsm3Z4N9KxGBhbeOMmaToyx6tHe8sHvUjvjxv6RiBjabx0zeSH3j50n9co/CrxuJwTJTSVTh507srPuRkjTtdm9y7Trg817+X/iR321hZhpa025WVjD2A5iP6LKd2Wz0VdWiKoBMLY3PcGuLC6xaACRrbXWy27eNs26uonxRkCZpD476Aub/CTzXFxdYjs/TYth9SJIKCblgCwtdDJJG4G1wXM0PAahymF62L5J3lvx+jKCghp4xHBGyKJo0a0BrR7v1WOb2dveXa6koyTTh2WeYehI4a8ix3OOk8/DUKajwnHMUGXEJW0NGfSjhGWV46Ddzrd57lD74tnI6Sko2UseSmje5pAufOeBZzzzk2IuelTGT25b8lvrdIbctg3L1/KuF2UzM/VnddrP/ue5du/KsL8QbGfRigbbteST+gV03DUAZQyTfxTTu1/ljAY0e/Oe9R++LYionlbWUkZlOQMkjb6fm3LXtHPxII48Fr2nvy5+l/i1HVua2PpJqcVlREJZRK5rA/zmMyWGYM4F176m9uZazVVMcTHSSvayNgu5ziGtaBzknQBYNsXi+OUbDT0uHPewuLgJoJWhjjxs+7BY9BKt9NsXiOIua/HKnLADcUsJyNdbWzyOA7ydNCFnKc8108d66kU3ehtu+uyMgD2YfmJYSCz6S5lgXkHXI2+g6Tc6gWkdw+C56mWrcPNhbybPvyauPaGafjKqW8PFI5ayQQhraanHIRNbo0NjuHEDrdm7bBbpuxwQ0mHQse20sg5WQHiHSedlPYLDuWsrrDTnjPbyW/pi+9quMuK1FzpFkib1BrQ4/wBz3Fa/uhohFhcFhrJmkJ6S9xt/Sw7ln29fYaq+mSVVNA+aGaznCMF72PDQ1wLBqQcoIIvxK7tkK/aD6M2jpqPk2N81s88b4nRtPMM5ANuY5T/lLzjNLjueS7Se93F31c0OE0fnyueHSgcARqxrzzAemeizVbHRxYLhLsmvIxk3PGWZ54n70jh2DsX3sLsPFQBz3PM1ZLrLM7iSTctZfUC+uup51XN9EFbUCGmpaWWWIHlZHMbdtxcMbe+vOfcscXUdLuS5flk+yeBvxCsZCXE8o4vmfzht80ju03sOty/RG12KNoMPllYA0RRhkTRoA42ZG0d5CrG5rZKSkhknqYyypmdlDXaOZGzgD1udc9mVd2/Cne7DCWAlsc0b32+oLi/YC5p7lcr7ZaZwxuOG/wAsc2GwU1tfDC67mlxkmP8AIzznk/eNm9r1q2/LGORo46VmhqHagafu47EjsuWBRP8A2f6AXqpz6QyxDqHpn3+b7gvRvx2cqZnwVEET5Y42OY9rAXubdwcHBg1INiDbhYLVu89VjGWePc+1Bbi8FEtXJUObdtOwBv8A1Jb69oa0/mCmt/mLNy09K14zZzK9gOoABazMObUuI7FW9ghjkTZIKClLGSuDnSTxOYGGwbma99uYDSzuxTO1W6qcU3LRyOqsQLy+ckm8oI4Rgn+E248R0aBLr33Vkv8AHqR0bg6MOqaiUjVkTWt6s7jm/wDiFtGI18UEbpZ5GxxMF3OcbAAf/uC/OeyFXi1DM76JRTF7xleySnlc02OhNstiLnW60Kg2NxDEXslx2XLAw5m0sdmtJ/nAJAHeT1hTOc7a8V1jrTMdvNpziFW6cAthaMkTTxDBfziOYuOpHYtv3X4c2lwqEvIaXs5eRx0tynni55rMyjuWQ7wdjaqCsmLKaR9NLIXxuijdI0B+vJkMBykaix5gFZMEwDGsSijp62R9NhzGhpBYIpZGtAABZxJsOLrDqKuWrjNM4bmd3FY3mbVGvqg6Mn6JGCyHmD7H95KOkk2HUGjpK0jcVg4jo31BHn1Enfkju1o95efxLP8AfBhraasiijZlp2UjBEOawfLn153Zjc9oW37D0nJYfSs6IGH8zQ4/qples0uE/wAltTiIi5O4iIgIiICIiAiIgIiICIiAiIgIiICr23G07KClfK4jlSMsTDxe88NOgcT1BWFReLbO0lS5r6qlimcwWaZGNfYHWwvzJEr83bI7M1GJT5IyS0uvNOdQ25u4k8C83OnSV+m8MoGQRRwxNyxRsDGjoDRYd67KWlZG0MiY1jBwaxoY0dgGgXctZZezOGExERFlsXmxGginjdFPGHxPFnNcLghelEETszs/DQw8hT5uSzueA52YtzG5AJ1tf9VLIiAqnvJ2pbQ0b3BwFRICyEc+Yi2fsaNfcrYozENnqSeQS1FJDLK0ZWukjbIQASQAXA6XJPerEvzhhG6rYp9ZOyaRhFFCQ4uPCZzdWsb9YX1J4aW51+iQuI2BoAaAANAALAdgX0rll7VnDCYzUERFlsREQF1zQte0te0Oa4WIOoIPEELsRBB7N7K01CZTStcxsrg5zMxc1pGnmg8NOZTiIgIiICIiAiIgh9ptmaaujEdVHmA1aQS17CdCWuGoXvw6kEMUcTSS2NgYC43NmgAXPYF6UQEREBERAREQEREBERAREQEREBcErleetoYpW5Zo2vb0OFx7ig7HTNHFwHeF1OxCEcZox2vaP8qIk2Jw13pYfTn/AG2/BdZ2Bwr2dT+G1XhOUs7GKYcamEf7jPiut20FGONZAP8Adj+ZRTt3uFH/AE6D8gC63bt8JP8Ap8PusnBylTtNQjjXU3jRfMvk7V4f7QpfHi+ZRDt2eE+oR/1+K+Duvwn1Jvvd8U4Tslztfh3tGl8eL5l8HbTDfaNL40fzKKO63CfVB+d/xXyd1mE+q/8AuSfMr1OyVO2+GD/Uabxo/ivn9u8L9pU3is+KivJThPqp8WX5lx5KMJ9Wd4svzJ1Tslf28wv2jTeK34rj9vsL9o0/iNUX5J8J9Xf40vzLg7psJ9Xf40vzJ1XslDt/hXtGn8QLjygYV7Rp/ECijulwr7CTxpfmQ7pMK+xk8aT4p1TslfKDhXtGn/OFx5QsK9owfnUV5I8K+yk8aT4rjyR4V9lL40nxTqbyS3lCwr2jB+dPKFhXtGD86ifJHhf2UvjSfFPJFhf2UvjSfFOp2S3lCwr2jB+dcjeDhXtGD84UR5IsL+yl8aT4rnyR4V9lJ40nxTqdkt5QMK9o0/5wufKBhXtGn8QKI8keFfZSeNJ8Vz5JMK+xk8aT5k6nZL/t9hftGn8Rq5/b3C/aNN4rfiogbpcJ+wf40vzLnyTYT6u/xpfmTqvZLft3hftKm8VnxX0NucM9pU3jM+KiPJPhPqzvFl+Zc+SjCfVneLL8ydU3l+kyNtcN9o0vjR/MvobY4d7RpfHi+ZQo3VYT6qfEk+ZfQ3W4T6p/e/5k6r2TQ2tw88MQpfHi+ZfY2ooDwr6bx4vmUIN1+E+pt/M8/wCV9N3Y4SP/AELP7j/lOp2Tg2jozwrafxo/mXY3G6U8KqE/7rPioJu7XCfUIvcT/ldjd3eFD/ToPy3U4XlPNxOA8J4z2Paf8ruZUsPB7T2EFV8bv8K9nU/hhfbdhMLHDDqfw2/BODlYA8dIX0oyg2epISHQ00UbhwLWBp/opNRRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==");
        });
    };
    return CameraMock;
}(__WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */]));
//Creamos una función que desde src/assets/i18n obtengan los archivos de las traducciones de la aplicación
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_23__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pad_firma_pad_firma__["a" /* PadFirmaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                //Añadimos el HttpClientModule para poder usar el HttpClient
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_formulario_formulario_module__["FormularioPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_pdf_pdf_module__["PdfPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_tutorial_module__["TutorialPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    //Cambiamos el valor del texto del botón back de la navegación 
                    backButtonText: 'Atrás'
                }, {
                    links: [
                        { loadChildren: '../pages/formulario/formulario.module#FormularioPageModule', name: 'FormularioPage', segment: 'form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'start', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pdf/pdf.module#PdfPageModule', name: 'PdfPage', segment: 'pdf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'repsol', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                //Importamos el modulo de traducción
                __WEBPACK_IMPORTED_MODULE_22__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_22__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_24__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_formulario_formulario__["a" /* FormularioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_pdf_pdf__["a" /* PdfPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pad_firma_pad_firma__["a" /* PadFirmaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tutorial_tutorial__["a" /* TutorialPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_ftp__["a" /* FTP */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_email_composer__["a" /* EmailComposer */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_social_sharing__["a" /* SocialSharing */],
                { provide: __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */], useClass: CameraMock },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = 'HomePage';
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle=" {{ \'TituloTab\' | translate }}" tabIcon="home"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocSpanishValidator; });
var DocSpanishValidator = (function () {
    function DocSpanishValidator() {
    }
    //metodo que comprueba si es un documento válido (nie / nif / pasaporte)	
    DocSpanishValidator.notValidNifNiePassport = function (fc) {
        var validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
        var nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
        var nieRexp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
        var passportRexp = /^[a-z]{3}[0-9]{6}[a-z]?$/i;
        var str = fc.value.toString().toUpperCase();
        if (str) {
            if (!nifRexp.test(str) && !nieRexp.test(str) && !passportRexp.test(str)) {
                return ({ notValidNifNiePassport: true });
            }
            else {
                var nie = str.replace(/^[X]/, '0').replace(/^[Y]/, '1').replace(/^[Z]/, '2');
                var letter = str.substr(-1);
                var charIndex = parseInt(nie.substr(0, 8)) % 23;
                if (validChars.charAt(charIndex) === letter) {
                    return (null);
                }
                else {
                    return ({ notValidNifNiePassport: true });
                }
            }
        }
        else {
            //Si no hemos introducido nada en el campo que no salte el error, ya está el required
            return (null);
        }
    };
    //metodo que comprueba si es un email válido
    DocSpanishValidator.notValidEmail = function (fc) {
        //var emailRexp = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/i;
        var emailRexp = /^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{4,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/i;
        var str = fc.value.toString().toUpperCase();
        if (str) {
            if (!emailRexp.test(str)) {
                return ({ notValidEmail: true });
            }
            else {
                return (null);
            }
        }
        else {
            //Si no hemos introducido nada en el campo que no salte el error, ya está el required
            return (null);
        }
    };
    return DocSpanishValidator;
}());

//# sourceMappingURL=docspanish.validator.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Usamos el provider TranslateService

//Importamos el STORAGE para utilizarlo en todas las páginas

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translateService, storage) {
        var _this = this;
        this.translateService = translateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //Idioma por defecto del aplicativo
            _this.translateService.setDefaultLang('en');
            _this.translateService.use('en');
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\IonicWorkspace\AplicacionesIonic\RepsolRGPD\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.js.map