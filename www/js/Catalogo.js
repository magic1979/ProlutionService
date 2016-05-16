document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.addEventListener("resume", onResume, false);
	
	
	$(document).on("touchstart", "#menuR", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "menu.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#badde3", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "cart.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#programas", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "index.html";
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
		
		$(document).on("touchstart", "#recensioni", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "rating.html";
			//initscroll()
		});
	
	$(document).on("touchstart", "#chisiamo", function(e){
				   //$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				   window.location.href = "chisiamo.html";
				   });
				   
		$(document).on("touchstart", "#tel", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "tel:+393478253732";
		});
		
		$(document).on("touchstart", "#recensione", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "rating.html";
			//initscroll()
		});

    $.mobile.defaultPageTransition = 'none';
    $.mobile.defaultDialogTransition = 'none';
	
    $(".spinner").show();
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';
    
	document.addEventListener("showkeyboard", function(){ $("[data-role=footer]").hide();}, false);
	document.addEventListener("hidekeyboard", function(){ $("[data-role=footer]").show();}, false);
	
	// Workaround for buggy header/footer fixed position when virtual keyboard is on/off
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
	
	var Catalogo = getParameterByName('catalogo');
	//alert(Catalogo)
	
	$(document).keydown(function (eventObj){
		getKey(eventObj);
	});
	
	var email = localStorage.getItem("email");
	var ciao = "";
	var ciao1 = "";
	var distanza = "";
	var Categoria="";
	var Provincia="";
	var model = device.model;
	var Badge10 = localStorage.getItem("Badge10");
	var db;
	var dbCreated = false;
	
	//$("#radio").attr("href", "maps:saddr="+ localStorage.getItem("ciao") +","+ localStorage.getItem("ciao1") +"&daddr=Via di Acilia,17,Roma");
	
	var email = localStorage.getItem("email");
	var Badge10 = localStorage.getItem("Badge10");
	
	$("#badde3").attr("data-badge", Badge10);
	
	
	if (Badge10 > 0){
		$('#badde3').removeClass('badge2').addClass('badge1');
		$("#badde3").html('<img id="carro3" src="img/CartW.png" width="20px">');
	}
	
	if((email=="")||(!email)){
		$("#btnprofilo3").attr("href", "#page4");
		$("#btnprofilo3").attr("onclick", "javascript:checklogin();");
	}else{
		$("#btnprofilo3").attr("href", "#mypanel");
		$("#btnprofilo3").attr("onclick", "#");
	}
	
	
    if(connectionStatus=='online'){
		$(".spinner").hide();
		mostrapunti();
		buildcatalogo(Catalogo)
		seleziona();
		
    }
    
    else{
        $('#noconn').show();
        
		var tabella = "<table align='center' border='0' width='100%' height='120px'>";
		tabella = tabella + "<tr><td align='center'><a href='javascript:riparti()' class='btn'><font color='#fff'>Aggiungi</font></a></td></tr>";
		tabella = tabella + "</table>";
		
		$("#noconn").html(tabella);
		
        
    }

}

