/* file: ot4d.js
   desc: Tekstin salaamiseen ja syötteiden tarkistamiseen tarvittavat funktiot
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
 
 //ohjaa tekstin salauksen ja kirjoitta salatun tekstin sivun diviin
 function salaaTeksti() {
	 //salattava teksti ja salausavain muuttujiin
	 var tekstit=document.getElementById("teksti").value;
	 var avainNro=document.getElementById("salausAvain").value;	 
	 //poistaa edellisen salatun tekstin näkyvistä
	 document.getElementById("tuloste").innerHTML=""; 
	 //tarkistaa onko syötteet ok (voidaanko salaus suorittaa)
	 if (syotteetOk(tekstit,"salattava teksti",avainNro,"salausavain (kokonaisluku)")){
		 //kytkee salauksen tuloksen tuloste -diviin, pyytää salausta salaKirjoita -funktiolta
		 document.getElementById("tuloste").innerHTML=salaKirjoita(tekstit,avainNro);
	 }
 }
 
 //tarkistaa syötteet (s1=syöte1, l1=label1)
 function syotteetOk(s1,l1,s2,l2){
	 if (s1==""){//jos eka syote puuttuu
		 var viesti="Anna "+l1+"!";
		 window.alert(viesti);
		 teksti.focus();
		 return false;
	 }
	 else if ((s2=="")||(isNaN(s2))){//jos toka syöte puuttuu tai ei ole luku
		 var viesti="Anna "+l2+"!";
		 window.alert(viesti);
		 salausAvain.value="";		 
		 salausAvain.focus();
		 return false;
	 }
	 else {//syötteet ok
		 return true;
	 }
 }
 
 //salakirjoittaa salattavan tekstin avaimen mukaisesti siirtämällä 
 //jokaisen tekstin merkin paikkaa avaimen verran eteenpäin unocode -merkistössä
 function salaKirjoita(salattava, avain){
	var salattu="";
	for (var i=0;i<salattava.length;i++){ //merkkien läpikäynti
		var merkkiKoodi=salattava.charCodeAt(i); //merkki numerokoodiksi
		//salaus
		merkkiKoodi=merkkiKoodi+Number(avain); //avaimen lisäys HUOM! Number avaimen eteen tai kirjoittaa arabiaksi..
		salattu+=String.fromCharCode(merkkiKoodi); //numerokoodi merkiksi
	}
 	return salattu
 }