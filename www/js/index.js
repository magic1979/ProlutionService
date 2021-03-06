
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:@
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler@
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//document.addEventListener("resume", onResume, false);
        app.receivedEvent('deviceready');

		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//PushbotsPlugin.debug(true);
		
		//PushbotsPlugin.setBadge(1);
	    	if(PushbotsPlugin.isiOS()){
			PushbotsPlugin.initializeiOS("56cc3df117795922728b4567");
		 }
		 if(PushbotsPlugin.isAndroid()){
			PushbotsPlugin.initializeAndroid("56cc3df117795922728b4567", "484390836796");
		 }
					
		 
		 $(document).on("touchstart", "#menuR", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "menu.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#badde2", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "cart.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#btnprofilo7", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "rating.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#altro", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			//$("#mypanelH").panel("open");
			$("#btnpanel").click();
		});
		
							
		$(document).on("touchstart", "#premi", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "premi.html";
		});
		
		$(document).on("touchstart", "#notifiche", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "Notifiche.html";
		});
		
		$(document).on("touchstart", "#ordini", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			goprofilo()
		});
		
		$(document).on("touchstart", "#radio", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			gomappa()
		});
		
		$(document).on("touchstart", "#termini", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "TerminiCondizioni.html";
		});
		
		$(document).on("touchstart", "#faccialibro", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			gofacebook()
		});
		
		$(document).on("touchstart", "#uscire", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			uscire()
		});
		
		$(document).on("touchstart", "#entrare", function(e){
					   //$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
					   saldopunti()
		})
		
		$(document).on("touchstart", "#tel", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "tel:+393478253732";
		});
		
		$(document).on("touchstart", "#chisiamo", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "chisiamo.html";
		});
		
	
		document.addEventListener("showkeyboard", function(){ $("[data-role=footer]").hide();}, false);
		document.addEventListener("hidekeyboard", function(){ $("[data-role=footer]").show();}, false);
		
		
		// Workaround for buggy header/footer fixed position when virtual keyboard is on/off@
		$('input, select')
		.on('focus', function (e) {
			$('header, footer').css('position', 'absolute');
			})
		.on('blur', function (e) {
			$('header, footer').css('position', 'fixed');
			//force page redraw to fix incorrectly positioned fixed elements
			//setTimeout( function() {
			//window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
			//		   }, 20 );
			});
	
		
		var email = localStorage.getItem("email");
		var loginvera = localStorage.getItem("loginvera");
		var ciao = "";
		var ciao1 = "";
		var distanza = "";
		var Categoria="";
		var Provincia="";
		var model = device.model;
		var Badge10 = localStorage.getItem("Badge10");
		var db;
		var dbCreated = false;
		
		//$("#classifica").html("Loading....");
		
		if((email=="")||(!email)){
			$("#btnprofilo").attr("href", "#page4");
			$("#btnprofilo").attr("onclick", "javascript:checklogin();");
		}else{
			$("#btnprofilo").attr("href", "#mypanel");
			$("#btnprofilo").attr("onclick", "#");
		}
		
		if((Badge10=="")||(!Badge10)||(Badge10==0)){
			localStorage.setItem("Badge10", 0)
			$('#badde').removeClass('badge1').addClass('badge2');
			
		}else{
			$('#badde').removeClass('badge2').addClass('badge1');
			$("#badde").attr("data-badge", Badge10);
			$("#badde").html('<img src="img/CartW.png" width="20px">');
			
			$('#badde2').removeClass('badge2').addClass('badge1');
			$("#badde2").attr("data-badge", Badge10);
			$("#badde2").html('<img src="img/CartW.png" width="20px">');
		}
		
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
			
			checkPos();
			agg();
			mostrapunti()
			$(".spinner").hide();
			
			buildprodotto('Pizza','Roma',1);
			
			
			if ((localStorage.getItem("emailStory")=="")||(!localStorage.getItem("emailStory"))||(localStorage.getItem("emailStory")==0)){
				//alert("Non ci sta")
			}
			else{
				if(localStorage.getItem("emailStory")==localStorage.getItem("email2")){
					//alert("stesso utente")
				}
				else{
					//alert("cancella")
					if(localStorage.getItem("email3")!=1){
						navigator.notification.confirm(
						'Stai cercando di accedere con un altro utente, assicurati prima di svuotare il tuo carrello per non perdere i punti della tua card prima di procedere.',  // message
							onConfirm,              // callback to invoke with index of button pressed
							'Attenzione',            // title
							'Prosegui,Annulla'      // buttonLabels
					);
					}
				}
			}
			
			
			if(localStorage.getItem("Registrato")!=1){
				//alert("entrato")
				
			setTimeout (function(){
						
				PushbotsPlugin.getToken(function(token){
					localStorage.setItem("Token", token);
					//alert(token)
					RegToken()
				 });
						
			}, 2000);
				
			}

			
			$("#footer").show();
			
		}
		else{
			$('#noconn').show();
			
			var tabella = "<table align='center' border='0' width='100%' height='120px'>";
			tabella = tabella + "<tr><td align='center'><a href='javascript:riparti()' class='btn'><font color='#fff'>Connetti</font></a></td></tr>";
			tabella = tabella + "</table>";
			
			$("#noconn").html(tabella);
			
			
			$("#footer").show();
		}
    }
	
}

