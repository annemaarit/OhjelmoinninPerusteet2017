/* file: ot4f.js
   desc: Ihminen -olion luonti ja sen ominaisuuksien tulostus
   date: 10.1.2018
   auth: Maarit Parkkonen
 */
 
var ihminen = new Object();

//luo ihminen objektin ja pyytää sen ominaisuuksien tulostusta
function teeJaNaytaLeo(){
	ihminen.etunimi="Leo";
	ihminen.sukunimi="Kuusankoski";
	ihminen.ika=34;
	ihminen.kerroItsestasi=function(){
		return this.etunimi+" "+this.sukunimi+" on "+this.ika+" vuotias";
	};
	tulostaLeo();
}

//tulostaa ihminen -objektin ominaisuudet tuloste diviin
function tulostaLeo(){
	document.getElementById("tuloste").innerHTML=ihminen.kerroItsestasi();
}
