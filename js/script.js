
// Definiamo i bottoni 
let generator= document.getElementById('generator-btn');
let regenerator= document.getElementById('generator-btnr');

// Aggiungiamo una lista di eventi al bottone per generare il numero della carroza treno
regenerator.addEventListener('click', function(){

// Definiamo le variabili all'interno dell'evento
let casual= Math.floor((Math.random() * 10) + 1);
let number= document.getElementById('number-random');
number.innerHTML = 'Il numero della carrozza treno è '+ casual;
})


// Aggiungiamo all'altro bottone una serie di eventi per generare il prezzo del biglietto
generator.addEventListener('click', function(){
   
// Definiamo le variabili all'interno dell'evento
let km= document.getElementById('number-km').value;
console.log('km');
console.log(km);
 
let price= km * 0.26;
let output= document.getElementById('output-ticket');

let age= document.getElementById('age-passenger').value;
console.log('età');
console.log(age);


  
// Impostiamo le varie condizioni
if(age < 18){
    
  priceunder= price - (price * 0.15);
  priceunder= priceunder.toFixed(2);
  output.innerHTML = 'Il prezzo del biglietto scontato del 15% riservato ai minorenni è di € '+ priceunder;
  console.log('prezzo scontato del 15%'); 
  console.log(priceunder);
  
} else if (age >= 65){

  priceover= price - (price * 0.35);
  priceover= priceover.toFixed(2);
  output.innerHTML = 'Il prezzo del biglietto scontato del 35% riservato agli over 65 è di € '+ priceover; 
  console.log('prezzo scontato del 35%');
  console.log(priceover);
  
} else{
    
  price= price.toFixed(2);
  output.innerHTML = 'il prezzo del biglietto è di €'+ price;
  console.log('prezzo normale');
  console.log(price);

}

});











