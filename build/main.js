webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.materias = [
            { nombre: 'Fisica', descripcion: 'Analiza cosas chidas con fisica' },
            { nombre: 'Quimica', descripcion: 'Analiza cosas chidas con quimica' },
            { nombre: 'Biologia', descripcion: 'Analiza cosas chidas con biologia' },
        ];
        this.name = this.navParams.get('name');
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-title>Materias disponibles:</ion-title>\n  <div *ngFor="let materia of materias">\n    <components-materia-card name="{{ materia.nombre }}" description="{{ materia.descripcion }}"></components-materia-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MateriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MateriaPage = /** @class */ (function () {
    function MateriaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.temas = [
            { name: 'Suma', description: 'Estudia lo basico de las sumasy las restas que tenemos aqui' },
            { name: 'Multiplicación', description: 'Estudia lo de primaria wey de multiplicacion' },
            { name: 'Resta', description: 'Estudia lo de primaria wey de resta' },
            { name: 'Division', description: 'Estudia lo de primaria wey de division' },
        ];
        this.name = this.navParams.get('name');
    }
    MateriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MateriaPage');
    };
    MateriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/materia/materia.html"*/'<!--\n  Generated template for the MateriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{ name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>Temas disponibles:</ion-title>\n  <span><p>Da click sobre uno para empezar el test</p></span>\n  <div *ngFor="let tema of temas">\n      <components-topic-card\n        name="{{ tema.name }}"\n        description="{{ tema.description }}"\n      ></components-topic-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/materia/materia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MateriaPage);
    return MateriaPage;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreguntaViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the PreguntaViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreguntaViewPage = /** @class */ (function () {
    function PreguntaViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.respuestas = [
            { user: 'userna1234', content: 'Se resuelve de la siguiente manera men' },
            { user: 'alebri0910', content: 'Puedes intentar de esta forma' },
            { user: 'cien1230', content: 'Debes de calcular de la siguiente manera' }
        ];
        this.name = this.navParams.get('pregunta').name;
        this.description = this.navParams.get('pregunta').description;
        this.category = this.navParams.get('pregunta').category;
        this.user = this.navParams.get('pregunta').user;
    }
    PreguntaViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreguntaViewPage');
    };
    PreguntaViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pregunta-view',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/pregunta-view/pregunta-view.html"*/'<!--\n  Generated template for the PreguntaViewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>PreguntaView</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-item>\n        <span item-start>\n          <img src="http://lorempixel.com/100/100" alt="">\n          <ion-title>{{ user.name }}</ion-title>\n          <br><h1>{{ name }}</h1>\n        </span>\n        <span item-end><b>Categoria: </b>{{ category }}</span>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{ description }}</p>\n    </ion-card-content>\n    <ion-title>\n      Respuestas:      \n    </ion-title>\n    <div class="respuestas">\n      <div *ngFor="let respuesta of respuestas">\n        <ion-card-content>\n          <ion-title>\n            <img src="http://lorempixel.com/100/100" alt="">\n            {{ respuesta.user }}            \n          </ion-title>\n          <p>{{ respuesta.content }}</p>\n        </ion-card-content>\n        <hr>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/pregunta-view/pregunta-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PreguntaViewPage);
    return PreguntaViewPage;
}());

//# sourceMappingURL=pregunta-view.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestResumePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the TestResumePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestResumePage = /** @class */ (function () {
    function TestResumePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.respuestas = this.navParams.get('respuestas');
        this.preguntas = this.navParams.get('preguntas');
        console.log("Las preguntas son: ", this.preguntas);
    }
    TestResumePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestResumePage');
    };
    TestResumePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test-resume',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/test-resume/test-resume.html"*/'<!--\n  Generated template for the TestResumePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Resumen del test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-title>Aqui vamos</ion-title>\n  <ion-card>\n    <ion-card-content>\n      <!-- <ion-list> -->\n        <div *ngFor="let pregunta of preguntas">\n          \n          <ion-item>\n            <span item-start>\n              {{ pregunta.titulo }}\n            </span>\n            <span item-end>\n              <div *ngIf="pregunta.respuestas[0].correcta">\n                <ion-icon name="contact"></ion-icon>\n              </div>\n              <div *ngIf="!pregunta.respuestas[0].correcta">\n                <ion-icon name="close"></ion-icon>\n              </div>\n            </span>\n          </ion-item>\n\n          <ion-item>\n            <span item-start>\n              {{ pregunta.titulo }}\n            </span>\n            <span item-end>\n              <div *ngIf="pregunta.respuestas[1].correcta">\n                <ion-icon name="contact"></ion-icon>\n              </div>\n              <div *ngIf="!pregunta.respuestas[1].correcta">\n                <ion-icon name="close"></ion-icon>\n              </div>\n            </span>\n          </ion-item>\n\n          <ion-item>\n            <span item-start>\n              {{ pregunta.titulo }}\n            </span>\n            <span item-end>\n              <div *ngIf="pregunta.respuestas[2].correcta">\n                <ion-icon name="contact"></ion-icon>\n              </div>\n              <div *ngIf="!pregunta.respuestas[2].correcta">\n                <ion-icon name="close"></ion-icon>\n              </div>\n            </span>\n          </ion-item>\n\n        </div>\n      <!-- </ion-list> -->\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/test-resume/test-resume.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TestResumePage);
    return TestResumePage;
}());

