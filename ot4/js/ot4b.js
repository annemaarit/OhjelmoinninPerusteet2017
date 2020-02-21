/* file: ot4b.js
   desc: Neliön laskenta funktiot
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
 
 
//ohjaa neliön laskennan
 function nelio(){
	var numero=Number(document.getElementById("luku").value);
	//tyhjentää tuloste -divin
	 document.getElementById("tuloste").innerHTML="";
	//tarkistaa annetun numeron
	if (syoteOk(numero,"luku")){
	document.getElementById("tuloste").innerHTML=laskeNelio(numero);
	}
 }

 
 //tarkistaa syötteen
 function syoteOk(s1,l1){
	 if ((s1=="") || (isNaN(s1))){ //jos syöte virheellinen
		 var viesti="Anna "+l1+"!";
		 window.alert(viesti);
		 luku.value="";
		 luku.focus();
		 return false;
	 }
	 else { //syöte ok
		 return true;
	 }
 }
 
 //laskee ja palauttaa parametrina saamansa luvun neliön
 function laskeNelio(nro){
	return (nro*nro);
 }