/* file: ot5b.js
   desc: Näytettävät kuvat ladataan taulukkoon, 
		 funktiot huolehtivat oikean kuvan esittämisestä ja poistamisesta
		 näkyvistä
   date: 13.1.2018
   auth: Maarit Parkkonen
 */
	
 //kuvataulukko
 var kuvat=["kuvat/pingviinit.jpg","kuvat/koala.jpg","kuvat/tulppaanit.jpg"];

 //kuvien näyttö divi
 var kuva=document.getElementById("kuva");

 //näyttää taulukosta valitun kuvan
 function naytaKuva(i){
	kuva.innerHTML='<img src="'+kuvat[i]+'" alt="Pingviinejä" width="512" height="384">';
 }
 
 //tyhjää kuvien näyttö divin
 function poistaKuva(){
    kuva.innerHTML="";
 }
 
 