//# sourceMappingURL=test-resume.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_resume_test_resume__ = __webpack_require__(103);
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
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TestPage = /** @class */ (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.index = 0;
        this.respuestas = [];
        this.preguntas = [
            {
                titulo: 'Cuanto es 2 + 2?',
                respuestas: [
                    { contenido: '4', correcta: true },
                    { contenido: '0', correcta: false },
                    { contenido: '5', correcta: false }
                ]
            },
            {
                titulo: 'Cuanto es 2 + 3?',
                respuestas: [
                    { contenido: '4', correcta: false },
                    { contenido: '0', correcta: false },
                    { contenido: '5', correcta: true }
                ]
            },
            {
                titulo: 'Cuanto es 3 + 3?',
                respuestas: [
                    { contenido: '6', correcta: true },
                    { contenido: '0', correcta: false },
                    { contenido: '5', correcta: false }
                ]
            }
        ];
        this.id = this.navParams.get('id');
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TestPage');
    };
    TestPage.prototype.onClick = function () {
        // if(this.preguntas[this.index].respuestas[0].contenido == this.respuesta){
        //   this.correcta = true;
        // }
        // if(this.preguntas[this.index].respuestas[1].contenido == this.respuesta){
        //   this.correcta = true;
        // }
        // if(this.preguntas[this.index].respuestas[2].contenido == this.respuesta){
        //   this.correcta = true;
        // }
        if (this.preguntas[this.index].respuestas[this.index].contenido == this.respuesta) {
            this.correcta = true;
        }
        else {
            this.correcta = false;
        }
        this.respuestas.push({
            index: this.index,
            correcta: this.correcta
        });
        this.preguntas[this.index].respuestas = this.respuestas;
        if (this.index == this.preguntas.length - 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__test_resume_test_resume__["a" /* TestResumePage */], {
                // respuestas: this.respuestas,
                preguntas: this.preguntas
            });
        }
        else {
            this.index += 1;
        }
        console.log("Respuesta: " + this.respuesta + ", correcta: " + this.correcta);
    };
    TestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-test',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/test/test.html"*/'<!--\n  Generated template for the TestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>test</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-title>{{ preguntas[index].titulo }}</ion-title>\n      <ion-buttons end>\n        <ion-title>\n          {{ index + 1 + \'/\' + preguntas.length}}\n        </ion-title>\n      </ion-buttons>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-list radio-group [(ngModel)]="respuesta">\n          <ion-list-header>\n            Respuestas:\n          </ion-list-header>\n        \n          <ion-item>\n            <ion-label>{{ preguntas[index].respuestas[0].contenido }}</ion-label>\n            <ion-radio value="{{ preguntas[index].respuestas[0].contenido }}"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>{{ preguntas[index].respuestas[1].contenido }}</ion-label>\n            <ion-radio value="{{ preguntas[index].respuestas[1].contenido }}"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>{{ preguntas[index].respuestas[2].contenido }}</ion-label>\n            <ion-radio value="{{ preguntas[index].respuestas[2].contenido }}"></ion-radio>\n          </ion-item>\n        </ion-list>\n        <button ion-button (click)="onClick()">Siguiente</button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/test/test.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TestPage);
    return TestPage;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/category/category.module": [
		283,
		5
	],
	"../pages/materia/materia.module": [
		284,
		4
	],
	"../pages/pregunta-view/pregunta-view.module": [
		285,
		3
	],
	"../pages/tema/tema.module": [
		286,
		0
	],
	"../pages/test-resume/test-resume.module": [
		287,
		2
	],
	"../pages/test/test.module": [
		288,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tests_tests__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { NavParams } from 'ionic-angular';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__tests_tests__["a" /* TestsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Preguntas" tabIcon="ios-paper"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pregunta_view_pregunta_view__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestsPage = /** @class */ (function () {
    function TestsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tests = [
            {
                name: '¿Cuál es la diferencia entre una bacteria y un virus?',
                description: 'Hola que tal me pueden ayudar a blah blah blah',
                category: 'Ciencias Naturales',
                user: {
                    name: 'osares10'
                }
            },
            {
                name: '¿Como se deriva una función?',
                description: 'Me pueden ayudar a derivar una función?',
                category: 'Matematicas',
                user: {
                    name: 'luisguerra495'
                }
            },
            {
                name: '¿Pueden factorizarme esta ecuación?',
                description: 'Necesito auda para factorizar una ecuación',
                category: 'Matematicas',
                user: {
                    name: 'elverg123'
                }
            },
            {
                name: '¿Cómo resolver un problmea de MRU que tenga diferencia de tiempos?',
                description: 'Me dejaron de tarea esto y no le entiendo',
                category: 'Ciencias Naturales',
                user: {
                    name: 'cristo1223'
                }
            }
        ];
    }
    TestsPage.prototype.onClick = function (pregunta) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pregunta_view_pregunta_view__["a" /* PreguntaViewPage */], {
            pregunta: pregunta
        });
    };
    TestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tests',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/tests/tests.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Tests\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngFor="let test of tests">\n\n    <ion-card (click)="onClick(test)">\n      <ion-card-header>\n        <ion-title>\n          {{ test.name }}\n        </ion-title>\n      </ion-card-header>\n      <ion-card-content>\n        {{ test.description }}\n      </ion-card-content>\n    </ion-card>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/tests/tests.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TestsPage);
    return TestsPage;
}());

