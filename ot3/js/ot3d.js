/* file: ot3d.js
   desc: funktiot kuvakehyksen kuvien katseluun:
		-kuvataulukon luonti, edellinen- ja seuraava- painikkeiden toiminnot
   date: 8.1.2018
   auth: Maarit Parkkonen
 */
 
var kuvanro = 0; 
var kuvat=[];
var pituus=0;

//hakee kuvat kuvataulukkoon
 function kuvataulukko(){		
	kuvat[0] = new Image(); //Luodaan kuvakehys muistiin (olio)
	kuvat[0].src = "kuvat/Chrysanthemum.jpg";
	kuvat[1] = new Image();
	kuvat[1].src = "kuvat/Desert.jpg";
	kuvat[2] = new Image();
	kuvat[2].src = "kuvat/Hydrangeas.jpg";
	kuvat[3] = new Image();
	kuvat[3].src = "kuvat/Jellyfish.jpg";
	kuvat[4] = new Image();
	kuvat[4].src = "kuvat/Koala.jpg";
	kuvat[5] = new Image();
	kuvat[5].src = "kuvat/Lighthouse.jpg"; 
	kuvat[6] = new Image();
	kuvat[6].src = "kuvat/Penguins.jpg";
	kuvat[7] = new Image();
	kuvat[7].src = "kuvat/Tulips.jpg"; 
	//taulukon pituus globaalimuuttujaan
	pituus=kuvat.length;
 }
 
//vaihtaa seuraava -painikkeesta taulukosta seuraavan kuvan kuvakehykseen
function seuraava(){
	kuvanro++;
	if(kuvanro == (pituus-1)) { //jos näytössä oli taulukon viimeinen kuva
		kuvanro = 0;//siirtyy taulukon ekaan kuvaan
	}
		document.getElementById("kuvakehys").src = kuvat[kuvanro].src;		
}

//vaihtaa edellinen -painikkeesta taulukosta edellisen kuvan kuvakehykseen
function edellinen(){
	kuvanro--;	
	if(kuvanro == -1) { //jos näytössä eka kuva
		kuvanro = (pituus-1);//siirtyy taulukon viimeiseen kuvaan kuvakehykseen
	}
		document.getElementById("kuvakehys").src =  kuvat[kuvanro].src;	
	
}