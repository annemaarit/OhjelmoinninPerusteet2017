/* file:ot2a.js
   desc: Palauttaa numeroarvosanaa vastaavan
         kirjallisen arvostelun
   date:6.1.2018
   auth: Maarit Parkkonen
 */
 
 //tarkastaa käyttäjän syötteen ja palauttaa sitä vastaavan 
 //arvostelun tai avaa virheilmoituksen
 function sanallinenArvostelu(){
	var nro=document.getElementById("arvoNro").value;
	var palaute="";
	var ok=true; //onko syöte ok
	
	//tyhjentää sanallisen arvostelun divin
	document.getElementById("arvostelu").innerHTML=palaute;
	
	//numeron tarkastus ja sitä vastaavan viestin tallennus
	if (isNaN(nro) || nro<1 || nro>5){
		palaute="Anna numero väliltä 1-5";
		ok=false;
	}
	else if (nro==0) {
		palaute="Hylätty";
		ok=true;
	}
	else if ((nro==1) || (nro==2)) {
		palaute="Tyydyttävä";
		ok=true;
	}
	else if ((nro==3) || (nro==4)) {
		palaute="Hyvä";
		ok=true;
	}
	else if (nro==5) {
		palaute="Kiitettävä";
		ok=true;
	}
	else { //jos desimaaliluku, tyhjä ymv.
		palaute="Anna numero väliltä 1-5";
		ok=false;
	}
	
	//Tulostus diviin tai virheilmoitus
	if (ok==true) { //jos annettu numero ok, tulostaa arvostelun
		document.getElementById("arvostelu").innerHTML=palaute;
	}
	else { //jos annettu jotain muuta, avaa virheilmoituksen
		window.alert(palaute);
	}
	
	//tyhjentää arvoNro -kentän
    document.getElementById("arvoNro").value = "";
	//kursori arvoNro -kenttään
	document.getElementById("arvoNro").focus();
 }