//# sourceMappingURL=tests.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tests = [
            { title: 'Examen de fisica', description: 'Prueba de habilidades generales en la materia', good: 3, wrong: 12 },
            { title: 'Examen de biologia', description: 'Conceptos básicos de la materia', good: 4, wrong: 5 },
            { title: 'Algebra', description: 'Problemas considerados un reto de algebra', good: 15, wrong: 5 }
        ];
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-header class="profile">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n            <img src="http://lorempixel.com/250/250" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h3>Luis Fernando Contreras Guerra</h3>\n            <p><b>Email: </b>luisguerra495@gmail.com</p>\n            <p><b>Telefono: </b>4281146297</p>\n            <p><b>Puntos: </b>150xp.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </ion-header>\n  <ion-content padding class="contenido">\n    <ion-title>Historial:</ion-title>\n    <div *ngFor="let test of tests">\n\n      <components-test-resume\n        good="{{ test.good }}"\n        wrong="{{ test.wrong }}"\n        title="{{ test.title }}"\n        description="{{ test.description }}">\n      </components-test-resume>\n      \n    </div>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/profile/profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_add_question_components_add_question__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.categories = [
            { name: 'Ciencias naturales', description: 'Fisica, Quimica y Biologia estudia acerca de estas materias' },
            { name: 'Ciencias sociales', description: 'Aprende sobre ciencias sociales, español, lectura etc.' },
            { name: 'Artes', description: 'Música, Pintura, Baile, Teatro practica tus conocimientos teoricos' },
            { name: 'Finanzas', description: 'Como calcular de cuanto les toca en la peda, contar borregas etc' }
        ];
        // this.navCtrl.push()
    }
    HomePage.prototype.addQuestionSubmit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__components_components_add_question_components_add_question__["a" /* ComponentsAddQuestionComponent */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Fripped</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addQuestionSubmit()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="alerta">\n  <!-- <ion-navbar color="danger" class="alerta">\n    <ion-item color="danger">\n      <ion-label ion-start>Tienes un examen el 5 de abril, estudia!</ion-label>\n    </ion-item>\n  </ion-navbar> -->\n  <ion-item color="danger">\n    <ion-label ion-start>Tienes un examen el 5 de abril, estudia!</ion-label>\n  </ion-item>\n</ion-content>\n\n<ion-content padding id="contenido">\n  <ion-title>Selecciona una categoria:</ion-title>\n  <div *ngFor="let category of categories">\n\n    <components-category-card\n      name="{{ category.name }}"\n      description="{{ category.description }}">\n    </components-category-card>\n    \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_add_question_components_add_question__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_components_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tests_tests__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_category_category__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_materia_materia__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_test_test__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_test_resume_test_resume__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_pregunta_view_pregunta_view__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tests_tests__["a" /* TestsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_materia_materia__["a" /* MateriaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_test_resume_test_resume__["a" /* TestResumePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pregunta_view_pregunta_view__["a" /* PreguntaViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/materia/materia.module#MateriaPageModule', name: 'MateriaPage', segment: 'materia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pregunta-view/pregunta-view.module#PreguntaViewPageModule', name: 'PreguntaViewPage', segment: 'pregunta-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tema/tema.module#TemaPageModule', name: 'TemaPage', segment: 'tema', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test-resume/test-resume.module#TestResumePageModule', name: 'TestResumePage', segment: 'test-resume', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tests_tests__["a" /* TestsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_add_question_components_add_question__["a" /* ComponentsAddQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_materia_materia__["a" /* MateriaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_test_test__["a" /* TestPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_test_resume_test_resume__["a" /* TestResumePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_pregunta_view_pregunta_view__["a" /* PreguntaViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.rootPage
        statusBar.overlaysWebView(false);
        statusBar.backgroundColorByHexString('#209dc2');
        statusBar.styleLightContent();
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_category_card_components_category_card__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_test_resume_components_test_resume__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_add_question_components_add_question__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_topic_card_components_topic_card__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_materia_card_components_materia_card__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__components_category_card_components_category_card__["a" /* ComponentsCategoryCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_test_resume_components_test_resume__["a" /* ComponentsTestResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_add_question_components_add_question__["a" /* ComponentsAddQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_topic_card_components_topic_card__["a" /* ComponentsTopicCardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_materia_card_components_materia_card__["a" /* ComponentsMateriaCardComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(this)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__components_category_card_components_category_card__["a" /* ComponentsCategoryCardComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_test_resume_components_test_resume__["a" /* ComponentsTestResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_add_question_components_add_question__["a" /* ComponentsAddQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_topic_card_components_topic_card__["a" /* ComponentsTopicCardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_materia_card_components_materia_card__["a" /* ComponentsMateriaCardComponent */]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsCategoryCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_category_category__ = __webpack_require__(100);
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
 * Generated class for the ComponentsTopicCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsCategoryCardComponent = /** @class */ (function () {
    function ComponentsCategoryCardComponent(appCtrl) {
        this.appCtrl = appCtrl;
    }
    ComponentsCategoryCardComponent.prototype.onClick = function (nm) {
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__pages_category_category__["a" /* CategoryPage */], {
            name: nm
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", Object)
    ], ComponentsCategoryCardComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", Object)
    ], ComponentsCategoryCardComponent.prototype, "description", void 0);
    ComponentsCategoryCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-category-card',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/components/components-category-card/components-category-card.html"*/'<ion-card (click)="onClick(name)">\n  <ion-card-header>\n    {{ name }}\n  </ion-card-header>\n  <ion-card-content>\n    <p>{{ description }}</p>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/components/components-category-card/components-category-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ComponentsCategoryCardComponent);
    return ComponentsCategoryCardComponent;
}());

