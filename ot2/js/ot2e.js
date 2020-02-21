/* file: ot2e.js
   desc: Tulostaa halutun määrän annettua tekstiä
   date: 7.1.2018
   auth: Maarit Parkkonen
 */
 
//kutsutaan Tulosta -painikkeella,
//tulostaa halutun määrän annettua tekstiä
function tulosta(){
	var teksti=document.getElementById("nimi").value;
	var kpl=document.getElementById("kpl").value;	
	
	//tyhjentää edellisen tulosteen
	document.getElementById("tuloste").innerHTML="";
	
	//tarkistaa lukumäärän oikeellisuuden
	if (isNaN(kpl) || kpl<0){ //jos syöte virheellinen (ei kokonaisluku>=0)
		window.alert("Anna kokonaisluku");
		//tyhjentää kpl -kentän
		document.getElementById("kpl").value = "";
		//kursori kpl -kenttään
		document.getElementById("kpl").focus();
	}
	else{ //kpl -syöte ok
		//tulostussilmukka		
		//while (i<kpl){
		//	document.getElementById("tuloste").innerHTML+=teksti+"<br>";
		//	i++;
		for (var i=0;i<kpl;i++){
			document.getElementById("tuloste").innerHTML+=teksti+"<br>";
		}
	}
}
