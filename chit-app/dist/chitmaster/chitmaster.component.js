"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chitmaster_1 = require("./chitmaster");
var ChitMasterComponent = (function () {
    function ChitMasterComponent() {
        this.yourname = 'Ramesh';
        this.issubmitted = 'false';
        this.cm = new chitmaster_1.ChitMaster('', 0, 0, 0, '', '');
        this.cms = [
            { chitname: 'cn1', chitvalue: 10, chitmonths: 1, chitsubscription: 10, chitfundname: '', chitnote: '' },
            { chitname: 'cn2', chitvalue: 20, chitmonths: 2, chitsubscription: 10, chitfundname: '', chitnote: '' },
            { chitname: 'cn3', chitvalue: 30, chitmonths: 3, chitsubscription: 10, chitfundname: '', chitnote: '' }
        ];
    }
    ChitMasterComponent.prototype.onSubmit = function () {
        this.issubmitted = 'true';
        console.log(this.cm);
    };
    ChitMasterComponent = __decorate([
        core_1.Component({
            selector: 'chit-master',
            templateUrl: "../dist/views/chitmaster.html"
        })
    ], ChitMasterComponent);
    return ChitMasterComponent;
}());
exports.ChitMasterComponent = ChitMasterComponent;
//# sourceMappingURL=chitmaster.component.js.map