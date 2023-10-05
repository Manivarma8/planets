

var show = document.querySelector('.show');
var range = document.querySelector('#range');
var text = document.querySelector('#write');
var measure = document.getElementById('measure');
var optionOne = document.getElementById('option');


range.addEventListener("change",()=>{
  show.style.borderRadius = range.value + 'px';
  measure.textContent = range.value +"px";
  text.textContent =   "The Border Radius : " + range.value +"px";
  
})
optionOne.addEventListener("change",()=>{
  show.style.borderStyle = optionOne.value;
  show.style.borderColor = "white";
  show.style.borderWidth = "10px";
})

