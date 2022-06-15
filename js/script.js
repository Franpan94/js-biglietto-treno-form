
// Definiamo un bottone 
let generator= document.getElementById('generator-btn');

// A questo bottone gli aggiungiamo una lista di eventi
generator.addEventListener('click', function(){
   
//  definiamo le variabili all'interno dell'evento
  
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
    output.innerHTML = priceunder;
    console.log('prezzo scontato del 15%'); 
    console.log(priceunder);
  
  } else if (age >= 65){

    priceover= price - (price * 0.35);
    priceover= priceover.toFixed(2);
    output.innerHTML = priceover; 
    console.log('prezzo scontato del 35%');
    console.log(priceover);
  
  } else{
    
    price= price.toFixed(2);
    output.innerHTML = price;
    console.log('prezzo normale');
    console.log(price);

  }

});











