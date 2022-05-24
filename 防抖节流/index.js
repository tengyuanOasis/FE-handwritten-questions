/**
 *
 * @param {*} fn 外部函数
 * @param {*} delay	延时时间
 * @return {function}
 * @description n秒内重复触发时间重置
 */
function debounce(fn, delay) {
	let timer;
	return function () {
		let _this = this;
		let _args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(_this, _args);
		}, delay);
	};
}

/**
 *
 * @param {*} fn
 * @param {*} delay
 * @return {function}
 * @description n秒内只触发一次
 */
function throttle(fn, delay) {
	let timer,
		lastTime = Date.now();
	return function () {
		let _this = this;
		let _args = arguments;
		let nowTime = Date.now();
		let remainTime = delay - (nowTime - lastTime);
		if (remainTime > 0) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(_this, _args);
			}, remainTime);
		} else {
			fn.apply(_this, _args);
			lastTime = Date.now();
		}
	};
}