function onConfirm(button) {
	
	if (button==1){
		localStorage.setItem("email3", 1);
		dlt()
	}
	else{
		localStorage.setItem("email2", localStorage.getItem("emailStory"));
		
		localStorage.setItem("loginvera", "")
		localStorage.setItem("email", "")
		
		window.location.href = "Login.html";
	}
}

function gocart() {
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	
	$(document).on('pagebeforeshow', function () {
		$(this).find('a[data-rel=back]').buttonMarkup({
		iconpos: 'notext'
	});
				   
	//setTimeout(function() {
		//$(window).scrollTop($(window).scrollTop()+1);
		//window.scrollTo(0,0);
	//}, 500);
				   
 });
	
	var email = localStorage.getItem("email");
	var Badge10 = localStorage.getItem("Badge10");
	$("#badde3").attr("data-badge", Badge10);
	
	if (Badge10 > 0){
		$('#badde3').removeClass('badge2').addClass('badge3');
	}

	
	if((email=="")||(!email)){
		$("#btnprofilo3").attr("href", "#page4");
		$("#btnprofilo3").attr("onclick", "javascript:checklogin();");
	}else{
		$("#btnprofilo3").attr("href", "#mypanel");
		$("#btnprofilo3").attr("onclick", "#");
	}
	
	//$("#riepilogo9").html("");
	

	//$('#contenutoCart').html(landmark);
	seleziona();
}

function AggProd(prod) {
	
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
		return;
	}
	
	var aggiornamento = 0;
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	if (prod==1){
		msg="Pizza";
		prezzo="6.50";
	}
	else if (prod==2){
		msg="Panino";
		prezzo="4.50";
	}
	else{
		msg="Menu";
		prezzo="8.00";
	}

	
	localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))+1)
	var Badge10 = localStorage.getItem("Badge10");

	$('#badde').removeClass('badge2').addClass('badge1');
	$("#badde").attr("data-badge", Badge10);
	$("#badde").html('<img src="img/CartW.png" width="20px">');
	
	$('#badde2').removeClass('badge2').addClass('badge1');
	$("#badde2").attr("data-badge", Badge10);
	$("#badde2").html('<img id="carro2" src="img/CartW.png" width="20px">');
	
	$('#badde3').removeClass('badge2').addClass('badge1');
	$("#badde3").attr("data-badge", Badge10);
	
	$('#badde4').removeClass('badge2').addClass('badge1');
	$("#badde4").attr("data-badge", Badge10);
	$("#badde4").html('<img src="img/CartW.png" width="20px">');
	
	$( "#carro2" ).effect( "bounce", "slow" );
	
	db.transaction(function (tx) {
		tx.executeSql('UPDATE Ordine set Qta=Qta+1, Descrizione=Descrizione + '+ prezzo +' where id='+ prod +'', [], function (tx, results) {
			aggiornamento = 1;
			//alert("Prod:" + prod);
		}, null);
	});
	
	localStorage.setItem("emailStory", localStorage.getItem("email"));
	
	//se sono diverse cancello carrello

	if(aggiornamento==0){
		agg2(prod)
		//alert("Prod:" + prod);
	}
	
	
}

