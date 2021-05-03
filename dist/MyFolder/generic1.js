var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var linkedNode = /** @class */ (function () {
    function linkedNode(num) {
        this.value = num;
    }
    return linkedNode;
}());
var linkedNodeList = /** @class */ (function () {
    function linkedNodeList() {
    }
    linkedNodeList.prototype.length = function () {
        if (this.head === null)
            return 0;
        var count = 0, node = this.head;
        while (node !== null) {
            node = node.next;
            count += 1;
        }
        return count;
    };
    linkedNodeList.prototype.at = function (index) {
        if (index > this.length())
            return null;
        var count = index, node = this.head;
        while (count > 0) {
            node = node.next;
            count -= 1;
        }
        return node;
    };
    linkedNodeList.prototype.insert = function (index, value) {
        if (index > this.length())
            return;
        var node = new linkedNode(value);
        if (index === 0) {
            var originalHeadNode = this.head;
            this.head = node;
            this.head.next = originalHeadNode;
        }
        else if (index === this.length()) {
            var lastLinkedNode = this.at(index);
            var cloneLinkedListNode = __assign({}, lastLinkedNode);
            lastLinkedNode = node;
            lastLinkedNode.next = cloneLinkedListNode;
        }
        else if (index < this.length()) {
            var prevLinkedNode = this.at(index - 1);
            var cloneLinkedListNode = __assign({}, prevLinkedNode);
            prevLinkedNode = node;
            prevLinkedNode.next = cloneLinkedListNode;
        }
    };
    return linkedNodeList;
}());
var numberLinedList = new linkedNodeList();
numberLinedList.insert(0, [1, 2, 3]);
//numberLinedList.insert(1, [4, 5, 3])
console.log(numberLinedList);
//# sourceMappingURL=generic1.js.map