function buildcatalogo(Catalogo) {
	//alert(Catalogo)
	var tabella = "";
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/fratelli/www/check_Home.asp",
		   contentType: "application/json",
		   data: {categoria:Catalogo},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID==0){
					window.location.href = "menu.html";
				  }
				  else{
				  //tabella = tabella + "<tr><td align='center' width='150px'><img src='http://msop.it/public/fratelli/"+ item.IMG +".png' width='140px' height='140px' class='circolare'></td><td align='left' width='100px'><table align='center' border='0' width='100px'><tr><td align='left'><font color='red' size='3'>"+ item.Nome +", "+ Number(item.Deal).toFixed(2) +"&euro;</font></td></tr><tr><td align='left'>"+ item.Descrizione +"</td></tr></table></td><td align='left'><a id='add"+ item.Cod_Prodotto +"' href='javascript:AggProd("+ item.Cod_Prodotto +")' onclick='#'><div width='28px' class='home1'></div></a><br><a id='meno"+ item.Cod_Prodotto +"' href='javascript:SottProd("+ item.Cod_Prodotto +")' onclick='#'><div width='28px' class='home'></div></a></td></tr>";
				  
				  $("#CatalogoPag").append("<table align='center' border='0' width='320px' height='90px'><tr><td align='center' width='150px'><img src='http://msop.it/public/fratelli/"+ item.IMG +".png' width='140px' height='140px' class='circolare'></td><td align='left' width='100px'><table align='center' border='0' width='100px'><tr><td align='left'><font color='red' size='3'>"+ item.Nome +", "+ Number(item.Deal).toFixed(2) +"&euro;</font></td></tr><tr><td align='left'>"+ item.Descrizione +"</td></tr></table></td><td align='left'><a id='add"+ item.Cod_Prodotto +"' href='#'><div width='28px' class='home1'></div></a><br><a id='meno"+ item.Cod_Prodotto +"' href='#'><div width='28px' class='home'><input type='hidden' id='"+ item.Cod_Prodotto +"' name='"+ item.Cod_Prodotto +"' value='"+ item.Cod_Prodotto +"'></div></a></td></tr></table>");
				  }
				  
				  $(document).on("touchstart", "#add"+ item.Cod_Prodotto +"", function(e){
					localStorage.setItem("pulsante","1")
					e.stopImmediatePropagation();
					e.preventDefault();
					AggProd(item.Cod_Prodotto);
					return false;
				  });
				  
				  $(document).on("touchstart", "#meno"+ item.Cod_Prodotto +"", function(e){
					localStorage.setItem("pulsante","1")
					e.stopImmediatePropagation();
				    e.preventDefault();
					SottProd(item.Cod_Prodotto);
					return false;
				  });
				  
				  // alert(item.ID)
			});
		   
		   tabella = tabella + "";
		   
		   $(".spinner").hide();
		    $("#noconn").hide();
		   
		   //$("#CatalogoPag").html(tabella);
		   
		   setTimeout (function(){
				myScroll.refresh();
			}, 1000);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto 2',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
}

function catalogotouch(Catalogo) {
	
	$(document).on("touchstart", "#add405", function(e){
			localStorage.setItem("pulsante","1")
			e.stopImmediatePropagation();
			e.preventDefault();
			AggProd("405");
			return false;
	});
	
	/*$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/fratelli/www/check_Home.asp",
		   contentType: "application/json",
		   data: {categoria:Catalogo},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.ID==0){
					window.location.href = "menu.html";
				  }
				  else{
				  
					  $.each(result, function(i,item){
				  
					if(document.getElementById(item.Cod_Prodotto).value==item.Cod_Prodotto){
					
						$(document).on("touchstart", "#add"+ item.Cod_Prodotto +"", function(e){
							localStorage.setItem("pulsante","1")
							AggProd(item.Cod_Prodotto);
							e.preventDefault();
							return;
						});
						
						$(document).on("touchstart", "#meno"+ item.Cod_Prodotto +"", function(e){
							localStorage.setItem("pulsante","1")
							SottProd(item.Cod_Prodotto);
							e.preventDefault();
							return;
						});
					}
	  
					});
			
				  }
			});
		   
		   $(".spinner").hide();
		   $("#noconn").hide();
		   
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto 2',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});*/
}

function seleziona() {
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	
}

function AggProd(prod) {
	
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
		return;
	}
	else{
		localStorage.setItem("emailStory", localStorage.getItem("email"));
	}
	
	var aggiornamento = 0;
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	if(localStorage.getItem("pulsante")=="1"){
	
	//alert(document.getElementById(prod).value)
		
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/fratelli/www/check_Prodotto.asp",
		   contentType: "application/json",
		   data: {id:prod},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
			  msg=item.Nome;
			  prezzo=item.Deal;
				 
			});
		   
		   localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))+1)
		   var Badge10 = localStorage.getItem("Badge10");
		   
		   $('#badde3').removeClass('badge2').addClass('badge1');
		   $("#badde3").attr("data-badge", Badge10);
		   $("#badde3").html('<img id="carro3" src="img/CartW.png" width="20px">');
		   
		   $( "#carro3" ).effect( "bounce", "slow" );
		   
		   
		   db.transaction(function (tx) {
						  tx.executeSql('UPDATE Ordine set Qta=Qta+1, Descrizione=Descrizione + '+ prezzo +' where id='+ prod +'', [], function (tx, results) {
										aggiornamento = 1;
										//alert("Prod:" + prod);
										}, null);
						  });
		   
		   if(aggiornamento==0){
		   
			agg2(prod)
			//alert("Prod:" + prod);
		   }
		   else{
			localStorage.setItem("pulsante","0")
		   }
   
		   $(".spinner").hide();
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto 2',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
		
	}
}

