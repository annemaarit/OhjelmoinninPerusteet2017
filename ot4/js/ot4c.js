/* file: ot4c.js
   desc: funktiot annetun nimen testaukseen ja tuloksen palautukseen
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
 
 //etsittävä nimi
 var oikeaNimi="Aku"; //pikku-akua ei hyväksytä..
 
//tarkistuttaa onko käyttäjän antama nimi sama kuin 
//ohjelmassa annettu (globaalimuuttuja: oikeaNimi) ja
//ilmoittaa tuloksen käyttäjälle 
 function tarkistaNimi(){
	var n=document.getElementById("nimi").value;
	if (syoteOk(n,"nimi")){
		if (onkoAku(n)){
			document.getElementById("tuloste").innerHTML="Onnea, "+oikeaNimi+" löytyi!";
			}
		else {
			document.getElementById("tuloste").innerHTML="Kääk, "+n+" on väärä nimi!";
		}			
	}
 }

 
 //tarkistaa syötteen
 function syoteOk(s1,l1){
	 if (s1==""){ //jos syöte on tyhjä
		 var viesti="Anna "+l1+"!";
		 window.alert(viesti);
		 nimi.value="";
		 nimi.focus();
		 document.getElementById("tuloste").innerHTML="";
		 return false;
	 }
	 else { //syöte ok
		 return true;
	 }
 }
 
//vertaa onko parametrina saatu nimi sama,
//kuin globaalin muuttujan nimi,
//palauttaa totuusarvon
 function onkoAku(teksti){
	if ((teksti==oikeaNimi)){
		return true; //sama nimi
	}
	else {
		return false; //eri nimi
	}
 }