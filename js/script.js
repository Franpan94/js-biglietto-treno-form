let generator= document.querySelector('#gene-rator');
let output=  document.querySelector('#out-put');
let age= document.querySelector('#age-passenger');
let km= document.querySelector('#number-km');


if(age < 18){
  let generator= document.querySelector('#gene-rator');
  let output=  document.querySelector('#out-put');
  let age= document.querySelector('#age-passenger');
  let km= document.querySelector('#number-km');

  generator.addEventListener('click', function(){
    console.log (document.getElementById('age-passenger').value);
    console.log (document.getElementById('number-km').value);
    output.innerHTML += ((document.getElementById('number-km').value * 0.26) - ((document.getElementById('number-km').value * 0.26) * 0.15)) ;
  })
}

  generator.addEventListener('click', function(){
    console.log (document.getElementById('age-passenger').value);
    console.log (document.getElementById('number-km').value);
    output.innerHTML += document.getElementById('number-km').value * 0.26;
  })

