function debounce(fn, delay) {
	let timer;
	return function () {
		let args = arguments;
		let _this = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(_this, args);
		}, delay);
	};
}

function throttle(fn, delay) {
	let timer, last;
	return function () {
		let args = arguments;
		let now = +new Date();
		let _this = this;
		clearTimeout(timer);
		if (last && now < last + delay) {
			timer = setTimeout(() => {
				last = now;
				fn.call(_this, args);
			}, delay);
		} else {
			last = now;
			fun.apply(_this, args);
		}
	};
}