function SottProd(prod) {
	var aggiornamento = 0;
	var azione=0;
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	if (prod==1){
		msg="Pizza";
		prezzo="6.50";
	}
	else if (prod==2){
		msg="Panino";
		prezzo="4.50";
	}
	else{
		msg="Menu";
		prezzo="8.00";
	}
	
	var Badge10;
	/*if (parseInt(localStorage.getItem("Badge10")) > 0){
		localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
	
		Badge10 = localStorage.getItem("Badge10");
	
		$("#badde").attr("data-badge", Badge10);
		$("#badde").html('<img src="img/CartW.png" width="20px">');
	
		$("#badde2").attr("data-badge", Badge10);
		$("#badde2").html('<img src="img/CartW.png" width="20px">');
		
	}
	else {
		Badge10 = 0;
		
		$("#badde").attr("data-badge", Badge10);
		$("#badde").html('<img src="img/CartW.png" width="20px">');
		
		$("#badde2").attr("data-badge", Badge10);
		$("#badde2").html('<img src="img/CartW.png" width="20px">');

	}*/
	
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine where id='+ prod +'', [], function (tx, results) {
					 var len = results.rows.length, i;

						for (i = 0; i < len; i++){
							if (parseInt(results.rows.item(i).Qta) > 1){
								tx.executeSql('UPDATE Ordine set Qta=Qta-1, Descrizione=Descrizione - '+ prezzo +' where id='+ prod +'', [], function (tx, results) {
										//alert("UPD");
										
											  localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
											  
											  Badge10 = localStorage.getItem("Badge10");
											  
											  $("#badde").attr("data-badge", Badge10);
											  $("#badde").html('<img src="img/CartW.png" width="20px">');
											  
											  $("#badde2").attr("data-badge", Badge10);
											  $("#badde2").html('<img src="img/CartW.png" width="20px">');
											  
											  $("#badde3").attr("data-badge", Badge10);
											  
											  $("#badde4").attr("data-badge", Badge10);

								   }, null);
							}
							else{
									tx.executeSql('DELETE FROM Ordine where id='+ prod +'', [], function (tx, results) {
										//alert("DEL");
										$(".buttonOrdine").hide();
												  
												  localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
												  Badge10 = localStorage.getItem("Badge10");
												  
												  $("#badde").attr("data-badge", Badge10);
												  $("#badde").html('<img src="img/CartW.png" width="20px">');
												  
												  $("#badde2").attr("data-badge", Badge10);
												  $("#badde2").html('<img src="img/CartW.png" width="20px">');
												  
												  $("#badde3").attr("data-badge", Badge10);
												  
												  $("#badde4").attr("data-badge", Badge10);
												  
								   }, null);
							}
						}

					 }, null);
				   });
	
	seleziona();
}

function agg(){
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	var msg;
	var test;
	var P1 = '110';
	
	db.transaction(function (tx) {
       tx.executeSql('CREATE TABLE IF NOT EXISTS Ordine (id unique, IdProdotto, Qta, Descrizione, Nome)');
       //tx.executeSql('INSERT INTO Ordine (id, IdProdotto, Qta, Descrizione, Nome) VALUES (1, 1, 1, "Omaggio", "Omaggio")');
	});
	
}

function agg2(prod){
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	if (prod==1){
		msg="Pizza";
		prezzo="6.50";
		}
	else if (prod==2){
		msg="Panino";
		prezzo="4.50";
	}
	else{
		msg="Menu";
		prezzo="8.00";
	}
	
	db.transaction(function (tx) {
       tx.executeSql('CREATE TABLE IF NOT EXISTS Ordine (id unique, IdProdotto, Qta, Descrizione, Nome)');
       tx.executeSql('INSERT INTO Ordine (id, IdProdotto, Qta, Descrizione, Nome) VALUES ('+ prod +', 1, 1, "'+ prezzo +'", "'+ msg +'")');
				   });
	
	seleziona();
}


function seleziona() {
	var Badge10 = localStorage.getItem("Badge10");
	$("#badde3").attr("data-badge", Badge10);
	var TOT = localStorage.getItem("TOT");
	
	var landmark = '<table id="myTable" class="tablesorter"><thead><tr><th><font color="white" size="2">ORDINE</font><img src="img/giu2.png" height="10px"></th><th><font color="white" size="2">QTA</font><img src="img/giu2.png" height="10px"></th><th><font color="white" size="2">COSTO</font><img src="img/giu2.png" height="10px"></th><th><font color="white" size="2"></font></th><th><font color="white" size="2"></font></th></tr></thead><tbody id="contenutoCart">';
	
	
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 
					 //alert(len);
					 
					 for (i = 0; i < len; i++){
					 
					 msg = results.rows.item(i).IdProdotto + "," + results.rows.item(i).Qta + "," + results.rows.item(i).Descrizione + "," + results.rows.item(i).Nome;
					 
					 landmark = landmark + '<tr><td><font size="3">'+ results.rows.item(i).Nome +'</font></td><td><font size="3">'+ results.rows.item(i).Qta +'</font></td><td><font size="3">'+ results.rows.item(i).Descrizione +'</font></td><td align="center"><a href="javascript:SottProd('+ parseInt(results.rows.item(i).id) +')"><div width="28px" class="home"></div></a></td><td align="center"><a href="javascript:AggProd('+ parseInt(results.rows.item(i).id) +')"><div width="28px" class="home1"></div></td></tr>';
					 
					  //TOT = (Number(TOT) + Number(results.rows.item(i).Descrizione));
					 
					 //$("#buttonOrdine").show();
					 
					 //miaVariabile = msg.split(",");
					 
					 //document.write(miaVariabile[0] + "<br>");
					 //document.write(miaVariabile[1] + "<br>");
					 
					 //$('#esempio').html(miaVariabile[0] + miaVariabile[1]);
					 //$('#contenutoCart').html(msg);
					 
					 }
					 
					 landmark = landmark + '</tbody></table>';
					 $('#contenutoCart').html(landmark);
					 
					 selPrezzo();
					 //$('#TOTPrezzo').html(TOT.toFixed(2));
					 //localStorage.setItem("TOT", TOT.toFixed(2))
					 
					 
					 }, null);
				   });

}

