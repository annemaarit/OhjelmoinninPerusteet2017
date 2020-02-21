/* file: ot5b.js
   desc: pallon liikuttamiseen tarvittavat funktiot
   date: 14.1.2018
   auth: Maarit Parkkonen
 */
 
var pallo=document.getElementById("pallo"); 

//html -elementtien arvot vakioihin
var alueLeveys=500;
var alueKorkeus=500;
var	halkaisija=50; //pallon halkaisija

//pallon yhden liikkeen pikselimäärä
var liike=10;
 
 //ajetaan kun sivu on latautunut
function alustus() {
	//pallon alkusijainti
	pallo.style.left="0px"; 
	pallo.style.top="0px";
	//asetetaan tapahtuman havaitsija kutsumaan näppäimen painalluksesta
	//tapahtuman käsittelijää
	window.addEventListener("keydown",keyPressHandler);
	}

//tapahtuman käsittelijä näppäimen painalluksulle
function keyPressHandler(event) {
	var nappain=event.keyCode; //näppäimen unicode -numero
	var x,y;				   //pallon sijaintikoordinaatit
		switch (nappain){ //valitsee toiminnon näppäimen numeron perusteella
			case 37: //nuoli vasemmalle
				x=parseInt(pallo.style.left); //pallon sijainnin x-koordinaatti
				if (x>=liike){ //jos ei törmää aluerajaan
					pallo.style.left=(x-liike)+ "px"; //siirretään vasempaan
				}
				break;
			case 38: //nuoli ylös
				y=parseInt(pallo.style.top);			
				if (y>=liike){
					pallo.style.top=(y-liike)+ "px";//siirretään ylöspäin
				}
				break;
			case 39: //nuoli oikealle
				x=parseInt(pallo.style.left);
				if (x<=(alueLeveys-halkaisija-liike)){ 
					pallo.style.left=(x+liike)+ "px";//siirretään oikealle
				}
				break;
			case 40: //nuoli alas
				y=parseInt(pallo.style.top);
				if (y<=(alueKorkeus-halkaisija-liike)){
					pallo.style.top=(y+liike)+ "px";//siirretään alaspäin
				}
				break;
			case 32: //välilyönti
				//nollataan koordinaatit, pallo ylös vasempaan laitaan
				pallo.style.left="0px";
				pallo.style.top="0px";
				break;
		}
}
