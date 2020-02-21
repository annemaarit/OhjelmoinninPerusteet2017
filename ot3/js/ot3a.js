/* file: ot3a.js
   desc: Tulostaa viiden elokuvan listan
   date: 8.1.2018
   auth: Maarit Parkkonen
 */
 
 //Tulostaa valmiin listan taulukosta aakkosjärjestyksessä
 function elokuvalista(){
	var elokuvat=["Kung Fu Panda 2","Autot 1","Lentsikat 2","Heinähattu ja Vilttitossu - Rubensin veljekset", "Tatun ja Patun joulu"];
	//järjestää elokuvat aakkosjärjestykseen
	elokuvat.sort();
	//tulostaa listan tuloste -diviin
	document.getElementById("tuloste").innerHTML="- "+elokuvat.join("<br>- ");

 }