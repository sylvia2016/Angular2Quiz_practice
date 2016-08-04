"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var CommonService = (function () {
    function CommonService(http) {
        this.http = http;
        this.apiUrl = 'http://172.16.3.12/Angular2QuizAPI/api/FoodPrices';
        console.log(this.selectedId);
    }
    CommonService.prototype.getFood = function () {
        return this.http.get(this.apiUrl)
            .map(function (value) {
            return value.json();
        });
    };
    CommonService.prototype.getFoodById = function (id) {
        if (id === void 0) { id = '1'; }
        return this.http.get(this.apiUrl + '/' + id)
            .map(function (value) {
            return value.json();
        });
    };
    //postFood(postData: any) {
    //    return this.http.post(this.apiUrl, postData);
    //}
    CommonService.prototype.updateFood = function (id, updateData) {
        return this.http.put(this.apiUrl + '/' + id, updateData);
    };
    CommonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map