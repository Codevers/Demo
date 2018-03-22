(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 6.4 + 'px';
    }, false);
    	
	document.documentElement.style.minHeight=window.innerHeight + 'px';
})();



