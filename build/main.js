webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/home/luisguerra495/safewey/src/pages/splash/splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n\n  <img src="../../assets/imgs/Inicio.png" alt="">\n\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/safewey/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/map/map.module": [
		152
	],
	"../pages/splash/splash.module": [
		273,
		0
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.city = {
            latitude: 0,
            longitude: 0
        };
        this.lugares = [];
        this.coordenadas = [
            {
                id: 0,
                latitude: 21.009145,
                longitude: -101.273570
            },
            {
                id: 1,
                latitude: 21.012183,
                longitude: -101.274924
            },
            {
                id: 2,
                latitude: 21.013195,
                longitude: -101.273747
            },
            {
                id: 3,
                latitude: 21.015799,
                longitude: -101.274648
            },
            {
                id: 4,
                latitude: 21.009045,
                longitude: -101.274281
            },
            {
                id: 5,
                latitude: 21.004702,
                longitude: -101.2847657
            },
            {
                id: 6,
                latitude: 21.001918,
                longitude: -101.283425
            },
            {
                id: 7,
                latitude: 21.008618,
                longitude: -101.282223
            },
            {
                id: 8,
                latitude: 21.001918,
                longitude: -101.283425
            },
            {
                id: 9,
                latitude: 21.009350,
                longitude: -101.281934
            },
            {
                id: 10,
                latitude: 21.011213,
                longitude: -101.280432
            }
        ];
        this.category = this.navParams.get("categoria");
        this.switchCategory(this.category);
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.switchCategory = function (name) {
        switch (name) {
            case 'entretenimiento':
                this.city = {
                    latitude: 21.009145,
                    longitude: -101.273570
                };
                this.lugares.push({
                    id: 0,
                    title: 'LA VENTINA Café - Bar - Resto',
                    likes: 5,
                    dislikes: 3
                });
                this.lugares.push({
                    id: 1,
                    title: 'Centro de Convenciones de Guanajuato',
                    likes: 10,
                    dislikes: 1
                });
                this.lugares.push({
                    id: 2,
                    title: 'Auditorio del estado de Guanajuato',
                    likes: 7,
                    dislikes: 2
                });
                this.lugares.push({
                    id: 3,
                    title: 'Internet y Abarrotes',
                    likes: 6,
                    dislikes: 3
                });
                break;
            case 'cultura':
                this.city = {
                    latitude: 21.009045,
                    longitude: -101.274281
                };
                this.lugares.push({
                    id: 4,
                    title: 'Museo Ex Hacienda San Gabriel de Barrera',
                    likes: 10,
                    dislikes: 3
                });
                this.lugares.push({
                    id: 5,
                    title: 'Kiosko de Marfil',
                    likes: 13,
                    dislikes: 1
                });
                this.lugares.push({
                    id: 6,
                    title: 'Casa Museo Gene Byron',
                    likes: 13,
                    dislikes: 1
                });
                break;
            case 'comida':
                this.city = {
                    latitude: 21.008618,
                    longitude: -101.282223
                };
                this.lugares.push({
                    id: 7,
                    title: 'Restaurante de los santos',
                    likes: 10,
                    dislikes: 3
                });
                this.lugares.push({
                    id: 8,
                    title: 'La Diabla',
                    likes: 13,
                    dislikes: 3
                });
                this.lugares.push({
                    id: 9,
                    title: 'Sabor y Arte',
                    likes: 16,
                    dislikes: 3
                });
                this.lugares.push({
                    id: 10,
                    title: 'Portofino Ristorante',
                    likes: 11,
                    dislikes: 2
                });
                break;
        }
    };
    MapPage.prototype.clickPlace = function (id) {
        this.city = this.coordenadas[id];
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var latitude = 21.003765;
        var longitude = -101.270291;
        console.log(latitude, longitude);
        // create a new map by passing HTMLElement
        var mapEle = document.getElementById('map_canvas');
        // create LatLng object
        var myLatLng = { lat: latitude, lng: longitude };
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 17
        });
        google.maps.event.addListenerOnce(this.map, 'idle', function () {
            new google.maps.Marker({
                position: myLatLng,
                map: _this.map,
                title: 'Hello World!'
            });
            mapEle.classList.add('show-map');
            new google.maps.Circle({
                strokeColor: '#00ff00',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#00ff00',
                fillOpacity: 0.35,
                map: _this.map,
                center: { lat: _this.city.latitude, lng: _this.city.longitude },
                radius: 50
            });
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(_this.map);
            var myLocation = new google.maps.LatLng(latitude, longitude);
            var place = new google.maps.LatLng(_this.city.latitude, _this.city.longitude);
            var request = {
                origin: myLocation,
                destination: place,
                travelMode: google.maps.TravelMode.WALKING
            };
            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/luisguerra495/safewey/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Mapa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div id="map_canvas">\n    <h1>Mapa de información</h1>\n  </div>\n\n  <div id="lugares">\n    <ion-card *ngFor="let lugar of lugares" (click)="clickPlace(lugar.id)">\n      <ion-card-content>\n        <!--<ion-item>-->\n          <div>\n            <ion-card-title>\n              {{ lugar.title }}\n            </ion-card-title>\n          </div>\n          <!--<div item-end>-->\n            <!--<button ion-button color="red">-->\n              <!--<ion-icon name="heart"></ion-icon>-->\n            <!--</button>-->\n            <!--<button ion-button color="green">-->\n              <!--<ion-icon name="close"></ion-icon>-->\n            <!--</button>-->\n          <!--</div>-->\n        <!--</ion-item>-->\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/luisguerra495/safewey/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(153);
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
    function HomePage(navCtrl, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.saludos = ["hola", "holi", "que pedo", "que pex", "que onda"];
        this.messages = [];
        this.messagesTest = ["muestrame la lista", "recomiendame lugares de entretenimiento",
            "recomiendame lugares de comida", "recomiendame lugares de cultura"];
        this.actionSheet = this.actionSheetCtrl.create({
            title: 'Seleccione una opción',
            buttons: [
                {
                    text: 'Entretenimiento',
                    icon: 'beer',
                    handler: function () {
                        _this.optionHandler('entretenimiento');
                    }
                },
                {
                    text: 'Cultura',
                    icon: 'brush',
                    handler: function () {
                        _this.optionHandler('cultura');
                    }
                },
                {
                    text: 'Comida',
                    icon: 'pizza',
                    handler: function () {
                        _this.optionHandler('comida');
                    }
                }
            ]
        });
    }
    HomePage.prototype.onClickMessage = function (message) {
        var _this = this;
        this.messages.push({
            text: message,
            who: 'mine'
        });
        switch (message) {
            case this.messagesTest[0]:
                this.actionSheet = this.actionSheetCtrl.create({
                    title: 'Seleccione una opción',
                    buttons: [
                        {
                            text: 'Entretenimiento',
                            icon: 'beer',
                            handler: function () {
                                _this.optionHandler('entretenimiento');
                            }
                        },
                        {
                            text: 'Cultura',
                            icon: 'brush',
                            handler: function () {
                                _this.optionHandler('cultura');
                            }
                        },
                        {
                            text: 'Comida',
                            icon: 'pizza',
                            handler: function () {
                                _this.optionHandler('comida');
                            }
                        }
                    ]
                });
                this.messages.push({
                    text: 'Ahi te van :3',
                    who: 'other'
                });
                this.actionSheet.present();
                break;
            default:
                message = this.matchMessage(message);
                window.setTimeout(function () {
                    _this.messages.push({
                        text: ("Excelente, enseguida te muestro los mejores lugares de " + message),
                        who: 'other'
                    });
                }, 1000);
                window.setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], {
                        "categoria": message
                    });
                }, 3500);
        }
    };
    HomePage.prototype.matchMessage = function (message) {
        var msg = message.split(" ");
        console.log(msg[3]);
        return msg[3];
    };
    HomePage.prototype.checkMatch = function (where, text) {
        if (where == 'saludos') {
            for (var i = 0; i < this.saludos.length; i++) {
                if (text == this.saludos[i]) {
                    return true;
                }
            }
            return false;
        }
    };
    HomePage.prototype.onSubmit = function () {
        this.optionHandler(this.message);
        this.message = "";
    };
    HomePage.prototype.optionHandler = function (text) {
        var _this = this;
        var message = {
            text: text,
            who: 'mine'
        };
        this.messages.push(message);
        if (message.who == 'mine') {
            if (text == 'entretenimiento' || text == 'cultura' || text == 'comida') {
                window.setTimeout(function () {
                    _this.messages.push({
                        text: ("Excelente, enseguida te muestro los mejores lugares de " + text),
                        who: 'other'
                    });
                }, 1000);
                window.setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], {
                        "categoria": text
                    });
                }, 3500);
            }
            else {
                if (this.checkMatch('saludos', text)) {
                    this.messages.push({
                        text: ("Hola, selecciona una opción para ayudarte"),
                        who: 'other'
                    });
                    this.actionSheet = this.actionSheetCtrl.create({
                        title: 'Seleccione una opción',
                        buttons: [
                            {
                                text: 'Entretenimiento',
                                icon: 'beer',
                                handler: function () {
                                    _this.optionHandler('entretenimiento');
                                }
                            },
                            {
                                text: 'Cultura',
                                icon: 'brush',
                                handler: function () {
                                    _this.optionHandler('cultura');
                                }
                            },
                            {
                                text: 'Comida',
                                icon: 'pizza',
                                handler: function () {
                                    _this.optionHandler('comida');
                                }
                            }
                        ]
                    });
                    this.actionSheet.present();
                }
                else {
                    this.messages.push({
                        text: 'Sorry, no he podido detectar que buscas :c',
                        who: 'other'
                    });
                }
            }
        }
    };
    HomePage.prototype.orderMessages = function () {
        this.messages.reverse();
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.messages.push({
                text: 'Bienvenido a SafeWey',
                who: 'other'
            });
            _this.orderMessages();
        }, 500);
        window.setTimeout(function () {
            _this.messages.push({
                text: 'Por favor selecciona una opción para ayudarte',
                who: 'other'
            });
        }, 1500);
        window.setTimeout(function () {
            _this.actionSheet.present();
        }, 2.5 * 1000);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/luisguerra495/safewey/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons class="logo-container">\n      <img src="../../assets/imgs/logo.png" id="logo" alt="">\n    </ion-buttons>\n    <ion-title>\n      SafeWey\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="messages">\n  <div *ngFor="let message of messages">\n    <div class="message-wrapper">\n      <div *ngIf="message.who == \'other\'" class="message message-other message-content">\n        {{ message.text }}\n      </div>\n      <div *ngIf="message.who == \'mine\'" class="message message-mine message-content">\n        {{ message.text }}\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="list">\n    <div class="list-item" *ngFor="let message of messagesTest" (click)="onClickMessage(message)">\n      {{ message }}\n    </div>\n  </div>\n  <ion-toolbar color="whatsapp" class="messages-page-footer" position="bottom">\n    <ion-input [(ngModel)]="message" class="message-editor" placeholder="Escribe un mensaje"></ion-input>\n    <ion-buttons end>\n      <button ion-button icon-only *ngIf="message" class="message-editor-button" (click)="onSubmit()">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/luisguerra495/safewey/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* SplashPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_map_map_module__["MapPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_splash_splash__["a" /* SplashPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(100);
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
        var _this = this;
        this.activo = false;
        platform.ready().then(function () {
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
            _this.splashPage = __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["a" /* SplashPage */];
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            // splashScreen.hide();
            window.setTimeout(function () {
                _this.activo = true;
            }, 3000);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/luisguerra495/safewey/src/app/app.html"*/'<ion-nav [root]="rootPage" *ngIf="activo"></ion-nav>\n<ion-nav [root]="splashPage" *ngIf="!activo"></ion-nav>\n'/*ion-inline-end:"/home/luisguerra495/safewey/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map