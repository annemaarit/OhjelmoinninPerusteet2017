/* file: ot1e.js
   desc:
   date:
   auth: Maarit Parkkonen
 */
 function laskePalkka(){
	var peruspalkka = 14;
	var kokotunnit = Number(document.getElementById("tyotunnit").value);
	var yotunnit = Number(document.getElementById("yo").value);
	var palkkasumma = (peruspalkka*kokotunnit)+(yotunnit*peruspalkka);
	document.getElementById("palkka").innerHTML = palkkasumma;
 }