function dlt(){
	localStorage.setItem("Badge10", 0)
	$('#badde').removeClass('badge1').addClass('badge2');
	
	db.transaction(function (tx) {
		tx.executeSql('DELETE FROM Ordine', [], function (tx, results) {
	}, null);
	});
	
	
	localStorage.setItem("Badge10", 0)
	
	Badge10 = localStorage.getItem("Badge10");
	
	$("#badde").attr("data-badge", Badge10);
	
	$("#badde2").attr("data-badge", Badge10);

	$('#badde3').removeClass('badge3').addClass('badge2');
	
	$('#badde4').removeClass('badge3').addClass('badge2');
	
	localStorage.setItem("TOT", 0)

	seleziona();
}

function selPrezzo(){
	db.transaction(function (tx) {
       tx.executeSql('SELECT SUM(Descrizione) as TOT FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 
					 //alert(len);
					 
					 for (i = 0; i < len; i++){
						$('#TOTPrezzo').html(Number(results.rows.item(i).TOT).toFixed(2));
					 }

					 
					 }, null);
				   });
	
	document.removeEventListener('touchmove', handleTouch, false);

}

function compraConsegna(){
	navigator.notification.alert(
								 'Riceverai la conferma e i tempi di consegna entro pochi minuti, grazie.',  // message
								 alertDismissed,         // callback
								 'Ordine Spedito',            // title
								 'Chiudi'                  // buttonName
								 );
}


function verificawifi(){
	$("#verifica").click();
}


function onResume() {
	app.initialize();
}

function checkPos() {
	
	navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: false, maximumAge: 0 });
	
	function onSuccess(position) {
		ciao = position.coords.latitude;
		ciao1 = position.coords.longitude;
		
		localStorage.setItem("lat", ciao)
		localStorage.setItem("lng", ciao1)
		
		localStorage.setItem("geostory", "SI")
		
		//$("#radio").attr("href", "maps:saddr="+ ciao +","+ ciao1 +"&daddr=Via di Acilia,17,Roma");
		
		
		//alert('Lat' + ciao + 'Lng' + ciao1);
		/*$("#radio").attr("href", "maps:saddr="+ ciao +","+ ciao1 +"&daddr=Via di Acilia,17,Roma");
		$("#radio2").attr("href", "maps:saddr="+ ciao +","+ ciao1 +"&daddr=Via di Acilia,17,Roma");
		$("#radio9").attr("href", "maps:saddr="+ ciao +","+ ciao1 +"&daddr=Via di Acilia,17,Roma");*/
	}
	
	
	function onError(error) {
		
		localStorage.setItem("geostory", "NO")
		
		/*$("#radio").attr("maps:q=Via di Acilia, 17,Roma");
		$("#radio2").attr("maps:q=Via di Acilia, 17,Roma");
		$("#radio9").attr("maps:q=Via di Acilia, 17,Roma");*/

	}
	
}

function gomappa(){
	var addressLongLat = '41.777861,12.355745';
	
	window.open("http://maps.apple.com/?q="+addressLongLat, '_blank');
	//window.location.href = "http://maps.apple.com/?q="+addressLongLat
	//window.open("http://maps.google.com/?q="+addressLongLat, '_system');
	
	//var ref = window.open('http://maps.apple.com/?q=Via di Acilia, 7', '_system')
}

function gofacebook(){
	var ref = window.open('https://m.facebook.com/fratellidipizzaacilia', '_system', 'location=no');
}


function getDistance(lat1,lon1,lat2,lon2) {
	var R = 6371; // Radius of the earth in km
	var dLat = deg2rad(lat2-lat1);  // deg2rad below
	var dLon = deg2rad(lon2-lon1);
	var a =
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
	Math.sin(dLon/2) * Math.sin(dLon/2)
	;
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c; // Distance in km
	return d;
}

function deg2rad(deg) {
	return deg * (Math.PI/180)
}



function apri() {
	var pagina = "donazione";
	var ref = window.open('http://www.pokeranswer.it/live/'+ pagina +'.asp', '_blank', 'location=no');
	//www.pokeranswer.it/live/aams.html
}

function GoBack() {
	$(window).scroll(function() {
					 if($(window).scrollTop() + $(window).height() > $(document).height() - 40) {
					 buildprodotto(localStorage.getItem("Categoria"),localStorage.getItem("Provincia"),2,1);
					 }
					 });
	  history.go(-1);
	
	}

