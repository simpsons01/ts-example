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
var Count = /** @class */ (function () {
    function Count(options) {
        this.defaultOption = {
            gap: 0.00001,
            duration: 2
        };
        var mixedOptions = __assign(__assign({}, this.defaultOption), options);
        this.el = mixedOptions.el;
        this.end = mixedOptions.end;
        this.start = mixedOptions.start;
        this.duration = mixedOptions.duration;
        this.isCountdown = mixedOptions.start - mixedOptions.end > 0;
        this.gap = mixedOptions.gap;
    }
    Count.prototype.count = function (timestemp) {
        if (!this.now)
            this.now = timestemp;
        if (this.isCountdown) {
            this.current = this.start - (this.start - this.end) * Number(((timestemp - this.now) / (this.duration * 1000)).toFixed(2));
        }
        else {
            this.current = this.start + (this.end - this.start) * Number(((timestemp - this.now) / (this.duration * 1000)).toFixed(2));
        }
        if ((!this.isCountdown && this.current > this.end - this.gap) ||
            (this.isCountdown && this.current < this.end + this.gap)) {
            this.current = this.end;
        }
        this.print(this.current);
        if (this.current !== this.end) {
            window.requestAnimationFrame(this.count.bind(this));
        }
    };
    Count.prototype.print = function (val) {
        this.el.textContent = "" + Math.floor(val);
    };
    Count.prototype.init = function () {
        window.requestAnimationFrame(this.count.bind(this));
    };
    return Count;
}());
//# sourceMappingURL=count.js.map