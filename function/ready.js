document.ready = function () {
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', function inner() {
			document.removeEventListener('DOMContentLoaded' , inner, false);
			callBack();
		}, false);
	}
	else if (document.attachEvent) {
		document.attachEvent('onreadystatechange', function inner() {
			if (document.readyState === 'complete') {
				document.detachEvent('onreadystatechange', inner);
				callBack();
			}
		});
	}
}