function prodotto(idProdotto) {
	
	//loaded();
	//$(window).off("scroll");
	
	$(document).on('pagebeforeshow', function () {
				   $(this).find('a[data-rel=back]').buttonMarkup({
																 iconpos: 'notext'
																 });


				   setTimeout (function(){
						myScroll.refresh();
					}, 1000);

				   });

	
	
	var landmark2 ="";
	$(".spinner").show();
	var Recensione = "";
	var model = device.model;
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Prodotto.asp",
		   contentType: "application/json",
		   data: {ID:idProdotto},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  $("#idheader").html("<table id='idheader' height='50'><tr><td width='30px' align='center'></td><td width='240px' align='center' valign='middle'><font color='#FFFFFF' size='3'>"+ item.Nome +"</font></td><td width='50px' align='center' valign='middle'></td></tr></table>");
				  
				  if((item.TitRecensione=="")||(!item.TitRecensione)){
				  var Recensione = "";
				  }
				  else{
				  Recensione = "<tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>"+ item.TitRecensione +"<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Recensione +"</font></td></tr>";
				  }
				  
				  
				  if (model.indexOf('iPad') >= 0) {
				  $("#prodotto").html("<img src='http://www.mistertod.it/public/up/"+ item.IMG +".png' width='700px' height='440px' class='arrotondamento'><table width='90%' border='0' id='' align='center'><tr><td colspan='3'><font color='#454545' size='3'><b>"+ item.DescrizioneS +"</b></font></td></tr><tr><td colspan='3' align='left'><font color='#454545' size='2'>Valore: <strike>"+ item.Valore +"</strike></font></td></tr><tr><td colspan='3'></td></tr><tr><td align='left'><font color='#FF8000' size='4'><b>"+ item.Deal +"&euro; </b></font></td><td align='right' colspan='2'><font color='#454545' size='2'>"+ item.Nome +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Dove Siamo<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'><img src='img/pin.png' height='24px'> "+ item.Indirizzo +"<br>"+ item.Cap +", "+ item.Citta +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>In Sintesi<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Sintesi +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Dettagli<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Dettagli +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Condizioni<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Condizioni +"</font></td></tr>"+ Recensione +"<tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><a href='#page3' onclick='javascript:riepilogo("+ idProdotto +",1);' data-transition='slide' class='zocial email'>&nbsp;&nbsp;&nbsp;Regala Coupon&nbsp;&nbsp;&nbsp;</a></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><a href='javascript:condividi("+ idProdotto +");' class='zocial facebook'>Condividi su Facebook</a></td></tr></table>");
				  }
				  else{
				  $("#prodotto").html("<img src='http://www.mistertod.it/public/up/"+ item.IMG +".png' width='320px' height='180px'><table width='100%' border='0' id='' align='center'><tr><td colspan='3'><font color='#454545' size='3'><b>"+ item.DescrizioneS +"</b></font></td></tr><tr><td colspan='3' align='left'><font color='#454545' size='2'>Valore: <strike>"+ item.Valore +"</strike></font></td></tr><tr><td colspan='3'></td></tr><tr><td align='left'><font color='#FF8000' size='4'><b>"+ item.Deal +"&euro; </b></font></td><td align='right' colspan='2'><font color='#454545' size='2'>"+ item.Nome +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Dove Siamo<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'><img src='img/pin.png' height='24px'> "+ item.Indirizzo +"<br>"+ item.Cap +", "+ item.Citta +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>In Sintesi<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Sintesi +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Dettagli<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Dettagli +"</font></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3'><font color='#454545' size='3'>Condizioni<hr class='style-six'></font></td></tr><tr><td colspan='3'><font color='#454545' size='2'>"+ item.Condizioni +"</font></td></tr>"+ Recensione +"<tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><a href='#page3' onclick='javascript:riepilogo("+ idProdotto +",1);' data-transition='slide' class='zocial email'>&nbsp;&nbsp;&nbsp;Regala Coupon&nbsp;&nbsp;&nbsp;</a></td></tr><tr><td colspan='3'><hr class='div3'></td></tr><tr><td colspan='3' align='center'><a href='javascript:condividi("+ idProdotto +");' class='zocial facebook'>Condividi su Facebook</a></td></tr></table>");
				  }
				  
				  //$("#clock").countdown("2015/"+ item.MeseScadenza +"/"+ item.GiornoScadenza +" "+ item.OraScadenza +":"+ item.MinutiScadenza +":00", function(event) {
										//$(this).html(event.strftime('%D giorni %H:%M:%S'));
										//});
				  
				  });
		   
		   $(".spinner").hide();
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
	
	$("#idfooter").html("<table id='idfooter' border='1'><tr><td width='200px' align='center'><span id='clock'></span></td><td width='120px' align='center'><a href='#page3' onclick='javascript:riepilogo("+ idProdotto +",0);' data-transition='slide' class='ui-btn ui-shadow ui-corner-all'>Acquista!</a></td></tr></table>");
	
	
}


