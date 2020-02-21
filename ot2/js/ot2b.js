/* file:ot2b.js
   desc:
   date:6.1.2018
   auth: Maarit Parkkonen
 */
 
 //tarkastaa käyttäjän syötteen ja palauttaa sitä vastaavan 
 //tuloveron määrän euroina tai avaa virheilmoituksen
 function laskeTulovero(){
	var alaraja=[0,16900,25300,41200,73100];		  //verotuksen alaraja
	var vero=[0,6.25,17.50,21.50,31.50]; 			  //veroprosentti alarajan ylittävästä tulonosasta
	var veroE=[0,8,533,3315.50,10174]; 				  //veron määrä euroina alarajan kohdalla
	var virhe="Ansiotulon on oltava positiivinen luku tai nolla"; //virheilmoitus
	var tulovero=0;
	var i=0;
	

	//ansiotulo syötteenä
	var tulo=document.getElementById("ansiot").value;
	
	//tarkistetaan onko syöte virheellinen
	if (isNaN(tulo) || tulo<0) {
			window.alert(virhe);
			//tyhjentää ansiot -kentän
			document.getElementById("ansiot").value = "";
			//tyhjentää verotEuroina -kentän
			document.getElementById("verotEuroina").innerHTML = "";
			//kursori ansiot -kenttään
			document.getElementById("ansiot").focus();				
		}
	else {//jos syöte ok
		//etsitään oikea paikka taulukosta verotuksen alarajan perusteella
		while ((tulo>=alaraja[i+1])&& (i<5)){
			i++;
			}
		//laskenta
		tulovero=((vero[i]/100)*(tulo-alaraja[i]))+veroE[i];
		//palautetaan tulos eli tulovero
		document.getElementById("verotEuroina").innerHTML="Verot vuodessa "+tulovero+" €";
		}
		//document.getElementById("verotEuroina").innerHTML=i;

 }