//# sourceMappingURL=components-category-card.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsTestResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the ComponentsTestResumeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsTestResumeComponent = /** @class */ (function () {
    function ComponentsTestResumeComponent() {
        // console.log('Hello ComponentsTestResumeComponent Component');
        // this.text = 'Hello World';
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", Object)
    ], ComponentsTestResumeComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", Object)
    ], ComponentsTestResumeComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('good'),
        __metadata("design:type", Object)
    ], ComponentsTestResumeComponent.prototype, "good", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('wrong'),
        __metadata("design:type", Object)
    ], ComponentsTestResumeComponent.prototype, "wrong", void 0);
    ComponentsTestResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-test-resume',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/components/components-test-resume/components-test-resume.html"*/'<ion-card>\n  <ion-card-header>\n    <ion-title>\n        {{ title }}\n    </ion-title>\n  </ion-card-header>\n  <ion-card-content>\n    <p>{{ description }}</p>\n    <ion-list>\n      <ion-item>\n          <span ion-start>Resultados:</span>\n          <ion-badge color="secondary" item-end>{{ good }}</ion-badge>\n          <ion-badge color="danger" item-end>{{ wrong }}</ion-badge>\n      </ion-item>\n    </ion-list>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/components/components-test-resume/components-test-resume.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsTestResumeComponent);
    return ComponentsTestResumeComponent;
}());

