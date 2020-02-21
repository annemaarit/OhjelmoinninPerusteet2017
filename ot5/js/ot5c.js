/* file: ot5b.js
   desc: sekuntteja alaspäin laskevan laskurin funktiot
   date: 13.1.2018
   auth: Maarit Parkkonen
 */
 
 //ajastin-olion(?) muuttuja
 var ajastin;
 
 //kierrosluku ja laskennan sekunttien aloitus arvo
 var kierros=10;
 
 //sekunnin välein lukua vähentävä aikalaskuri
 function laskeSekuntteja(){
	document.getElementById("aika").innerHTML=kierros;//aika -diviin näkyviin kierrosluku eli sekuntti
	if (kierros>0){ 	//jos kierroksia jäljellä
		kierros--;		//vähennätään yksi kierros
		ajastin=setTimeout("laskeSekuntteja()",1000); //kutsutaan funktiota uudelleen eli uusi kierros
	}
	else{ 				//kierrokset loppu
		pysayta(); 		//ajastimen pysäytys ja nollaus
		kierros=10;		//uudet kierrokset
	}
 }
 
 //laskennan pysäytys
 function pysayta(){
	clearTimeout(ajastin);
 }