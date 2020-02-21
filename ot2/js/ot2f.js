/* file: ot2f.js
   desc: laskee vuosien määrän halutun tavoitepääoman saavuttamiseen
		 annetulla alkupääomalla ja tuottoprosentilla
   date: 7.1.2018
   auth: Maarit Parkkonen
 */

var paaoma=document.getElementById("alkupaaoma");
var tavoite=document.getElementById("tavoite");
var tuotto=document.getElementById("tuottoPros");
var tuloste=document.getElementById("tuloste");

//kutsutaan laske -painikkeella
//tarkistaa syötteet ja laskee vuodet halutun tavoitepääoman saavuttamiseen
function laskeVuodet(){
	var tili=Number(paaoma.value); 
	var tavoiteArvo=Number(tavoite.value);		
	var tuottoArvo=Number(tuotto.value);
	
	//tyhjentää edellisen tulosteen
	tuloste.innerHTML="";
	
	//tarkistaa ensin syötteet, hieman kökkö mutta yrittää estää laskennan virheet..
	if (isNaN(tili) || tili<=0){	
		window.alert("Alkupääoman oltava > 0");
		//tyhjentää alkupääoma -kentän
		paaoma.value = "";
		//kursori alkupääoma -kenttään
		paaoma.focus();	
	}
	else if (isNaN(tavoiteArvo) || tavoiteArvo<=tili){
		//document.getElementById("testi").innerHTML="Tili: "+tili+"Tavoite: "+tavoiteArvo; Testausta varten
		if (isNaN(tavoiteArvo)){
			window.alert("Tavoitepääoman oltava luku > 0");
		}
		else {
			window.alert("Tavoitepääoman oltava > alkupääoman");
		}
		//tyhjentää tavoitepääoma -kentän
		tavoite.value = "";
		//kursori tavoitepääoman -kenttään
		tavoite.focus();			
	}
	else if (isNaN(tuottoArvo) || tuottoArvo<=0){ 
		window.alert("Tuottoprosentin oltava > 0");
		//tyhjentää tuottoPros -kentän
		tuotto.value = "";
		//kursori tuottoPros -kenttään
		tuotto.focus();
	}
	else   { //syötteet ok
		//laskentasilmukka	
		var kasvu=(tuottoArvo/100)+1;
		var vuodet=0;
		while (tili<tavoiteArvo){
			tili=kasvu*tili;
			vuodet++;
		}
		tuloste.innerHTML="Tavoitteen saavuttamiseen menee "+vuodet+" vuotta";
	}
	//document.getElementById("testi").innerHTML="Tili: "+tili+"Tavoite: "+tavoiteArvo+"Prosentti: "+tuottoArvo; 
}
