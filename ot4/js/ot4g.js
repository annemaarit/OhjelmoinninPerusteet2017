/* file: ot4g.js
   desc: palkanlaskenta -ohjelman funktiot:
   - uuden työntekijän lisäys
   - syötteiden tarkistus
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
var tyontekija = new Object;

// ohjaa uuden työntekijän lisäyksen ja laskettaa palkan
 function palkanLaskenta(){
	 //käyttäjän antamat tiedot muuttujiin
	var p=document.getElementById("hpalkka").value;
	var h=document.getElementById("tyotunnit").value;
	//edellisen tulosteen tyhjäys
	document.getElementById("tuloste").innerHTML="";
	//syötteiden tarkistus
	if (onkoNumeroOk(p,"Tuntipalkka")){ 
		if(onkoNumeroOk(h,"Työtunnit")){
			//syötteet ok, uuden työntekijän luonti ja palkan laskenta funktioiden kutsu
			uusiTyontekija(p,h);
			document.getElementById("tuloste").innerHTML="Palkka on: "+ tyontekija.laskePalkka()+"€";			
		}
		else{ //työtunneissa virhe
			tyotunnit.value="";
			tyotunnit.focus();				
		}
	}
	else { //tuntipalkassa virhe
		hpalkka.value="";
		hpalkka.focus();		
	}
 }
 
//uuden työntekijä -olion luonti
 function uusiTyontekija(tuntipalkka,tunnit) {
	 //olion tuntipalkka ja työtunnit
	 tyontekija.tuntipalkka=tuntipalkka;
	 tyontekija.tunnit=tunnit;
	 //laskee ja palauttaa palkan
	 tyontekija.laskePalkka= function(){
		return this.tuntipalkka*this.tunnit;
	 };
 }
 
 //tarkistaa numerosyötteen oikeellisuuden
 function onkoNumeroOk(nro,nimi){
	 var virhe="";
	 //onko virheitä
	 if (nro==""){ //tyhjä
		 virhe=nimi+" puuttuu!";
	 }
	 else if (isNaN(nro)){ //ei luku
		 virhe=nimi+" ei ole luku. Tarkista se.";
	 }
	 
	 
	 if (virhe==""){ //ei virheitä
		 return true;
	 }
	 else { //virheellinen syöte
		 window.alert("Virhe: "+virhe);
		 return false;
	 }
 }



 