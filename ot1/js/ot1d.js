/* file: ot1d.js
   desc: funktio Huijaa lisää käyttäjän syöttämään lukuun yhden numeron ja
	     tulostaa yhtänumeroa suuremman luvun ja häviämistiedon takaisin
   date: 4.10.2017
   auth: Maarit Parkkonen
 */
 function Huijaa(){
	// muuttujaan nro luetaan käyttäjän antama arvo syöttötieto lomakkeelta ja siihen lisätään luku yksi
	var nro=Number(document.getElementById("luku").value)+1;
	// tulostaa havisit -diviin tiedon tappiosta ja oman voittoisan luvun nro muuttujasta
	document.getElementById("havisit").innerHTML="Hävisit niukasti! Minun lukuni on " + nro;
 }