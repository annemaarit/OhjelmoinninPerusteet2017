/* file: ot3e.js
   desc: Säiliölaiva -ohjelman funktiot, joilla:
		 - alustetaan ja muodostetaan laivataulukko 
		 - tarkistetaan ja merkitään valituiksi lähde- ja kohdetankit
		 - suoritetaan öljyn siirto tankista toiseen
		 
   date: 9.1.2018
   auth: Maarit Parkkonen
 */
 
 //vakiot
 var rivit=4;
 var sarakkeet=10;
 var kpl=rivit*sarakkeet;
 var alkuOljy=10000;
 var taysi=20000; 
 
 //globaalit muuttujat
 var tankit=[];
 var valittuLahde=""; //valittuna oleva lähdetankki
 var valittuKohde=""; //valittuna oleva kohdetankki

 //alustaa ja muodostaa laivataulukon
 function teeLaiva(){	
 var i,j;
 //tulostusmuuttuja
 var laiva="<table><tr><th></th>";
	
	 //sarakeotsikot
	 for (i=1;i<=sarakkeet;i++){
		 laiva+="<th>S"+i+"</th>";
	 }
	 laiva+="</tr>";
	 
	 //jos tankit on tyhjät (sivun lataus)
	 if (tankit.length==0){
		//täytetään tankit
		for (i=0;i<kpl;i++){
			tankit.push(alkuOljy);
		}
	 }

	//tankkien muodostaminen eli taulukon solut
	j=0;
	//rivit
	for (i=0;i<rivit;i++){
		laiva+="<tr><th>R"+(i+1)+"</th>";
		//sarakkeet
		while (j<((i+1)*sarakkeet)){
			//merkitään soluille tunnistusId ja perus -luokka arvo
			laiva+='<td id="solu'+i+j+'" class="perus">'+tankit[j]+'</td>';
			/*solutunnukset: solu00-09
							 solu110-119
							 solu220-229
							 solu330-339*/
			j++;
		}
		laiva+="</tr>";
	}
	laiva+="</table>";
	
	//tulostetaan muodostettu laivataulukko tankkilaiva -diviin
	document.getElementById("tankkilaiva").innerHTML=laiva;
	//kohdistin öljymäärä kenttään
	maara.focus();	
	//testaaGlobaalit();
 }
 
 //valitun lähdetankin tarkistus ja valinnan merkintä
function lahdeTankki(){
	//valinnat muuttujiin
	var s=document.getElementById("sarakeL").value;
	var r=document.getElementById("riviL").value;	
	//solun tunnistusId
	var nro="solu"+r+s;
	//solun taulukkonumero
	var nroLahde=Number(nro.slice(5));
	
	//virhetilanteiden tarkistus
	if (nro==valittuKohde){
		window.alert("Kohde- ja lähdetankki eivät voi olla samoja");	
	}
	else if (Number(tankit[nroLahde])==0){
		window.alert("Tankki on tyhjä, valitse toinen tankki");						
	}//valinnat ok, merkitään valituksi
	else {
		//jos olemassa aiempi valinta
		if (valittuLahde!=""){
			//poistetaan aiemman solun valinta näkyvistä
			document.getElementById(valittuLahde).className="perus";
		}
		//muutetaan uusi solu valituksi
		document.getElementById(nro).className="lahde";
		//tallennetaan globaaliin muuttujaan
		valittuLahde=nro;
	}
	//document.getElementById("testi").innerHTML="Solussa: "+nroLahde+"<br>Öljyä: "+tankit[nroLahde];
	//testaaGlobaalit();
}

 //valitun kohdetankin tarkistus ja valinnan merkintä
