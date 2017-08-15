"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChitMaster = (function () {
    function ChitMaster() {
        this.chitname = '';
        this.chitvalue = 0;
        this.chitmonths = 0;
        this.chitsubscription = 0;
        this.chitnote = '';
        this.chitfundname = 'SCF';
    }
    ChitMaster.prototype.getSubscription = function () {
        if (this.chitvalue > 0 && this.chitvalue > 0) {
            return this.chitvalue / this.chitmonths;
        }
        else {
            return 0;
        }
    };
    return ChitMaster;
}());
exports.ChitMaster = ChitMaster;
//# sourceMappingURL=chitmaster.js.map