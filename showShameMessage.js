insertShame();

function insertShame() {
	var page = document.querySelector('body');
	page.insertAdjacentHTML('afterbegin', '<div id="shame-message"><h1>ERROR 404</h1></div></div>');
}

var closeTab = document.getElementById('quit');
closeTab.addEventListener('click', function() {
    chrome.runtime.sendMessage({closeThis: true});
});

var watch = document.getElementById('continue');
watch.addEventListener('click', function() {
	var shame = document.getElementById('shame-message');
	document.querySelector('body').removeChild(shame);
	document.getElementById('appMountPoint').style.display = "block";
});



(function() {
    'use strict';

     function disableScroll() {
			document.body.classList.add("stop-scrolling");
		}

    window.addEventListener("keydown", function(e) {
    // space, page up, page down and arrow keys:
    if([32, 33, 34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


var scrollPosition = [
  self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
  self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);
})();
