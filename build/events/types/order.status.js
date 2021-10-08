"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Created"] = "created";
    OrderStatus["Cancelled"] = "cancelled";
    OrderStatus["AwatingPayment"] = "awaiting:payment";
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
