/* file: ot3c.html
   desc: Funktiot lukutaulukon luomiseen
		 ja maksimi, minimi sekä summa -arvojen laskemiseen.
   date: 8.1.2018
   auth: Maarit Parkkonen
 */
 
 var kpl=50;
 var lukutaulukko=[];
 
 //luo lukutaulukon satunnaisluvuista väliltä 1-200
 //tulostaa luvut taulukkomuotoon
 function arvoTaulukko(){
 var luvut=[];	
 var i,j; 
 var tuloste="<table>";
	 
	document.getElementById("maximi").innerHTML="";
	document.getElementById("minimi").innerHTML="";
	document.getElementById("summa").innerHTML="";
	
	 for (i=0;i<kpl;i++){
		 luvut.push(Math.floor((Math.random()*200)+1));
	 }
	
	lukutaulukko=luvut;
	
	//taulukko -tulosteen muodostaminen
	j=0;
	//viisi riviä
	for (i=0;i<5;i++){
		tuloste+="<tr>";
		//kymmenen saraketta
		while (j<((i+1)*10)){
			tuloste+="<td>"+luvut[j]+"</td>";
			j++;
		}
		tuloste+="</tr>";
	}
	tuloste+="</table>";
		
	document.getElementById("taulukko").innerHTML=tuloste;
 }
 
//etsii annetun taulukon maksimiarvon
 function etsiMaximi(){
	var luvut=lukutaulukko;
	var pituus=luvut.length;	
	
	//jos taulukkoa ei ole
	if (pituus==0){
			window.alert("Tyhjä taulukko!");
	}
	else {
		//eka maksimi taulukon eka arvo
		var max=luvut[0];
		for (var i=0;i<pituus;i++){
			//vertaa maksimi arvoa seuraavaan taulukon arvoon
			//jos se suurempi, vaihtaa sen maksimiksi
			if (max<luvut[i]){
				max=luvut[i];
			}
		}
		document.getElementById("maximi").innerHTML="Max: "+max;
		}
 }
 
 //etsii annetun taulukon minimiarvon
 function etsiMinimi(){
	var luvut=lukutaulukko;
	var pituus=luvut.length;	
	
	//jos taulukkoa ei ole
	if (pituus==0){
			window.alert("Tyhjä taulukko!");
	}
	else {
		//eka minimi taulukon eka arvo
		var min=luvut[0];
		//vertaa minimi arvoa seuraavaan taulukon arvoon
	    //jos se pienempi, vaihtaa sen minimiksi
		for (var i=0;i<pituus;i++){
			if (min>luvut[i]){
				min=luvut[i];
			}
		}
		document.getElementById("minimi").innerHTML="Min: "+min;
		}
 }
 
 //laskee taulukon lukujen summan
 function laskeSumma(){
	var luvut=lukutaulukko;
	var pituus=luvut.length;	
	
	//jos taulukkoa ei ole
	if (pituus==0){
			window.alert("Tyhjä taulukko!");
	}
	else {
		var summa=0;
		for (var i=0;i<pituus;i++){
			summa=summa+luvut[i];
		}
		document.getElementById("summa").innerHTML="Summa: "+summa;
		} 
 }