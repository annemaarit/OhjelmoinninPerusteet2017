/* file: ot2d.js
   desc: Alennusvalinnan näkyvyys -funktio,
         Kokonaishinnan laskenta -funktio
   date: 6.1.2018
   auth: Maarit Parkkonen
 */
 

var alennus=document.getElementById("alennus");


//funktiota kutsutaan käyttäjän valittua lipun luokan,
//lipun luokka määrittää alennusvalinnan näkyvyyden
function alennuksenNakyvyys(){
	//jos luokka 2 valittu
	 if (document.getElementById("luokka2").checked) {
		 //alennuksen valinta näkyviin
		 alennus.className = "on";
	 }
	 //jos luokka1 valittu
	 else {	
		 //alennuksen valinta pois näkyvistä
		 alennus.className = "off"; 
	 }
}

//Funktioita kutsutaan käyttäjän painettua osta -painiketta.
//Tarkistaa valinnat ja laskee kokonaishinnan
function tulostaKokonaishinta() {
	//vakiot
	var hintaL1=140.61;
	var hintaL2=86.10;
	var alePros=0.5;
	
	//muuttujat
	var luokka=0;
	var suunta=0;
	var ale=false;
	var kpl=1;
	var hinta=0;
	
	//tyhjentää aiemman kokonaishintatiedon
	document.getElementById("hinta").innerHTML ="";
	
	 //lipun luokkavalinta
	 if (document.getElementById("luokka2").checked) {
		 luokka=2;
	 }
	 if (document.getElementById("luokka1").checked) {
		 luokka=1;
	 }
		
	 //lipun suuntavalinta
	 if (document.getElementById("meno").checked) {
		 suunta=1;
	 }
	 if (document.getElementById("menopaluu").checked) {
		 suunta=2;
	 }	 
			
	//lipun alennus, jos alennus valittuna ja 2.luokka
	if ((alennus.checked) && (luokka==2)) {
		ale=true;
	}
	
	//kappalemäärä
	kpl=Number(document.getElementById("kpl").value);

	//tietojen tarkistus ja laskenta
	if (luokka==0) { //luokkaa ei ole valittu
		window.alert("Valitse luokka");
	}
	else if (suunta==0) { //suuntaa ei ole valittu
		window.alert("Valitse suunta");
	}
	else { //valinnat ok, laske hinta
		if (luokka==1){
			hinta=hintaL1;
		}
		else {
			hinta=hintaL2;
		}
		hinta=hinta*suunta;
		hinta=hinta*kpl;		
		if (ale==true) {
			hinta=hinta*alePros;
		}
		//kokonaishinnan tulostus hinta -diviin
		document.getElementById("hinta").innerHTML ="Kokonaishinta: "+hinta+" €";
	}

	//testausta varten
	//document.getElementById("testi").innerHTML =luokka+" "+suunta+" "+ale+" "+kpl;
}