function buildprodotto(Categoria,Provincia,Pagina) {
	
	localStorage.setItem("Categoria", "");
	localStorage.setItem("Provincia", "");
	
	var idProdotto = 1;
	var landmark2="";
	$(".spinner").show();
	var model = device.model;
	var MeseScadenza = "06";
	var GiornoScadenza = "14";
	var OraScadenza = "15";
	var MinutiScadenza = "00";
	
	// inserire nel WS le date di scadenza
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/fratelli/www/Check_Home.asp",
		   contentType: "application/json",
		   //data: {Categoria:Categoria,Provincia:Provincia,Pagina:Pagina},
		   data: {Categoria:"offerte"},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				if (item.ID != 0){
				   distanza = getDistance(localStorage.getItem("lat"),localStorage.getItem("lng"),item.Lat,item.Long).toFixed(1);
				  
				   //alert(distanza);javascript:AggProd(3);
				  
				  if (model.indexOf('iPad') >= 0) {
					landmark2 = landmark2 + "<a style='text-decoration: none;' href='#page2' onclick='javascript:pagina22("+ item.Cod_Prodotto +");' id='linkdettagli' ><img src='http://www.mistertod.it/public/up/"+ item.IMG +".png' width='700px' height='400px' class='arrotondamento'><table height='30px' border='0' width='90%'><tr><td align='left' colspan='2'><font size='3' color='#454545'>"+ item.Descrizione +"</font></td></tr><tr><td align='left' width='50%'><font size='2' color='#454545'>"+ item.Nome +"</font></td><td align='right'><font size='2' color='#454545'>"+ item.Citta +"</font></font></td></tr><tr><td align='left' width='50%'><font size='2' color='#454545'>Distanza:Km "+ distanza +" </font></td><td align='right'><font size='4' color='#B40431'>"+ item.Indirizzo +"</font></td></tr></table></a><br><hr class='div3'>";
				  }
				  else{
					$("#classifica").append("<div id="+ item.Cod_Prodotto +"'><a id='prod"+ item.Cod_Prodotto +"' style='text-decoration: none;' href='#' rel='external' onclick='#' data-transition='slide' id='linkdettagli"+ item.Cod_Prodotto +"'><img src='http://msop.it/public/fratelli/"+ item.IMG +".png' width='100%'></a><table height='30px' border='0' width='320px'><tr><td align='left' colspan='2'><font size='3' color='#454545'>"+ item.Descrizione +"</font></td></tr><tr><td align='left' width='160px'><br><font size='2' color='#454545'>Acquistati:</font><font size='2' color='#B40431'> "+ item.Acquistati +"</font></td><td align='right'><br><font size='2' color='#B40431'>Vale:<strike>"+ item.Valore +"&euro;</strike> "+ item.Sconto +"%</font></font></td></tr><tr><td align='left' width='160px' valign='center'><font size='2' color='#454545'>Scade tra: </font><font size='2' color='#B40431'>"+ item.GiorniRimanenti +" </font><font size='2' color='#454545'>giorni</font></td><td id='deallo"+ item.Cod_Prodotto +"' colspan='2' align='right'><font size='5' color='#B40431'>"+ item.Deal +"&euro;</font></td></tr><tr id='vis2"+ item.Cod_Prodotto +"' style='display:none' class='visione'><td align='left' colspan='2'><font size='1' color='#454545' class='someclass'>"+ item.Dettagli +"</font></td></tr></table><br><hr class='div3'></div>");
					
					 //$("#classifica").append("<div class='container'><a id='prod"+ item.Cod_Prodotto +"' style='text-decoration: none;' href='#' rel='external' onclick='#' data-transition='slide' id='linkdettagli"+ item.Cod_Prodotto +"'><div class='tag'><img src='img/info.png' width='50px'></div></a><img src='http://msop.it/public/fratelli/"+ item.IMG +".png' width='100%'></div><table height='30px' border='0' width='320px'><tr><td align='left' colspan='2'><font size='3' color='#454545'>"+ item.Descrizione +"</font></td></tr><tr><td align='left' width='160px'><br><font size='2' color='#454545'>Acquistati:</font><font size='2' color='#B40431'> "+ item.Acquistati +"</font></td><td align='right'><br><font size='2' color='#B40431'>Vale:<strike>"+ item.Valore +"&euro;</strike> "+ item.Sconto +"%</font></font></td></tr><tr><td align='left' width='160px' valign='center'><font size='2' color='#454545'>Scade tra: </font><font size='2' color='#B40431'>"+ item.GiorniRimanenti +" </font><font size='2' color='#454545'>giorni</font></td><td id='deallo"+ item.Cod_Prodotto +"' colspan='2' align='right'><font size='5' color='#B40431'>"+ item.Deal +"&euro;</font></td></tr><tr id='vis2"+ item.Cod_Prodotto +"' style='display:none' class='visione'><td align='left' colspan='2'><font size='1' color='#454545' class='someclass'>"+ item.Dettagli +"</font></td></tr></table><br><hr class='div3'>");
				  }
				  
				  $(document).on("tap", "#prod"+ item.Cod_Prodotto +"", function(e){
					e.stopImmediatePropagation();
					e.preventDefault();
					window.location.href = "index3.html?prod="+ item.Cod_Prodotto +"";
					return false;
				  });
				  
				  idProdotto = idProdotto+1;
				  /*<font size='4' color='#B40431'>"+ item.Deal +"&euro;</font>
				  <font size='3' color='#454545'>"+ item.Descrizione +"</font>
				  <font size='2' color='#454545'>Scade tra 14 giorni</font>
				  <font size='2' color='#B40431'><strike>"+ item.Valore +"&euro;</strike> -10%</font>*/
				  

				  
				  
				  //$("#getting-started").countdown("2015/"+ MeseScadenza +"/"+ GiornoScadenza +" "+ OraScadenza +":"+ MinutiScadenza +":00", function(event) {
						//$(this).html(event.strftime('%D giorni %H:%M:%S'));
					//});
				  
				  
				}
				else{
				  landmark2 ="Nessun risultato trovato";
				}
				  
				
			});
		   
		   $(".spinner").hide();
		   $("#noconn").hide();
		   
			
			setTimeout (function(){
				myScroll.refresh();
			}, 1000);
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
			//$('#getting-started').countdown('2015/06/30', function(event) {
				//$(this).html(event.strftime('%w sett. %d giorni %H:%M:%S'));
			//});

}

