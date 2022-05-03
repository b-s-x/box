"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
    }
    LinkedList.prototype.isEmpty = function () {
        return this.head === null;
    };
    LinkedList.prototype.push = function (value) {
        this.head = new Node_1.Node(value, this.head);
        if (this.tail === null) {
            this.tail = this.head;
        }
    };
    LinkedList.prototype.append = function (value) {
        if (this.isEmpty()) {
            return this.push(value);
        }
        this.tail.next = new Node_1.Node(value);
        this.tail = this.tail.next;
    };
    LinkedList.prototype.nodeAt = function (index) {
        var currentNode = this.head;
        var currentIndex = 0;
        while (currentNode !== null && currentIndex < index) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
            currentIndex++;
        }
        return currentNode;
    };
    LinkedList.prototype.insertAfter = function (node, value) {
        if (node === this.tail) {
            this.append(value);
            return this.tail;
        }
        node.next = new Node_1.Node(value, node.next);
        return node.next;
    };
    LinkedList.prototype.pop = function () {
        var _a, _b;
        var value = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
        this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
        return value;
    };
    LinkedList.prototype.removeLast = function () {
        var _a, _b;
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) === null)
            return this.pop();
        var currentNode = this.head;
        while ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.next) !== this.tail) {
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
        }
        var value = (_b = this.tail) === null || _b === void 0 ? void 0 : _b.value;
        this.tail = currentNode;
        this.tail.next = null;
        return value;
    };
    LinkedList.prototype.removeAfter = function (node) {
        var _a, _b;
        var value = (_a = node === null || node === void 0 ? void 0 : node.next) === null || _a === void 0 ? void 0 : _a.value;
        node.next = (_b = node.next) === null || _b === void 0 ? void 0 : _b.next;
        return value;
    };
    LinkedList.prototype.size = function () {
        if (this.isEmpty())
            return 0;
        var count = 0;
        var currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.next;
        }
        return count;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
