document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.addEventListener("resume", onResume, false);
	
	
	$(document).on("touchstart", "#menuR", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "menu.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#badde4", function(e){
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
		
		$(document).on("touchstart", "#catalogo", function(e){
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
		
		$(document).on("touchstart", "#consegna", function(e){
			compraConsegna(1);
			//initscroll()
		});
		
		$(document).on("touchstart", "#negozio", function(e){
			compraConsegna(2);
			//initscroll()
		});
		
		$(document).on("touchstart", "#cartacc", function(e){
			compraCC();
			//initscroll()
		});
		
		
	
	$(document).on("touchstart", "#chisiamo", function(e){
				   //$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				   window.location.href = "chisiamo.html";
				   });
				   
		$(document).on("touchstart", "#tel", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "tel:+393313870177";
		});
		
		$(document).on("touchstart", "#recensione", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			window.location.href = "rating.html";
			//initscroll()
		});
		
		$(document).on("touchstart", "#uscire", function(e){
			//$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			uscire()
		});
		
		$(document).on("touchstart", "#entrare", function(e){
					   //$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
					   saldopunti()
		})
		
	
	
	$('#OraConsegna').focus(function(){
		myScroll.scrollToElement("#OraConsegna", "1s");
	});
	
	$('#Note').focus(function(){
		myScroll.scrollToElement("#Note", "1s");
	});
	
	$('#NomeRegalo').focus(function(){
		myScroll.scrollToElement("#NomeRegalo", "1s");
	});
	
	$('#Indirizzo').focus(function(){
		myScroll.scrollToElement("#Indirizzo", "1s");
	});
	
	$('#Telefono').focus(function(){
		myScroll.scrollToElement("#Telefono", "1s");
	});
	
	$('#Telefono').focus(function(){
		myScroll.scrollToElement("#Telefono", "1s");
	});
	
	last_click_time = new Date().getTime();
	
	document.addEventListener('click', function (e) {
							  
							  click_time = e['timeStamp'];
							  
							  if (click_time && (click_time - last_click_time) < 1000) { e.stopImmediatePropagation();
							  
							  e.preventDefault();
							  
							  return false;
							  
							  }
							  
							  last_click_time = click_time;
							  
							  }, true);
	

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
		//setTimeout( function() {_
		//window.scrollTo( $.mobile.window.scrollLeft(), $.mobile.window.scrollTop() );
		//		   }, 20 );
		});
	
	
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

	
    if(connectionStatus=='online'){
		$(".spinner").hide();
		
		seleziona();
		
		mostrapunti()
			
		mostraOrario()
    }
    
    else{
        $('#noconn').show();
        
		var tabella = "<table align='center' border='0' width='100%' height='120px'>";
		tabella = tabella + "<tr><td align='center'><a href='javascript:riparti()' class='btn'><font color='#fff'>Aggiungi</font></a></td></tr>";
		tabella = tabella + "</table>";
		
		$("#noconn").html(tabella);
		

    }

}

function someFunctionOnDblClick(){
	e.preventDefault();
}