function vedi(prod) {
	
	//alert("vedi" + prod);
	
	//var elementHeight = element.height();
	var windowHeight  = $(window).height();
	
	var altezza= windowHeight;
	//alert(altezza);
	
	if (prod!=4){
		myScroll.scrollTo(0, -altezza, 0);
	}
	else
	{
		myScroll.scrollTo(0, 0, 0);
	}
	
	// chiamare prodotto e costruire una nuova pagina solo con uno tutto aperto.
	
	setTimeout(function() {
			   $("#vis1"+ prod +"").toggle( "slide" );
			   $("#vis2"+ prod +"").toggle( "slide" );
			   $("#deallo"+ prod +"").attr("colspan", "1");
			   $("#linkdettagli"+ prod +"").attr("href", "javascript:NOvedi("+ prod +")");
			   
			   
			   setTimeout(function() {
						  myScroll.refresh();
			   }, 300);
	}, 300);
	

	
	//myScroll.refresh();
}

function NOvedi(prod) {
	//alert("Novedi" + prod);
	
	setTimeout(function() {
	$("#vis1"+ prod +"").hide();
	$("#vis2"+ prod +"").hide();
	$("#deallo"+ prod +"").attr("colspan", "2");
	$("#linkdettagli"+ prod +"").attr("href", "javascript:vedi("+ prod +")");
	
	myScroll.refresh();
	}, 300);

}

function compraoff(id) {
	//alert(id);
	$("#compraofferta"+ id +"").show();
}



function compraEmail() {
	window.plugin.email.open({
		to:      ['info@mistertod.it'],
		subject: 'Contatti',
		body:    '',
		isHtml:  true
	});
}

function EmailDimenticata() {
	navigator.notification.prompt(
								  'Inserisci il tuo indirizzo email',  // message
								  onPrompt,                  // callback to invoke
								  'Recupera la Password',            // title
								  ['Invia','Annulla'],             // buttonLabels
								  'Email'                 // defaultText
								  );
}

function onPrompt(results) {
	if(results.buttonIndex==1){
		if (results.input1 == "") {
			navigator.notification.alert(
										 'inserire indirizzo email',  // message
										 alertDismissed,         // callback
										 'Email',            // title
										 'OK'                  // buttonName
										 );
			return;
		}
		
		EmailAddr = results.input1;
		Filtro = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
		if (Filtro.test(EmailAddr)) {
			
		}
		else {
			navigator.notification.alert(
										 'Caratteri email non consentiti',  // message
										 alertDismissed,         // callback
										 'Email',            // title
										 'OK'                  // buttonName
										 );
			return;
		}

		//Recupera la Password
		//alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://www.mistertod.it/www/Check_RecPassword.asp",
			   contentType: "application/json",
			   data: {email:results.input1},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					if(item.Token==1024){
					  navigator.notification.alert(
												   'Invio eseguito correttamente',  // message
												   alertDismissed,         // callback
												   'Recupero Password',            // title
												   'OK'                  // buttonName
												   );
					}
					else{
						navigator.notification.alert(
												   'Recupero fallito, riprova in seguito',  // message
												   alertDismissed,         // callback
												   'Errore Recupero',            // title
												   'OK'                  // buttonName
												   );
					}

			   
					  
				});
			   
			   $(".spinner").hide();
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
											'Possibile errore di rete, riprova tra qualche minuto',  // message
											alertDismissed,         // callback
											'Attenzione',            // title
											'Done'                  // buttonName@
											);
			   
			   },
		dataType:"jsonp"});

		
	}
		
}

