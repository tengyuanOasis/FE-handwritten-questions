/**
 * 1、return一个新的函数
 * 2、改变this指向
 */
Function.prototype.bind2 = function (context) {
	let _this = this;
	return function () {
    return _this.apply(context)
	};
};