function seleziona() {
	$('#contenutoCart').html("")
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	
	var Badge10 = localStorage.getItem("Badge10");
	$("#badde3").attr("data-badge", Badge10);
	var TOT = localStorage.getItem("TOT");
	
	//$('#contenutoCart').append('');
	
	
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 var Punita;
					 //alert(len);
					 
					 for (i = 0; i < len; i++){
					 
					 msg = results.rows.item(i).IdProdotto + "," + results.rows.item(i).Qta + "," + results.rows.item(i).Descrizione + "," + results.rows.item(i).Nome;
					 
					 Punita = (Number(results.rows.item(i).Descrizione).toFixed(2) / Number(results.rows.item(i).Qta).toFixed(2))
					 
					 var n = results.rows.item(i).Nome.indexOf("Punti");
					 
					 //alert(n)
					 
					 if (n != -1){
						
						$('#contenutoCart').append('<table width="100%"><tr><td width="35%" align="center"><font size="2">'+ results.rows.item(i).Nome +'</font></td><td width="25%" align="center"><font size="2">'+ results.rows.item(i).Qta +'<font color="#000" size="1"> x('+ Number(Punita).toFixed(2) +'&euro;)</font></td><td width="20%"><font size="2">'+ Number(results.rows.item(i).Descrizione).toFixed(2) +'&euro;</font></td><td width="10%" align="center"></td><td width="10%" align="center"></td></tr></table>');
					 }
					 else
					 {
						//landmark = landmark + '<tr><td><font size="3">'+ results.rows.item(i).Nome +'</font></td><td><font size="3">'+ results.rows.item(i).Qta +'<font color="#000" size="1"> x('+ Number(Punita).toFixed(2) +'&euro;)</font></td><td><font size="3">'+ Number(results.rows.item(i).Descrizione).toFixed(2) +'&euro;</font></td><td align="center"><a href="javascript:SottProd('+ parseInt(results.rows.item(i).id) +')"><div width="28px" class="home"></div></a></td><td align="center"><a href="javascript:AggProd('+ parseInt(results.rows.item(i).id) +')"><div width="28px" class="home1"></div></td></tr>';
						
						//landmark = landmark + '<tr><td><font size="3">'+ results.rows.item(i).Nome +'</font></td><td><font size="3">'+ results.rows.item(i).Qta +'<font color="#000" size="1"> x('+ Number(Punita).toFixed(2) +'&euro;)</font></td><td><font size="3">'+ Number(results.rows.item(i).Descrizione).toFixed(2) +'&euro;</font></td><td align="center"><a id="meno'+ parseInt(results.rows.item(i).id) +'" href="javascript:SottProd('+ parseInt(results.rows.item(i).id) +')"><div width="28px" class="home"></div></a></td><td align="center"><a id="add'+ parseInt(results.rows.item(i).id) +'" href="javascript:AggProd('+ parseInt(results.rows.item(i).id) +')"><div width="28px" class="home1"></div></td></tr>';
						 
						$("#contenutoCart").append("<table width='100%'><tr><td width='30%' width='35%' align='center'><font size='2'>"+ results.rows.item(i).Nome +"</font></td><td width='25%' align='center'><font size='2'>"+ results.rows.item(i).Qta +"<font color='#000' size='1'> x("+ Number(Punita).toFixed(2) +"&euro;)</font></td><td width='20%'><font size='2'>"+ Number(results.rows.item(i).Descrizione).toFixed(2) +"&euro;</font></td><td width='10%' align='center'><a id='meno"+ results.rows.item(i).id +"' href='#'><div width='28px' class='home'></div></a></td><td width='10%' align='center'><a id='add"+ results.rows.item(i).id +"' href='#'><div width='28px' class='home1'></div></td></tr></table>");
					 
						//alert("add"+ results.rows.item(i).id +"")
					 
						ciccio(results.rows.item(i).id);
						
					 }
					 
					 
					 }
					 
					 //$('#contenutoCart').append('</tbody></table>');
					 //$('#contenutoCart').html(landmark);
					 
					 
					 selPrezzo();
					 
					 selPunti();
					 
					 //selbtn()

					 }, null);
				   });
}

function ciccio(id) {
	
	$(document).on("touchstart", "#add"+ id +"", function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		AggProd(id);
	});
	
	$(document).on("touchstart", "#meno"+ id +"", function(e){
		e.stopImmediatePropagation();
		e.preventDefault();
		SottProd(id);
	});

}

function selbtn() {
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	
	
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 var Punita;
					 
					 for (i = 0; i < len; i++){
					 
						$(document).on("touchstart", "#add"+ parseInt(results.rows.item(i).id) +"", function(e){
							AggProd(parseInt(results.rows.item(i).id));
						});
						
						$(document).on("touchstart", "#meno"+ parseInt(results.rows.item(i).id) +"", function(e){
							SottProd(parseInt(results.rows.item(i).id));
						});
					 
					 }

					 }, null);
				   });
}

