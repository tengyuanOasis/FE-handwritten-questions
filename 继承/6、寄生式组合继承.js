/**
 * 组合继承其实也存在效率问题。最主要的效率问题就是父类构造函数始终会被调用两次：一次在是创建子
 * 类原型时调用，另一次是在子类构造函数中调用。
 *
 */

/**
 * 寄生式组合继承：
 * 基本思路是不通过调用父类构造函数给子类原型赋值，而是取得父类原型的一个副本。
 * 说到底就是使用寄生式继承来继承父类原型，然后将返回的新对象赋值给子类原型。
 */

function inheritPrototype(subType, superType) {
	let prototype = new Object(superType.prototype); //创建对象
	prototype.constructor = subType; // 增强对象
	subType.prototype = prototype; // 赋值对象
}

/**
 *
 * 这个inheritPrototype()函数实现了寄生式组合继承的核心逻辑。
 * 这个函数接收两个参数：子类构造函数和父类构造函数。
 * 在这个函数内部，
 * 第一步是创建父类原型的一个副本。
 * 然后，给返回的prototype对象设置constructor属性，解决由于重写原型导致默认constructor丢失的问题。
 * 最后将新创建的对象赋值给子类型的原型。如下例所示，调用inheritPrototype()就可以实现前面例子中的子类型原型赋值：
 */
function SuperType(name) {
	this.name = name;
	this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
	console.log(this.name);
};
function SubType(name, age) {
	SuperType.call(this, name);
	this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
	console.log(this.age);
};

/**
 * 这里只调用了一次SuperType构造函数，避免了SubType.prototype上不必要也用不到的属性，因此可以说这个例子的效率更高。而且，原型链仍然保持不变，因此instanceof操作符和isPrototypeOf()方法正常有效。寄生式组合继承可以算是引用类型继承的最佳模式。
 */
