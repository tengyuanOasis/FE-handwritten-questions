/**
 * 原型式继承：核心是Object.create()对传入对象进行浅复制，复制原始数据类型和引用数据类型
 *
 */

function object(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

/**
 * 这个object()函数会创建一个临时构造函数，将传入的对象赋值给这个构造函数的原型，然后返回这个临
 * 时类型的一个实例。本质上，object()是对传入的对象执行了一次浅复制。
 */

let person = {
	name: "Nicholas",
	friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
console.log("anotherPerson: ", anotherPerson.friends);
//[ 'Shelby', 'Court', 'Van', 'Rob' ]

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
console.log("yetAnotherPerson: ", yetAnotherPerson.friends);
// [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]

console.log("person", person.friends);
// [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]

/**
 你有一个对象，想在它的基础上再创建一个新对象。你需要把这个对象先传给object()，然后再对返回的对象进行适当修改。在这个例子中，person对象定义了另一个对象也应该共享的信息，把它传给object()之后会返回一个新对象。这个新对象的原型是person，意味着它的原型上既有原始值属性又有引用值属性。这也意味着person.friends不仅是person的属性，也会跟anotherPerson和yetAnotherPerson共享。这里实际上克隆了两个person。
 *
 */

/***
 * ECMAScript 5通过增加Object.create()方法将原型式继承的概念规范化了。
 * Object.create(作为新对象原型的对象,新对象定义额外属性的对象)
 * 在只有一个参数时，Object.create()与这里的object()方法效果相同：
 */

let anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

/**
 * Object.create()的第二个参数与Object.defineProperties()的第二个参数一样：
 * 每个新增属性都通过各自的描述符来描述。以这种方式添加的属性会遮蔽原型对象上的同名属性。比如：
 */

let person = { name: "Nicholas", friends: ["Shelby", "Court", "Van"] };
let anotherPerson = Object.create(person, { name: { value: "Greg" } });
console.log(anotherPerson.name); // "Greg"