function selPrezzo(){
	db.transaction(function (tx) {
       tx.executeSql('SELECT SUM(Descrizione) as TOT FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 
					 for (i = 0; i < len; i++){
						$('#TOTPrezzo').html(Number(results.rows.item(i).TOT).toFixed(2));
						document.getElementById("totordine").value = Number(results.rows.item(i).TOT).toFixed(2);
					 }
					 
					 
					 }, null);
				   });
	
	$("#noconn").hide();
}

function selPunti(){
	document.getElementById("totpunti").value = localStorage.getItem("Punti");
}

function dlt(){
	db.transaction(function (tx) {
				   tx.executeSql('DELETE FROM Ordine', [], function (tx, results) {
								 }, null);
				   });
	
	
	localStorage.setItem("Badge10", 0)
	
	Badge10 = localStorage.getItem("Badge10");
	

	$('#badde3').removeClass('badge3').addClass('badge2');
	
	
	localStorage.setItem("TOT", 0)
	
	seleziona();
}

function dlt2(){
	db.transaction(function (tx) {
				   tx.executeSql('DELETE FROM Ordine', [], function (tx, results) {
								 }, null);
				   });
	
	
	localStorage.setItem("Badge10", 0)
	
	Badge10 = localStorage.getItem("Badge10");
	
	
	$('#badde3').removeClass('badge3').addClass('badge2');
	
	
	localStorage.setItem("TOT", 0)
	
	seleziona();
}


function AggProd(prod) {
	var aggiornamento = 0;
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.msop.it/artpizza/www/check_Prodotto.asp",
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
						  tx.executeSql('UPDATE Ordine set Qta=Qta+1, Descrizione=Descrizione + '+ prezzo +' where id='+ prod +'', [], function (tx, results) {
										aggiornamento = 1;
										//alert("Prod:" + prod);
										}, null);
						  });
		   
		   $(".spinner").hide();
		   
		   localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))+1)
		   var Badge10 = localStorage.getItem("Badge10");
		   
		   
		   $('#badde3').removeClass('badge2').addClass('badge1');
		   $("#badde3").attr("data-badge", Badge10);
		   
		   $( "#carro" ).effect( "bounce", "slow" );
		   
		   
		   if(aggiornamento==0){
		   agg2(prod)
		   //alert("Prod:" + prod);
		   }
		   
		   seleziona();
		   
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

function agg2(prod){
	db = window.openDatabase('mydb', '1.0', 'TestDB', 2 * 1024 * 1024);
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/artpizza/www/check_Prodotto.asp",
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
	
}

function SottProd(prod) {
	var aggiornamento = 0;
	var azione=0;
	var msg;
	var prezzo;
	var test;
	var P1 = '110';
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/artpizza/www/check_Prodotto.asp",
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
		   
		   $(".spinner").hide();
		   
		   db.transaction(function (tx) {
						  tx.executeSql('SELECT * FROM Ordine where id='+ prod +'', [], function (tx, results) {
										var len = results.rows.length, i;
										
										for (i = 0; i < len; i++){
										if (parseInt(results.rows.item(i).Qta) > 1){
										tx.executeSql('UPDATE Ordine set Qta=Qta-1, Descrizione=Descrizione - '+ prezzo +' where id='+ prod +'', [], function (tx, results) {
													  //alert("UPD");
													  
													  localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
													  
													  Badge10 = localStorage.getItem("Badge10");
													  
													  $("#badde3").attr("data-badge", Badge10);
													  $( "#carro" ).effect( "bounce", "slow" );
													  
													  }, null);
										}
										else{
										tx.executeSql('DELETE FROM Ordine where id='+ prod +'', [], function (tx, results) {
													  //alert("DEL");
													  $(".buttonOrdine").hide();
													  
													  localStorage.setItem("Badge10", parseInt(localStorage.getItem("Badge10"))-1)
													  Badge10 = localStorage.getItem("Badge10");
													  
													  $("#badde3").attr("data-badge", Badge10);
													  $( "#carro" ).effect( "bounce", "slow" );
													  
													  }, null);
										}
										}
										
										}, null);
						  });
		   seleziona();
		   
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

function compraConsegna(metodo){
	var loggato = localStorage.getItem("loginvera")
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
	}else{
		
		compra(metodo)
	}
	
}

