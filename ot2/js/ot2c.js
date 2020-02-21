/* file:ot2c.js
   desc: Heitetään kahta noppaa, jos
		 tuloksena pari, ohjelma onnittelee
		 tuplasta.
   date: 6.1.2018
   auth: Maarit Parkkonen
 */

	var noppa=["kuvat/noppa1.jpg","kuvat/noppa2.jpg","kuvat/noppa3.jpg","kuvat/noppa4.jpg","kuvat/noppa5.jpg","kuvat/noppa6.jpg"]
	
	function heitaNoppia(){
		var heitto1=0;	//ensimmäisen nopan silmäluku
		var heitto2=0;	//toisen nopan silmäluku
		var pari="";	//merkkijono tulostusta varten
		
		//tyhjennetään edellinen ilmoitus
		document.getElementById("tulos").innerHTML = "";
		
		//ensimmäisen nopan silmäluvun arvonta
		heitto1 = Math.floor((Math.random()*6)); //Arvotaan luku väliltä 0 - 5, taulukon aloittava indeksi nolla! 
		//muutetaan nopan kuva vastaamaan arvottua lukua
		document.getElementById("heitetty1").src=noppa[heitto1];
		
		//toisen nopan silmäluvun arvonta
		heitto2 = Math.floor((Math.random()*6));
		//muutetaan nopan kuva vastaamaan arvottua lukua
		document.getElementById("heitetty2").src=noppa[heitto2];

		//tulostus, jos noppien arvo sama
		if(heitto1 == heitto2){ 
			heitto1++;
			if (heitto1==1){
				pari="ykkös";
				}
			else if (heitto1==2){
				pari="kakkos";
				}
			else if (heitto1==3){
				pari="kolmos";
				}
			else if (heitto1==4){
				pari="nelos";
				}
			else if (heitto1==5){
				pari="vitos";
				}
			else{
				pari="kutos";
				}
			document.getElementById("tulos").innerHTML = "Onnea, sait "+pari+"parit!";
		}
	}


