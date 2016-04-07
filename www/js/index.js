var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.amendLinks('external-link');
		
		IDPage = getParameterByName('id');
		
		if (IDPage<>""){
			alert(IDPage)
		}
    },

    // Find everything with class className and open it
    // with the InAppBrowser
    amendLinks: function(className) {
        var n = 0,
            links = document.getElementsByClassName(className);

        for (; n < links.length; n++) {
            links[n].onclick = function(e) {
                e.preventDefault();
                window.open(''.concat(this.href), '_blank');
            }
        }
    }
};

app.initialize();

function ciccio(){
	alert(1);
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }