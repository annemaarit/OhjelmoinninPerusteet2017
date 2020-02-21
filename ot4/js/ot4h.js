/* file: ot4h.js
   desc: Kiinteistöohjelman tarvitsemat funktiot:
	     - uuden asunnon tietojen lisäys
		 - syötetietojen virheiden tarkistus
		 - kohdenumerolla asuntotietojen haku
   date: 13.1.2018
   auth: Maarit Parkkonen
 */

//globaali taulukko asunto-olioille
var asunnot = [];

//"koodinpätkä" vakioita
var hakuTulostus=document.getElementById("tuloste");
var virheTulostus=document.getElementById("virheTuloste");

 //ohjaa uuden asunto-olion luomisen
 function lisaaUusiKohde(){
	//seuraava kohdenumero (ohjelma muodostaa sen automaattisesti)
	var kohde=(asunnot.length)+1;       
	
	//syötetietojen luku muuttujiin
	var sijainti=document.getElementById("sijaintiHTML").value;
	var ala=document.getElementById("alaHTML").value;
	var maksu=document.getElementById("maksuHTML").value;
	
	//tulostus -divin tyhjäys	
	virheTulostus.innerHTML="";
	
	if (onkoTekstiOk(sijainti,"Osoite")){ 		//tarkistaa osoitetiedon syötteen
		if(onkoNumeroOk(ala,"Pinta-ala")){ 		//tarkistaa pinta-alatiedon syötteen
			if(onkoNumeroOk(maksu,"Hinta")){ 	//tarkistaa hintatiedon syötteen
				//syötteet ok
				var talo=new asunto(kohde, sijainti, ala, maksu); //uusi asunto-olio
				asunnot.push(talo); //lisätään uusi olio globaaliin taulukkoon			
				tyhjaaSivusto(); //valmistellaan html -sivu uuden asunnon lisäämiseen
			}
			else{ //hintatiedoissa virhe
				maksuHTML.value="";
			    maksuHTML.focus();
			}
		}
		else{ //pinta-alatiedoissa virhe
			alaHTML.value="";
			alaHTML.focus();				
		}
	}
	else { //osoitetiedoissa virhe
		sijaintiHTML.value="";
		sijaintiHTML.focus();		
	}
 }
 
 //näyttää HTML -sivulla seuraavan uuden asunnon kohdenumeron
 function seuraavaKohdenumero(){
	 document.getElementById("kohdeHTML").innerHTML=(asunnot.length)+1;
	 sijaintiHTML.focus();
 }
 
 
