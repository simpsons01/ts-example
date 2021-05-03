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
var System = /** @class */ (function () {
    function System() {
        this.users = [];
    }
    System.prototype.register = function (payload) {
        if (!this.users.some(function (x) { return x.password === payload.password && x.account === payload.account; })) {
            this.users.push(payload);
        }
    };
    System.prototype.signIn = function (account, password) {
        var _this = this;
        this.users = this.users.map(function (user) {
            if (user.password === password && user.account === account) {
                return __assign(__assign({}, user), { signIn: true });
                _this.currentUser = user;
            }
            else {
                return user;
            }
        });
    };
    System.prototype.signOut = function (account, password) {
        this.users = this.users.map(function (user) {
            if (user.password === password && user.account === account) {
                return __assign(__assign({}, user), { signIn: false });
            }
            else {
                return user;
            }
        });
        this.currentUser = null;
    };
    System.prototype.getTodos = function () {
        return this.currentUser.todos;
    };
    System.prototype.postTodos = function (payload) {
        this.currentUser.todos.push(payload);
    };
    System.prototype.putTodos = function (id, payload) {
        this.currentUser.todos = this.currentUser.todos.map(function (todo) {
            if (todo.id === id) {
                return __assign(__assign({}, todo), payload);
            }
            else {
                todo;
            }
        });
    };
    System.prototype.deleteTodos = function (id) {
        this.currentUser.todos = this.currentUser.todos.filter(function (todo) { return todo.id !== id; });
    };
    return System;
}());
// 介面指定義一個類別該有的方法，類別實作出邏輯，外部呼叫時不能也不需要知道類別實作的邏輯，只需關注介面提供的方法
//# sourceMappingURL=todo.js.map