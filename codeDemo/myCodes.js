var de = (document.compatMode && document.compatMode.toLowerCase() == "css1compat") ? document.documentElement : document.body;
	var docuWidth = window.innerWidth || de.clientWidth,
		docuHeight = window.innerHeight || de.clientHeight,
		_scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop),
		_scrollLeft = Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);



		