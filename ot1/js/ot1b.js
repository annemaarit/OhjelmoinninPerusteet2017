/* file: ot1b.js
   desc: tulostaa vakiotekstin vakiolause -diviin ja 
		 käyttäjän kirjoittaman tekstin kirjoitus -diviin
   date: 4.10.2017
   auth: Maarit Parkkonen
 */
 function tulostaLause(){
	var lause = document.getElementById("teksti").value;
	document.getElementById("vakiolause").innerHTML = 'Kirjoittamasi lause on:'+'<br>'+lause;
 }