//# sourceMappingURL=components-test-resume.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsTopicCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_test_test__ = __webpack_require__(104);
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
 * Generated class for the ComponentsTopicCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsTopicCardComponent = /** @class */ (function () {
    function ComponentsTopicCardComponent(app) {
        this.app = app;
    }
    ComponentsTopicCardComponent.prototype.onClick = function (id) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__pages_test_test__["a" /* TestPage */], {
            id: id
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", Object)
    ], ComponentsTopicCardComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", Object)
    ], ComponentsTopicCardComponent.prototype, "description", void 0);
    ComponentsTopicCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-topic-card',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/components/components-topic-card/components-topic-card.html"*/'<ion-card (click)="onClick(name)">\n  <ion-card-header>\n    <ion-title>{{ name }}</ion-title>\n  </ion-card-header>\n  <ion-card-content>\n    <p>\n      {{ description }}\n    </p>\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/components/components-topic-card/components-topic-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ComponentsTopicCardComponent);
    return ComponentsTopicCardComponent;
}());

//# sourceMappingURL=components-topic-card.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsMateriaCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_materia_materia__ = __webpack_require__(101);
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
 * Generated class for the ComponentsMateriaCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsMateriaCardComponent = /** @class */ (function () {
    function ComponentsMateriaCardComponent(app) {
        this.app = app;
    }
    ComponentsMateriaCardComponent.prototype.onClick = function (name) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__pages_materia_materia__["a" /* MateriaPage */], {
            name: name
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('name'),
        __metadata("design:type", Object)
    ], ComponentsMateriaCardComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('description'),
        __metadata("design:type", Object)
    ], ComponentsMateriaCardComponent.prototype, "description", void 0);
    ComponentsMateriaCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-materia-card',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/components/components-materia-card/components-materia-card.html"*/'<ion-card (click)="onClick(name)">\n  <ion-card-header>\n    {{ name }}\n  </ion-card-header>\n  <ion-card-content>\n    {{ description }}\n  </ion-card-content>\n</ion-card>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/components/components-materia-card/components-materia-card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ComponentsMateriaCardComponent);
    return ComponentsMateriaCardComponent;
}());

//# sourceMappingURL=components-materia-card.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsAddQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the ComponentsAddQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ComponentsAddQuestionComponent = /** @class */ (function () {
    function ComponentsAddQuestionComponent(
        // public viewCtrl: ViewController,
        appCtrl) {
        this.appCtrl = appCtrl;
    }
    ComponentsAddQuestionComponent.prototype.onSubmit = function () {
        this.appCtrl.getRootNav().goToRoot();
    };
    ComponentsAddQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'components-add-question',template:/*ion-inline-start:"/home/luisguerra495/Documentos/fripped/src/components/components-add-question/components-add-question.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Agregar una pregunta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <ion-title>\n        Agregar una pregunta\n      </ion-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Titulo</ion-label>\n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Categoria</ion-label>\n          <ion-select>\n            <ion-option value="cienciasNaturales">Ciencias Naturales</ion-option>\n            <ion-option value="cienciasSociales">Ciencias Sociales</ion-option>\n            <ion-option value="artes">Artes</ion-option>\n            <ion-option value="finanzas">Finanzas</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Topic</ion-label>\n          <ion-select>\n            <ion-option value="fisica">Fisica</ion-option>\n            <ion-option value="quimica">Quimica</ion-option>\n            <ion-option value="biologia">Biologia</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Sub-topic</ion-label>\n          <ion-select>\n            <ion-option value="mrua">Movimiento rectilineo uniforme</ion-option>\n            <ion-option value="caidaLibre">Caida libre</ion-option>\n            <ion-option value="tiroParabolico">Tiro parabólico</ion-option>\n            <ion-option value="tiroVertical">Tiro vertical</ion-option>\n          </ion-select>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-input type="file"></ion-input>\n        </ion-item> -->\n        <ion-item>\n          <ion-label floating>Respuesta 1:</ion-label>\n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Respuesta 2:</ion-label>          \n          <ion-input type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Respuesta 3:</ion-label>          \n          <ion-input type="text" value=""></ion-input>                              \n        </ion-item>\n      </ion-list>\n      <ion-item>\n        <button ion-button (click)="onSubmit()">Subir pregunta!</button>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/Documentos/fripped/src/components/components-add-question/components-add-question.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ComponentsAddQuestionComponent);
    return ComponentsAddQuestionComponent;
}());

//# sourceMappingURL=components-add-question.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map