function errorHandler(error) {
	navigator.notification.alert(
								 'Possibile errore di rete, riprova tra qualche minuto',  // message
								 alertDismissed,         // callback
								 'Attenzione',            // title
								 'Done'                  // buttonName
								 );
}


function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
		
		document.activeElement.blur();
		$("input").blur()
		return false;
		
	}
	
}


function alertDismissed() {
	
}

function rati() {
	$('#rati1').raty({ score: 3 });
}

function initscroll() {
	
	myScroll = new IScroll('#wrapper', { click: true });
				   
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
				   
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

}



function saldopunti(){
	var loggato = localStorage.getItem("loginvera")
	
	
	if((loggato=="")||(!loggato)){
		//alert("No")
		window.location.href = "Login.html";
	}else{
		//window.location.href = "profilo.html";
		//window.location.href = "Login.html";
		
		/*localStorage.getItem("Nome")
		localStorage.getItem("Cognome")
		localStorage.getItem("Punti")
		localStorage.getItem("Indirizzo")
		localStorage.getItem("Citta")
		localStorage.getItem("Telefono")
		localStorage.getItem("email")*/
		
		var tblProfile = "<tr><td><b>PROFILO</b></td></tr><tr><td>" + localStorage.getItem("Nome") +"&nbsp;"+ localStorage.getItem("Cognome") +"</td></tr><tr><td>" + localStorage.getItem("Indirizzo") + "</td></tr><tr><td>&nbsp;&nbsp;</td></tr><tr><td>SALDO PUNTI: "+ localStorage.getItem("Punti") +"</td></tr>"
		
		$("#profile").html(tblProfile)
		$("#profile").show()
		
	}
	//localStorage.setItem("email", "")
	//localStorage.setItem("loginfacebook", "NO") @
	//localStorage.setItem("loginvera", "NO")
	
	
	/*navigator.notification.alert(
								 'hai 19 punti al momento, se raggiungi 32 punti una bibita in omaggio',  // message
								 alertDismissed,         // callback
								 'Saldo Punti',            // title
								 'Chiudi'                  // buttonName
								 );*/
	
}

function mostrapunti(){
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	//Se email story == NO allora cancello
	
	if((loggato=="")||(!loggato)){
		tblProfile = "<tr><td><a href='#' id='entrare' data-role='button' class='ui-btn ui-corner-all ui-btn-inline ui-icon-check ui-btn-icon-left' data-theme='b'>Login</a></td></tr>"
	}else{
		
		tblProfile = "<tr><td>SALDO PUNTI: "+ localStorage.getItem("Punti") +"</td></tr><tr><td><a id='uscire' href='#' data-role='button' class='ui-btn ui-corner-all ui-btn-inline ui-icon-delete ui-btn-icon-left' data-theme='b'>Logout</a></td></tr>"
	
	}
	
	$("#profile").html(tblProfile)
	$("#profile").show()
	
}


function uscire(){
localStorage.setItem("loginvera", "")
localStorage.setItem("email", "")
	
window.location.href = "index.html";
}


function goprofilo(){
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
	}else{
		
		window.location.href = "Profilo.html";
	}
}

function exitapp(){
	navigator.app.exitApp();
}

function riparti(){
	
	 window.location.href = "index.html";
	
}

function RegToken(){
	//alert("entrato2")
	
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://msop.it/fratelli/www/Check_RegToken.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email"),token:localStorage.getItem("Token"),platform:"Android"},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
				  if (item.Token == '1024'){
				  //alert(item.Token)
				  localStorage.setItem("Registrato", "1");
				  
				  }
				  else{
				  //alert(item.Token)
				  localStorage.setItem("Registrato", "0");
				  
				  }
			});
			   
			   $(".spinner").hide();
			   //window.location.href = "index.html";
			   
			   },
			   error: function(){
			   $(".spinner").hide();
			   
			   navigator.notification.alert(
				'Possibile errore di rete, riprova tra qualche minuto',  // message
				alertDismissed,         // callback
				'Attenzione',            // title
				'Done'                  // buttonName
				);
			   
			   },
			   dataType:"jsonp"});
}





