(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\t<ion-toolbar color=\"dark\">\n\t\t<ion-title>\n\t\t\tCalculadora Martingale\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size-md=\"6\">\n\n\t\t\t\t<ion-card>\n\t\t\t\t\t<ion-card-header color=\"dark\">\n\t\t\t\t\t\t<ion-card-title>Calcular sobre perda</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size-md=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Rendimento %</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"rendimento1\" type=\"number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size-md=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Perda</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"perda1\" type=\"number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size-md=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Adicional</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"adicional1\" type=\"number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-label position=\"fixed\">Investimento:</ion-label>\n\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"resultado1\" readonly></ion-input>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-button expand=\"block\" color=\"dark\" size=\"large\" (click)=\"calcularSobrePerda()\">Calcular</ion-button>\n\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\t\t\t\t\t\n\t\t\t<ion-col size-md=\"6\">\n\n\t\t\t\t<ion-card>\n\t\t\t\t\t<ion-card-header color=\"dark\">\n\t\t\t\t\t\t<ion-card-title>Calcular martingales possíveis</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<ion-card-content>\n\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row>\n\t\t\t\t\t\t\t\t<ion-col size-md=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Banca</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"banca\" type=\"number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ion-col>\t\t\t\t\t\n\t\t\t\t\t\t\t\t<ion-col size-md=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Rendimento %</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"rendimento2\" type=\"number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size-md=\"4\">\n\t\t\t\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t\t\t\t<ion-label position=\"floating\">Lucro</ion-label>\n\t\t\t\t\t\t\t\t\t\t<ion-input [(ngModel)]=\"lucro\" type=\"number\"></ion-input>\n\t\t\t\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\n\t\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t\t<ion-label position=\"floating\">Investimentos</ion-label>\n\t\t\t\t\t\t\t<ion-textarea rows=\"6\" [(ngModel)]=\"resultado2\" value=\"Mão 1 - 12  Mão 2 - 45  Mão 3 - 56  Mão 4 - 12  Mão 5 - 45  Mão 6 - 56 Mão 7 - 12  Mão 8 - 45  Mão 9 - 56  Mão 10 - 12\" readonly></ion-textarea>\n\t\t\t\t\t\t</ion-item>\n\n\t\t\t\t\t\t<ion-button expand=\"block\" color=\"dark\" size=\"large\" (click)=\"calcularMartingales()\">Calcular</ion-button>\n\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.rendimento1 = 0;
        this.perda1 = 0;
        this.adicional1 = 0;
        this.banca = 0;
        this.rendimento2 = 0;
        this.lucro = 0;
    }
    calcularSobrePerda() {
        let resultado = (this.perda1 + this.adicional1) / (this.rendimento1 / 100);
        this.resultado1 = resultado;
    }
    calcularMartingales() {
        let valor_inicial = (this.lucro) / (this.rendimento2 / 100);
        let cont = 1;
        let total_martingale = valor_inicial;
        let niveis = "Investimento " + cont + ": " + valor_inicial;
        while (this.banca >= total_martingale) {
            cont += 1;
            let nivel_atual = ((total_martingale + this.lucro) / (this.rendimento2 / 100));
            total_martingale += nivel_atual;
            if (total_martingale <= this.banca)
                niveis += "\nInvestimento " + cont + ": " + nivel_atual;
        }
        this.resultado2 = niveis;
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map