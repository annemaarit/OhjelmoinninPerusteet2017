/* file: ot5a.js
   desc: lomakkeen syöttökenttien valinta 
         ja tyhjennys funktiot
   date: 14.1.2018
   auth: Maarit Parkkonen
 */

//kiinnitetään id:t muuttujiin
var nimi=document.getElementById("nimi");
var katu=document.getElementById("katu");
var pnumero=document.getElementById("pnumero");
var ppaikka=document.getElementById("ppaikka");

//valittuna oleva syöttökenttä
var valittu=nimi;

//kutsutaan, kun syöttökenttä saa fokuksen
//merkitsee syöttökentän valituksi
function valinta(tunnus){
	tunnus.className="onValittu";
	valittu=tunnus;
}

//lähetä -painikkeesta tyhjätään lomake
function tyhjennaLomake(){
	//kenttien tyhjäys
	nimi.value="";
	katu.value="";
	pnumero.value="";
	ppaikka.value="";
	
	//ensimmäinen syöttökenttä valituksi
	nimi.focus(); //laukaisee myös valinta -funktion kutsun
	valittu=nimi; 
}

//kuuntelee "näppäin alas" tapahtumia, jolloin kutsuu tapahtuman käsittelijää
document.addEventListener("keydown", keyPressHandler);

//tapahtuman käsittelijä enter -painikkeelle 
function keyPressHandler(event) {
	//console.log(seuraava);
	if (event.keyCode==13){ //tarkistaa onko painike enter
		switch (valittu){ //valitsee toiminnon valittuna olevan syöttökentän perusteella
			case ppaikka:
				nimi.focus(); //siirtää fokuksen seuraavaan kenttään (samalla laukaisee valinta -funktion kutsun)
				break;
			case nimi:
				katu.focus();
				break;
			case katu:
				pnumero.focus();
				break;
			case pnumero:
				ppaikka.focus();
				break;
		}
	}
}