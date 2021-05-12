var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum["right"] = "right";
    DirectionEnum["left"] = "left";
})(DirectionEnum || (DirectionEnum = {}));
var SwiperItemMoveEnum;
(function (SwiperItemMoveEnum) {
    SwiperItemMoveEnum["enter"] = "enter";
    SwiperItemMoveEnum["leave"] = "leave";
})(SwiperItemMoveEnum || (SwiperItemMoveEnum = {}));
var SwiperItem = /** @class */ (function () {
    function SwiperItem(options) {
        this.image = options.image;
        this.index = options.index;
    }
    SwiperItem.prototype.init = function () {
        var swiperItem = document.createElement("div");
        swiperItem.classList.add("swiper-item");
        swiperItem.style.backgroundImage = "url(" + this.image.url + ")";
        swiperItem.dataset.pageIndex = "" + this.index;
        this.el = swiperItem;
        return this.el;
    };
    SwiperItem.prototype.move = function (state, direction) {
        var vm = this;
        this.el.classList.add(state + "-" + direction);
        this.el.addEventListener("animationend", function elAnimationend() {
            vm.el.classList.remove(state + "-" + direction);
            if (state === SwiperItemMoveEnum.leave) {
                vm.hide();
            }
            vm.el.removeEventListener("animationend", elAnimationend);
        });
    };
    SwiperItem.prototype.show = function () {
        this.el.classList.add("show");
    };
    SwiperItem.prototype.hide = function () {
        this.el.classList.remove("show");
    };
    return SwiperItem;
}());
var Swiper = /** @class */ (function () {
    function Swiper(options) {
        this.currentPage = 0;
        this.swiperItemList = [];
        this.el = options.el;
        this.images = options.imagesList;
        this.total = options.imagesList.length;
        this.init();
    }
    Swiper.prototype.init = function () {
        var _this = this;
        this.images.forEach(function (image, index) {
            var swiperItem = new SwiperItem({ image: image, index: index });
            _this.swiperItemList = __spreadArray(__spreadArray([], _this.swiperItemList), [swiperItem]);
            _this.el.querySelector(".swiper-item-container").appendChild(swiperItem.init());
            if (swiperItem.index === _this.currentPage) {
                swiperItem.show();
            }
        });
    };
    Swiper.prototype.updateCurrentPage = function (page) {
        var direction, lastPage = this.currentPage;
        this.currentPage = (page + this.total) % this.total;
        if (this.currentPage === 0 && lastPage === this.total - 1) {
            direction = DirectionEnum.left;
        }
        else if (this.currentPage === this.total - 1 && lastPage === 0) {
            direction = DirectionEnum.right;
        }
        else {
            direction = this.currentPage < lastPage ? DirectionEnum.right : DirectionEnum.left;
        }
        this.updateView(this.currentPage, lastPage, direction);
    };
    Swiper.prototype.updateView = function (enter, leave, direction) {
        this.swiperItemList.forEach(function (swiperItem) {
            swiperItem.hide();
            if (swiperItem.index === leave) {
                swiperItem.show();
                requestAnimationFrame(function () {
                    swiperItem.move(SwiperItemMoveEnum.leave, direction);
                });
            }
            if (swiperItem.index === enter) {
                swiperItem.show();
                requestAnimationFrame(function () {
                    swiperItem.move(SwiperItemMoveEnum.enter, direction);
                });
            }
        });
    };
    return Swiper;
}());
//# sourceMappingURL=swiper.js.map