function compraCC(){
	var loggato = localStorage.getItem("loginvera")
	if((loggato=="")||(!loggato)){
		window.location.href = "Login.html";
	}else{
		compraCarta()
	}
	
}


function compra(metodo) {
	var metodopp = "Cash";
	
	if(metodo==1){
		metodopp = "Cash";
	}
	else{
		metodopp = "Take";
	}
	
	var num1 = Math.floor((Math.random() * 20) + 1);
	var num2 = Math.floor((Math.random() * 20) + 1);
	var num3 = Math.floor((Math.random() * 20) + 1);
	var num4 = Math.floor((Math.random() * 20) + 1);
	var num5 = Math.floor((Math.random() * 20) + 1);
	var num6 = Math.floor((Math.random() * 20) + 1);
	
	transazioneprodotto = num1+""+num2+""+num3+""+num4+""+num5+""+num6;
	
	var item_number= transazioneprodotto;
	//prendere il nome prodotto e il prezzo con WS per passare al pagina di pagamento
	var nome = "";
	var email = localStorage.getItem("email");
	var EmailEsercente = "";
	
	var NomeRegalo = self.document.formia9.NomeRegalo.value;
	var Indirizzo = self.document.formia9.Indirizzo.value;
	//var EmailRegalo = self.document.formia9.EmailRegalo.value;
	var Telefono = self.document.formia9.Telefono.value;
	var amount = self.document.formia9.totordine.value;
	var amountPunti = self.document.formia9.totpunti.value;
	var OraConsegna = self.document.formia9.OraConsegna.value;
	var Note = self.document.formia9.Note.value;
	
	if ((email == "")||(!email)) {
		navigator.notification.alert(
									 'Devi prima effettuare il Login',  // message
									 alertDismissed,         // callback
									 'Login',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	if (NomeRegalo == "") {
		navigator.notification.alert(
									 'inserire Nome Destinario',  // message
									 alertDismissed,         // callback
									 'Nome Destinatario',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	if (Indirizzo == "") {
		navigator.notification.alert(
									 'inserire un indirizzo corretto',  // message
									 alertDismissed,         // callback
									 'Indirizzo',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	
	if (Telefono == "") {
		navigator.notification.alert(
									 'inserire un telefono valido',  // message
									 alertDismissed,         // callback
									 'Telefono',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	if (amount == 0) {
		navigator.notification.alert(
									 'Non hai prodotti nel carrello',  // message
									 alertDismissed,         // callback
									 'Ordine',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	if (OraConsegna == "") {
		navigator.notification.alert(
									 'Non hai inserito un orario di consegna desiderata',  // message
									 alertDismissed,         // callback
									 'Ora Consegna',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	//alert(amount)
	
	var ordinazione="";
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 var Punita;
					 //alert(len);
					 
					 for (i = 0; i < len; i++){
					 
					 msg = results.rows.item(i).IdProdotto + "," + results.rows.item(i).Qta + "," + results.rows.item(i).Descrizione + "," + results.rows.item(i).Nome;
					 
					 Punita = (Number(results.rows.item(i).Descrizione).toFixed(2) / Number(results.rows.item(i).Qta).toFixed(2))
					 
					 ordinazione = ordinazione + ' ' + results.rows.item(i).Qta +' '+ results.rows.item(i).Nome +', ';
					 
					 }
					 
					 $(".spinner").show();
					 $.ajax({
							type:"GET",
							url:"http://msop.it/artpizza/www/Check_TransactionV2.asp",
							contentType: "application/json",
							data: {email:email,id_prodotto:transazioneprodotto,qta:1,tot:amount,totPunti:amountPunti,transazionemia:transazioneprodotto,NomeProdotto:"Ordine App",EmailEsercente:"salvatore.bruni@gmail.com",idTransazione:metodopp,Ordine:ordinazione,Indirizzo:Indirizzo,Telefono:Telefono,OraConsegna:OraConsegna,Note:Note},
							timeout: 7000,
							jsonp: 'callback',
							crossDomain: true,
							success:function(result){
							
							$.each(result, function(i,item){
								   if (item.Token == "1024"){
								   
								     navigator.notification.alert(
										'Ordine eseguito correttamente',
										 alertDismissed,         // callback
										'Grazie',            // title
										'Done'                  // buttonName
									);
								   
								   localStorage.setItem("Punti", item.Punti);
								   
								   dlt2();
								   
								   //window.location.href = "Profilo.html";
								   
								   }
								   else{
								   navigator.notification.alert(
																'Possibile errore di rete, riprova tra qualche minuto',  // message
																alertDismissed,         // callback
																'Attenzione',            // title
																'Done'                  // buttonName
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
														 'Done'                  // buttonName
														 );
							
							},
							dataType:"jsonp"});
					 
					 }, null);
				   
				   });
				  
		
}

function compraCarta() {
	
	
	var num1 = Math.floor((Math.random() * 20) + 1);
	var num2 = Math.floor((Math.random() * 20) + 1);
	var num3 = Math.floor((Math.random() * 20) + 1);
	var num4 = Math.floor((Math.random() * 20) + 1);
	var num5 = Math.floor((Math.random() * 20) + 1);
	var num6 = Math.floor((Math.random() * 20) + 1);
	var num7 = Math.floor((Math.random() * 20) + 1);
	var num8 = Math.floor((Math.random() * 20) + 1);
	
	transazioneprodotto = num1+""+num2+""+num3+""+num4+""+num5+""+num6+""+num7+""+num8;
	
	var item_number= transazioneprodotto;
	//prendere il nome prodotto e il prezzo con WS per passare al pagina di pagamento
	var nome = "";
	var email = localStorage.getItem("email");
	var EmailEsercente = "";
	
	var NomeRegalo = self.document.formia9.NomeRegalo.value;
	var Indirizzo = self.document.formia9.Indirizzo.value;
	//var EmailRegalo = self.document.formia9.EmailRegalo.value;
	var Telefono = self.document.formia9.Telefono.value;
	var amount = self.document.formia9.totordine.value;
	var amountPunti = self.document.formia9.totpunti.value;
	var OraConsegna = self.document.formia9.OraConsegna.value;
	var Note = self.document.formia9.Note.value;
	
	
	if ((email == "")||(!email)) {
		navigator.notification.alert(
									 'Devi prima effettuare il Login',  // message
									 alertDismissed,         // callback
									 'Login',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	if (NomeRegalo == "") {
		navigator.notification.alert(
									 'inserire Nome Destinario',  // message
									 alertDismissed,         // callback
									 'Nome Destinatario',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	if (Indirizzo == "") {
		navigator.notification.alert(
									 'inserire un indirizzo corretto',  // message
									 alertDismissed,         // callback
									 'Indirizzo',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	
	if (Telefono == "") {
		navigator.notification.alert(
									 'inserire un telefono valido',  // message
									 alertDismissed,         // callback
									 'Telefono',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	if (amount == 0) {
		navigator.notification.alert(
									 'Non hai prodotti nel carrello',  // message
									 alertDismissed,         // callback
									 'Ordine',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	if (OraConsegna == "") {
		navigator.notification.alert(
									 'Non hai inserito un orario di consegna desiderata',  // message
									 alertDismissed,         // callback
									 'Ora Consegna',            // title
									 'OK'                  // buttonName@
									 );
		return;
	}
	
	
	var ordinazione="";
	db.transaction(function (tx) {
       tx.executeSql('SELECT * FROM Ordine', [], function (tx, results) {
					 var len = results.rows.length, i;
					 var Punita;
					 //alert(len);
					 
					 for (i = 0; i < len; i++){
					 
					 msg = results.rows.item(i).IdProdotto + "," + results.rows.item(i).Qta + "," + results.rows.item(i).Descrizione + "," + results.rows.item(i).Nome;
					 
					 Punita = (Number(results.rows.item(i).Descrizione).toFixed(2) / Number(results.rows.item(i).Qta).toFixed(2))
					 
					 ordinazione = ordinazione + ' ' + results.rows.item(i).Qta +' '+ results.rows.item(i).Nome +', ';
					 
					 }
					 
					 $(".spinner").show();
					 $.ajax({
							type:"GET",
							url:"http://msop.it/artpizza/www/Check_TransactionV2.asp",
							contentType: "application/json",
							data: {email:email,id_prodotto:transazioneprodotto,qta:1,tot:amount,totPunti:amountPunti,transazionemia:transazioneprodotto,NomeProdotto:"Ordine App",EmailEsercente:"salvatore.bruni@gmail.com",idTransazione:"CC",Ordine:ordinazione,Indirizzo:Indirizzo,Telefono:Telefono,OraConsegna:OraConsegna,Note:Note},
							timeout: 7000,
							jsonp: 'callback',
							crossDomain: true,
							success:function(result){
							
							$.each(result, function(i,item){
								   if (item.Token == "1024"){
								   
								   //localStorage.setItem("Punti", item.Punti);
								   dlt2()
								   
								   var ref = window.open('http://msop.it/artpizza/wbspaypal.asp?Transprodotto='+ transazioneprodotto +'', '_blank', 'location=no');
								   
								   ref.addEventListener('loadstop', function(event) { if (event.url.match("mobile/close")) { ref.close(); } });
								   
								   }
								   else{
								   navigator.notification.alert(
																'Possibile errore di rete, riprova tra qualche minuto',  // message
																alertDismissed,         // callback
																'Attenzione',            // title
																'Done'                  // buttonName
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
														 'Done'                  // buttonName
														 );
							
							},
							dataType:"jsonp"});
					 
					 }, null);
				   
				   });
	
		
}

function vendoPayPal(idProdotto,nome,amount,transazioneprodotto,item_number,email,EmailEsercente,NomeRegalo,TuoRegalo,EmailRegalo,Messaggio){
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://www.mistertod.it/www/Check_Transaction.asp",
		   contentType: "application/json",
		   data: {email:email,id_prodotto:idProdotto,qta:1,tot:amount.replace(".",","),trans:transazioneprodotto,NomeProdotto:nome,EmailEsercente:EmailEsercente,NomeRegalo:NomeRegalo,TuoRegalo:TuoRegalo,EmailRegalo:EmailRegalo,Messaggio:Messaggio},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  if (item.Token == "1024"){
				  var ref = window.open('http://www.mistertod.it/wbspaypal.asp?Transprodotto='+ transazioneprodotto +'&Nome='+ nome +'', '_blank', 'location=no');
				  
				  //var ref = window.open(encodeURI(url), '_blank', options);
				  ref.addEventListener('loadstop', function(event) { if (event.url.match("mobile/close")) { ref.close(); } });


				  }
				  else{
				  navigator.notification.alert(
											   'Possibile errore di rete, riprova tra qualche minuto',  // message
											   alertDismissed,         // callback
											   'Attenzione',            // title
											   'Done'                  // buttonName
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
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
}

function saldopunti(){
	var loggato = localStorage.getItem("loginvera")
	
	
	if((loggato=="")||(!loggato)){
		//alert("No")
		window.location.href = "Login.html";
	}else{

		
		var tblProfile = "<tr><td><b>PROFILO</b></td></tr><tr><td>" + localStorage.getItem("Nome") +"&nbsp;"+ localStorage.getItem("Cognome") +"</td></tr><tr><td>" + localStorage.getItem("Indirizzo") + "</td></tr><tr><td>&nbsp;&nbsp;</td></tr><tr><td>SALDO PUNTI: "+ localStorage.getItem("Punti") +"</td></tr>"
		
		$("#profile").html(tblProfile)
		$("#profile").show()
		
	}

}

function mostrapunti(){
	var loggato = localStorage.getItem("loginvera")
	var tblProfile;
	
	if((loggato=="")||(!loggato)){
		tblProfile = "<tr><td><a href='#' id='entrare' data-role='button' class='ui-btn ui-corner-all ui-btn-inline ui-icon-check ui-btn-icon-left' data-theme='b'>Login</a></td></tr>"
	}else{
		
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://msop.it/artpizza/www/check_login_punti.asp",
			   contentType: "application/json",
			   data: {email:localStorage.getItem("email")},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  //alert(item.Token);
					  
					  if (item.Token == 1024){

						localStorage.setItem("Punti", Number(item.Punti).toFixed(2));

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
								 'Done'                  // buttonName
				);
	
			   },
			   dataType:"jsonp"});


		tblProfile = "<tr><td>SALDO PUNTI: "+ Number(localStorage.getItem("Punti")).toFixed(2) +"</td></tr><tr><td><a href='#' id='uscire' data-role='button' class='ui-btn ui-corner-all ui-btn-inline ui-icon-delete ui-btn-icon-left' data-theme='b'>Logout</a></td></tr>"
		
		document.getElementById("NomeRegalo").value = localStorage.getItem("Nome") + " " + localStorage.getItem("Cognome")
		document.getElementById("Indirizzo").value = localStorage.getItem("Indirizzo") + "," + localStorage.getItem("Civico")
		//document.getElementById("EmailRegalo").value = localStorage.getItem("email")
		document.getElementById("Telefono").value = localStorage.getItem("Telefono")
		
	}
	
	$("#profile").html(tblProfile)
	$("#profile").show()
	
}


function mostraOrario(){
	
		$(".spinner").show();
		$.ajax({
			   type:"GET",
			   url:"http://msop.it/artpizza/www/Check_Orario.asp",
			   contentType: "application/json",
			   //data: {email:localStorage.getItem("email")},
			   timeout: 7000,
			   jsonp: 'callback',
			   crossDomain: true,
			   success:function(result){
			   
			   $.each(result, function(i,item){
					  
					  if (item.Token == 1024){

						$("#oraConsegna2").show()
						$("#oraConsegna2").html("Giorni:" + item.Giorno + " - Nelle Ore:" + item.Ora)
						$("#zoneServite").html("Zone Servite:" + item.Zona)
					  }
				});
			   
			   $(".spinner").hide();
		
			   },
			   error: function(){
			   $(".spinner").hide();
	
			         // buttonName
				},
			   dataType:"jsonp"});
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

	function gofacebook(){
	var ref = window.open('https://m.facebook.com/artepizzaroma/?fref=ts', '_system', 'location=no');
}

function gomappa(){
	var addressLongLat = '41.854282,12.567155';
	
	window.open("http://maps.apple.com/?q="+addressLongLat, '_blank');
	//window.location.href = "http://maps.apple.com/?q="+addressLongLat
	//window.open("http://maps.google.com/?q="+addressLongLat, '_system');
	
	//var ref = window.open('http://maps.apple.com/?q=Via di Acilia, 7', '_system');
	
}

function riparti(){
	
	window.location.href = "index.html";
	
}

