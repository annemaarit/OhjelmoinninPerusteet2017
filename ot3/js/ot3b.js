/* file: ot3b.js
   desc: Kaupunkilistan alustus- ja muokkaus- funktiot
   date: 8.1.2018
   auth: Maarit Parkkonen
 */

//globaalina muuttujana, joten tehdyt muokkaukset eivät häviä
var kaupungit=["Jyväskylä","Oulu","Turku","Espoo","Vaasa"]; 
 
//listan alustus
function kaupunkilista(){
	//tulostaa listan lista1 -diviin
	document.getElementById("lista1").innerHTML=kaupungit;
 }

//poistaa viimeisen elementin listalta
 function poista(){
	kaupungit.pop();
	//tulostaa listan lista -diviin
	document.getElementById("lista2").innerHTML=kaupungit;
 }
 
//lisaa Mikkelin listan viimeiseksi elementiksi
  function lisaa(){
	kaupungit.push("Mikkeli");
	//tulostaa listan lista -diviin
	document.getElementById("lista3").innerHTML=kaupungit;
 }
 
//vaihtaa listan ensimmäisen elementin Tampereeksi
  function vaihda(){
	kaupungit.splice(0,1,"Tampere");
	//tulostaa listan lista -diviin
	document.getElementById("lista4").innerHTML=kaupungit;
 }