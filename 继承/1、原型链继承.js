function SuperType() {
	this.property = true;
}
SuperType.prototype.getSuperValue = function () {
	return this.property;
};
function SubType() {
	this.subProperty = false;
}
// 继承SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
	return this.subProperty;
};

let instance = new SubType();

console.log(instance.getSuperValue()); // true


// 原型链继承
/**
 * 父级构造函数设置prototype共享的function
 * 子级构造函数设置prototype为父级实例
 */