//asunto-olion luonti
 function asunto(kohdeNro, osoite, pintaAla, hinta){
	 //ominaisuudet
	 this.kohdeNro=kohdeNro;
	 this.osoite=osoite;
	 this.hinta=hinta;
	 this.pintaAla=pintaAla;
	 //funktiot:
	 //laskee ja palauttaa asunnon neliöhinnan
	 this.laskeNelioHinta= function(){
		return (this.hinta/this.pintaAla).toFixed(2);
	 };
	 //muodostaa ja palauttaa asunnon tiedoista taulukon
	 this.asunnonTiedot=function(){
		return "ASUNNON TIEDOT<br><br>"+
		"<table><tr><th>Kohdenumero</th><td>"+this.kohdeNro+"</td></tr>"+
		       "<tr><th>Osoite</th><td>"+this.osoite+"</td></tr>"+
			   "<tr><th>Hinta</th><td>"+this.hinta+" €</td></tr>"+
			   "<tr><th>Pinta-ala</th><td>"+this.pintaAla+" m&sup2;</td></tr>"+
			   "<tr><th>Neliöhinta</th><td>"+this.laskeNelioHinta()+" €/m&sup2;</td></tr></table>";
	 };
 }
 
 //numerosyötteen tarkistus
 function onkoNumeroOk(nro,nimi){
	 var virhe="";
	 if (nro==""){ //tyhjä
		 virhe=nimi+" puuttuu!";
	 }
	 else if (isNaN(nro)){ //ei luku
		 virhe=nimi+" ei ole luku. Tarkista se.";
	 }
	 
	 //tuloksen tarkistus
	 if (virhe==""){ //ei virhettä
		 return true;
	 }
	 else { //virhe: virheilmoitus
		 if (nimi=="Haun kohdenumero"){ //hakutiedossa virhe
			hakuTulostus.innerHTML=("Virhe: "+virhe);
			}
		 else{ //uuden lisäyksen tiedoissa virhe
			virheTulostus.innerHTML=("Virhe: "+virhe);
		 }
		 return false;
	 }
 }

  //tekstisyötteen tarkistus
  function onkoTekstiOk(teksti,nimi){
	 if (teksti==""){ //tyhjä
		 //virheilmoitus
		 virheTulostus.innerHTML=(nimi+" puuttuu!");
		 return false;
	 }
	 else{	  
		 return true;
	 }
  }
  
  //valmistellaan html -sivu uuden asunnon lisäämiseen
  function tyhjaaSivusto(){
	seuraavaKohdenumero(); 
	maksuHTML.value="";
	alaHTML.value="";
	sijaintiHTML.value="";
	sijaintiHTML.focus();
  }
 
 //ohjaa halutun asunnon etsimisen kohdenumerolla
 function haeAsunnonTiedot(){
	 //kohdenumeron luku muuttujaan
	 var nro=document.getElementById("haeKohdeNro").value;
	 
	 //edellisen haun tuloksen tyhjäys
	 hakuTulostus.innerHTML="";
		
	 if (onkoNumeroOk(nro,"Haun kohdenumero")){//jos kohdenumero ok
		var loytyi=Number(etsiAsunto(nro)); //pyytää asunnon etsimistä asunnot -taulukosta
		if (loytyi>=0){ //jos asunto löytyi taulukosta
			hakuTulostus.innerHTML=asunnot[loytyi].asunnonTiedot(); //tulostetaan asunto-olion tiedot sen omalla metodilla
		}
	 }
	 //tyhjätään haun kohdenumero -kenttä
	 haeKohdeNro.value="";
	 haeKohdeNro.focus();
 }
 
 //etsii asuntoa asunnot -taulukosta tunnuksen (kohdenumero) perusteella
 function etsiAsunto(tunnus){
	 var kpl=asunnot.length; //taulukon koko
	 var nro;				 //taulukossa olevan asunnon kohdenumerolle
	 for (i=0;i<kpl;i++){	 //käydään läpi asunnot -taulukkoa
		 nro=asunnot[i].kohdeNro;
		 if (nro==tunnus){ //jos taulukossa olevan asunnon kohdenumero samakuin etsittävä numero
			 return i;	   //palautetaan taulukon indeksi
		 }
	 }
	 //funktio jatkuu tänne vain,
	 //jos etsittävää kohdenumeroa ei löytynyt
	 hakuTulostus.innerHTML="Kohdenumeroa ei löytynyt";
	 haeKohdeNro.value="";
	 haeKohdeNro.focus();
	 return (-1); //palautetaan merkiksi haun tuloksettomuudesta
  }

 
  function teeNeljaAsuntoa(){
	  //seuraava kohdenumero (ohjelma muodostaa sen automaattisesti)
	  var kohde=(asunnot.length)+1;  
	  //asuntojen tiedot
	  var osoitteet=["Polku 1 Kuusankoski", "Talo 2 Valkeala", "Tie 3 Oulu", "Kuja4 Helsinki"];
	  var pintaAlat=[120,80,60,240];
	  var hinnat=[180000,72000,45000,420000];
	  //uusien asuntojen luonti ja lisäys taulukkoon
	  for(var i=0;i<4;i++){
		var talo=new asunto(kohde, osoitteet[i], pintaAlat[i], hinnat[i]); //uusi asunto-olio
		asunnot.push(talo); //lisätään uusi olio globaaliin taulukkoon		
		kohde++;
		}
	  tyhjaaSivusto(); //valmistellaan html -sivu uuden asunnon lisäämiseen
 }