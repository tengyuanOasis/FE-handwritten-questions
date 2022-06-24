/**
 * 1、常见深拷贝：
 *  👉：JSON.parse(JSON.stringify(obj))
 *  👉缺点：不能拷贝值为undefined,或者function的数据
 */

/**
 * 2、手写cloneDeep
 * 👉：判断数据类型
 * 			-	基础数据类型
 * 				-	直接赋值
 * 			- 引用数据类型
 * 				- 数组
 * 				-	对象
 */
function cloneDeep(target) {
	// 类型判断
	if (typeof target !== "object") {
		return target;
	}

	// 设置新对象
	let newTarget = Array.isArray(target) ? [] : {};

	for (let key in target) {
		// 检查key是不是target的自有属性，而不是prototype继承来的
		if (target.hasOwnProperty(key)) {
			// 引用数据类型则clone，基本数据类型直接赋值
			newTarget[key] = typeof target[key] === "object" ? cloneDeep(target[key]) : target[key];
		}
	}
	return newTarget;
}

function cloneDeep(target) {
	// 1、类型判断，基础数据类型return
	if (typeof target !== "object") {
		return target;
	}
	// 2、引用数据类型，设置初始值
	let newTarget = Object.prototype.toString.call(target) === "[object Object]" ? {} : [];

	// 3、循环target，判断数据类型，基础数据类型==》clone ， 引用数据类型==》cloneDeep
	for (let key in target) {
		if (target.hasOwnProperty(key)) {
			newTarget[key] = typeof target[key] === "object" ? cloneDeep(target[key]) : target[key];
		}
	}
	return newTarget;
}
