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
