/* file: ot1c.js
   desc: Laskee summan käyttäjän syöttämistä luvuista
   date: 4.10.2017
   auth: Maarit Parkkonen
 */
 function laskeSumma(){
	 //lukee syöttötiedot lomakkeelta muuttujiin
	var luku1=Number(document.getElementById("emo").value);
	var luku2=Number(document.getElementById("prossa").value);
	var luku3=Number(document.getElementById("muisti").value);
	var luku4=Number(document.getElementById("kiinto").value);
	var luku5=Number(document.getElementById("kotelo").value);
	var luku6=Number(document.getElementById("ohjain").value);
	var luku7=Number(document.getElementById("virta").value);
	//laskee summa muuttujaan lukujen summan ja
	//tulostaa summan lomakkeen tulos -diviin
	var summa=luku1+luku2+luku3+luku4+luku5+luku6+luku7;
	document.getElementById("tulos").innerHTML=summa;
 }