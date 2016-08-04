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
var common_service_1 = require('../common.service');
var ListComponent = (function () {
    function ListComponent(common) {
        this.common = common;
        this.beHidden = true;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getFoodById();
    };
    ListComponent.prototype.ngOnChanges = function () {
        this.getFoodById();
    };
    ListComponent.prototype.getFoodById = function () {
        var _this = this;
        if (this.selectedId == 'all') {
            this.common.getFood()
                .subscribe(function (value) {
                _this.aryFoodById = value;
            });
        }
        else {
            this.common.getFoodById(this.selectedId)
                .subscribe(function (value) {
                _this.aryFoodById = [value];
                //this.aryFoodById.push(value);  --> ?
            });
        }
    };
    //wantModify(id: string) {
    //    this.showUpdate = !this.showUpdate;
    //    this.selectedId = id;
    //}
    ListComponent.prototype.wantModify = function (id) {
        this.modifyID = id;
        this.beHidden = !this.beHidden;
    };
    //checkedit(id: string) {
    //    if (this.selectedId == id)
    //        return true;
    //    else
    //        return false;
    //}
    ListComponent.prototype.updateFood = function (updateId, updateName, updatePrice) {
        var _this = this;
        var obj = { Id: updateId, Name: updateName, Price: updatePrice };
        this.common.updateFood(updateId, obj)
            .subscribe(function (data) { }, function (err) { alert(err._body); }, function () {
            alert('修改成功！');
            _this.getFoodById();
        });
    };
    ListComponent.prototype.deleteFood = function (updateId, updateName) {
        console.log(updateId + ' / ' + updateName);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListComponent.prototype, "selectedId", void 0);
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css']
        }), 
        __metadata('design:paramtypes', [common_service_1.CommonService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map