function kohdeTankki(){
	//valinnat muuttujiin	
	var s=document.getElementById("sarakeK").value;
	var r=document.getElementById("riviK").value;
	//solun tunnistusId	
	var nro="solu"+r+s;
	//solun taulukkonumero
	var nroKohde=Number(nro.slice(5));

	//virhetilanteiden tarkistus
	if (nro==valittuLahde){
		window.alert("Kohde- ja lähdetankki eivät voi olla samoja");	
	}
	else if (Number(tankit[nroKohde])==taysi){
		window.alert("Tankki on täysi, valitse toinen tankki");			
	}
	else {	//valinnat ok, merkitään valituksi
		if (valittuKohde!=""){
			//poistetaan aiemman solun valinta näkyvistä
			document.getElementById(valittuKohde).className="perus";
		}
		//muutetaan uusi solu valituksi
		document.getElementById(nro).className="kohde";
		//tallennetaan globaaliin muuttujaan
		valittuKohde=nro;
	}
	//document.getElementById("testi").innerHTML="Solussa: "+nroKohde+"<br>Öljyä: "+tankit[nroKohde];
	//testaaGlobaalit();
}

//tarkistaa onko siirto mahdollista ja tekee öljyn siirron
function siirraOljy(){
	//öljynmäärä muuttujaan
	var siirtoTonnit=document.getElementById("maara").value;
	
	//tarkistaa onko määrä luku
	if (isNaN(siirtoTonnit)){ //ei ole, virheilmoitus
		window.alert("Anna siirtomäärä tonneina!");
		//tyhjentää maara -kentän
		maara.value = "";
		//kursori maara -kenttään
		maara.focus();	
	}
	else{ //määrä ok
		if (valittuLahde==""){ //lähdettä ei ole valittu
			window.alert("Valitse lähdetankki!");
		}
		else if (valittuKohde==""){ //kohdetta ei ole valittu
			window.alert("Valitse kohdetankki!");
		}
		else {
			//laskentamuuttujat
			var nroLahde=Number(valittuLahde.slice(5)); //lähdetankin taulukkonumero
			var nroKohde=Number(valittuKohde.slice(5)); //kohdetankin taulukkonumero
			var kohdeTonnit=Number(tankit[nroKohde]);	//kohdetankin öljymäärä
			var lahdeTonnit=Number(tankit[nroLahde]);	//lähdetankin öljymäärä
			siirtoTonnit=Number(siirtoTonnit);			//siirrettävä öljymäärä
			if (lahdeTonnit<siirtoTonnit){ //lähdetankki ei riitä
				window.alert("Lähdetankissa ei ole tarpeeksi öljyä!");
			}
			else if ((kohdeTonnit+siirtoTonnit)>taysi){ //kohdetankki liian pieni
				window.alert("Siirtomäärä on liian iso kohdetankille!");
			}
			else{ //tankkien tilanne ok, toteutetaan öljyn siirto
				tankit[nroKohde]=kohdeTonnit+siirtoTonnit;
				tankit[nroLahde]=lahdeTonnit-siirtoTonnit;
				teeLaiva(); //uudistetaan laivataulukko
				document.getElementById(valittuKohde).className="kohde"; //merkitään valinnat laivataulukkoon
				document.getElementById(valittuLahde).className="lahde";
				//document.getElementById("testi").innerHTML="kohdeNro"+nroKohde+": "+tankit[nroKohde]+"<br>lähdeNro"+nroLahde+": "+tankit[nroLahde]+"<br>siirtotonnit: "+siirtoTonnit;
			}
		}
	}
	//testaaGlobaalit();
}

//toimii mutta ei käytössä
function nollaaValinnat(){
	document.getElementById(valittuKohde).className="perus";	
	document.getElementById(valittuLahde).className="perus";	
	valittuLahde="";
	valittuKohde="";
	//tyhjentää siirtomäärä -kentän
    document.getElementById("maara").value = "";
	//kursori siirtomäärä -kenttään
	document.getElementById("maara").focus();
	//testaaGlobaalit();
}

/*function testaaGlobaalit(){
	document.getElementById("testi").innerHTML+="<br>Valittuna lähdetankki: "+valittuLahde+"<br>Valittuna kohdetankki: "+valittuKohde+"<br>";
}*/

