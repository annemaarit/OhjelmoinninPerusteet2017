/* file: ot4e.js
   desc: Postinumeron oikeellisuuden tarkistamiseen 
         tarvittavat funktiot
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
 
 var kpl=5; //oikea postinumeron numeroiden määrä
 
 //ohjaa postinumeron tarkistusta ja näyttää tuloksen
 function onkoPostinumeroOk(){
	 //käyttäjän antama numero muuttujaan
	 var nro=document.getElementById("postinumero").value;

	 //kutsuu tarkastusfunktiota tarkistamaan oikeellisuuden
	 if (tarkastaPostiNumero(nro)){ //jos oikein
		 //kirjoittaa tuloste diviin ilmoituksen
		 document.getElementById("tuloste").innerHTML="Postinumero on oikein";
	 }
	 else { //jos väärin
		 //tyhjää ja kohdentaa postinumerokenttään
		 postinumero.value="";		 
		 postinumero.focus();
		 //tyhjentää vanhan ilmoituksen
		 document.getElementById("tuloste").innerHTML="";		 
	 }
 }
 
 
 function tarkastaPostiNumero(numero){
	 var pituus=numero.length;
	 var virhe="";
	 
	 //virheiden tarkistus
	 //1) onko tyhjä
 	 if (pituus==0){
		virhe="Postinumero on tyhjä";
	 }
	 //2)sisältääkö muita merkkejä kuin numeroja
	 else if ((isNaN(numero)) || 				//jos muu kuin numero
			 (desimaalipiste(numero,pituus)) ||  //jos desimaaliluku eli pisteen tarkistus
			 (Number(numero)<0)){ 				//jos negatiivinen luku eli etuviivan tarkistus
		virhe="Postinumerossa ei saa olla kuin numeroja";	 
	 }	
	 //3) onko liian lyhyt
	 else if (pituus<kpl){
		virhe="Liian lyhyt postinumero. Oikea pituus on "+kpl+" numeroa";
	 }
	 //4) onko liian pitkä
	 else if (pituus>kpl){
	 	virhe="Liian pitkä postinumero. Oikea pituus on "+kpl+" numeroa";;
	 }

	//jos virheitä havaittiin
	if (virhe!="") {
		 window.alert("Virhe: "+virhe);	//annetaan virheilmoitus
		 return false;					//palautuksena virheellinen
	}
	else {//ei virheitä
		return true;					
	}
 }
 
 //tarkistaa onko kyseessä desimaaliluku
 function desimaalipiste(luvut,maara){
	 for (var i=0;i<maara;i++){
		//löytyykö merkkijonosta pistettä
		if (luvut[i]=="."){
			return true; //piste löytyi
		}
	 }
	 return false; //ei pistettä
 }
 
