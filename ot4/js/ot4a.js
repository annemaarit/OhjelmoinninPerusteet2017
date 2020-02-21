/* file: ot4a.js
   desc: muodostaa bondilauseen käyttäjän antamista syötteistä
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
 
 
//ohjaa bondilauseen muodostamista ja näyttämistä
 function teeBondaus(){
	 //tallentaa käyttäjän antamat nimet muuttujiin
	 var nimi1=document.getElementById("enimi").value;
	 var nimi2=document.getElementById("snimi").value;
	 if (syotteetOk(nimi1,"etunimi",nimi2,"sukunimi")){
		//kytkee bondaa -funktion palauttaman lauseen tuloste -diviin näytettäväksi
		document.getElementById("tuloste").innerHTML=bondaa(nimi1,nimi2);
	 }
	 //document.getElementById("tuloste").innerHTML+=syotteetOk(nimi1,nimi2);
 }
 
 //tarkistaa syötteet (s1=syöte1, l1=label1)
 function syotteetOk(s1,l1,s2,l2){
	 if (s1==""){//jos eka syote puuttuu
		 var viesti="Anna "+l1+"!";
		 window.alert(viesti);
		 enimi.focus();
		 return false;
	 }
	 else if (s2==""){//jos toka syöte puuttuu
		 var viesti="Anna "+l2+"!";
		 window.alert(viesti);
		 snimi.focus();
		 return false;
	 }
	 else {//syötteet ok
		 return true;
	 }
 }
 
 //muodostaa ja palauttaa bondilauseen saamistaan parametreista
 function bondaa(etunimi,sukunimi){
	var lause=etunimi+' '+sukunimi+': "<i>Ravistettuna, ei sekoitettuna.</i>"';
	return lause;

 }