function agg2(prod){
	
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
		return;
	}
	else{
		localStorage.setItem("emailStory", localStorage.getItem("email"));
	}
	
	if(localStorage.getItem("pulsante")=="1"){
	
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/fratelli/www/check_Prodotto.asp",
		   contentType: "application/json",
		   data: {id:prod},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  msg=item.Nome;
				  prezzo=item.Deal;
				  
				  });
		   
		   db.transaction(function (tx) {
						  tx.executeSql('CREATE TABLE IF NOT EXISTS Ordine (id unique, IdProdotto, Qta, Descrizione, Nome)');
						  tx.executeSql('INSERT INTO Ordine (id, IdProdotto, Qta, Descrizione, Nome) VALUES ('+ prod +', 1, 1, "'+ prezzo +'", "'+ msg +'")');
						  });
		   $(".spinner").hide();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto 2',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
		
		 localStorage.setItem("pulsante","0")
	}

}


function SottProd(prod) {
	var aggiornamento = 0;
	var azione=0;
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	if(localStorage.getItem("pulsante")=="1"){
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/fratelli/www/check_Prodotto.asp",
		   contentType: "application/json",
		   data: {id:prod},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  msg=item.Nome;
				  prezzo=item.Deal;
				  
				  });
		   var Badge10;
		   
		    //alert("3")
		   
		   db.transaction(function (tx) {
						  tx.executeSql('SELECT * FROM Ordine where id='+ prod +'', [], function (tx, results) {
										var len = results.rows.length, i;
										
										for (i = 0; i < len; i++){
										if (parseInt(results.rows.item(i).Qta) > 1){
										tx.executeSql('UPDATE Ordine set Qta=Qta-1, Descrizione=Descrizione - '+ prezzo +' where id='+ prod +'', [], function (tx, results) {
													  //alert("Prod:" + prod);
													  
													  localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
													  
													  Badge10 = localStorage.getItem("Badge10");
													  $("#badde3").attr("data-badge", Badge10);
													  $("#badde3").html('<img id="carro3" src="img/CartW.png" width="20px">');
													  
													  $( "#carro3" ).effect( "bounce", "slow" );
													  
													  
													  }, null);
										}
										else{
										tx.executeSql('DELETE FROM Ordine where id='+ prod +'', [], function (tx, results) {
													  //alert("DEL");
													  
													  $(".buttonOrdine").hide();
													  
													  localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
													  Badge10 = localStorage.getItem("Badge10");
													  
													  $("#badde3").attr("data-badge", Badge10);
													  $("#badde3").html('<img id="carro3" src="img/CartW.png" width="20px">');
													  
													  $( "#carro3" ).effect( "bounce", "slow" );
													  
													  }, null);
										}
										}
										
										}, null);
						  });
		   $(".spinner").hide();
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto 2',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName@
										);
		   
		   },
		   dataType:"jsonp"});
	
	
	
		localStorage.setItem("pulsante","0")
	}
}


function cambiap() {

    window.location.href = "index.html";

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
    var ref = window.open('http://maps.apple.com/?daddr=via ostiense,38,roma&saddr=via stamira,7 roma', '_blank', 'location=yes');
}

function alertDismissed() {
    $(".spinner").hide();
	
}

function token(){
  navigator.notification.alert(
  'buttone disattivato',  // message
  alertDismissed,         // callback
  'Attenzione',            // title
  'OK'                  // buttonName
 );
}

function verificawifi(){
    $("#verifica").click();
}

function onResume() {
    onDeviceReady();
}

function onConfirm(button) {
    $(".spinner").hide();
    
    $("#mySelect").val("01");
    $("#mySelect").selectmenu("refresh");
    
    if (button==1){
        window.location.href = "Token.html";
    }
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

function rati() {
	$('#rati1').raty({ score: 3 });
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
	
	if((loggato=="")||(!loggato)){
		tblProfile = "<tr><td><a href='javascript:saldopunti()' id='#' data-role='button' class='ui-btn ui-corner-all ui-btn-inline ui-icon-check ui-btn-icon-left' data-theme='b'>Login</a></td></tr>"
	}else{
		
		tblProfile = "<tr><td>SALDO PUNTI: "+ localStorage.getItem("Punti") +"</td></tr><tr><td><a href='javascript:uscire()' id='#' data-role='button' class='ui-btn ui-corner-all ui-btn-inline ui-icon-delete ui-btn-icon-left' data-theme='b'>Logout</a></td></tr>"
		
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

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
						  
						  function riparti(){
							window.location.href = "index.html";
						  }
