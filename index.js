// Clear Button
document.getElementById(`buttonClear`).onclick = function(){
  console.clear();
}


// Start Counter
let counter=0;

document.getElementById(`decreaseButton`).onclick = function(){
  counter--;
  document.getElementById(`counter`).textContent = String(counter);
}

document.getElementById(`resetButton`).onclick = function () {
  counter=0;
  document.getElementById(`counter`).textContent = String(counter);
}

document.getElementById(`increaseButton`).onclick = function () {
  counter++;
  document.getElementById(`counter`).textContent = String(counter);
}
// End Counter

// Start dice
const rollButton = document.getElementById(`rollButton`);
const diceOutput = document.getElementById(`diceOutput`);

let r1, r2, r3;

rollButton.onclick = function(){
  r1 = 1 + Math.floor(Math.random() * 6);
  r2 = 1 + Math.floor(Math.random() * 6);
  r3 = 1 + Math.floor(Math.random() * 6);

  if(r1 == r2 == r3){
    console.log(`All ${r1}`);
  }else{
    diceOutput.textContent = String(r1) + String(r2) + String(r3);
  }
}

let unitInput = document.getElementById(`unitInput`);
let radio1 = document.getElementById(`unitRadioButton1`);
let radio2 = document.getElementById(`unitRadioButton2`);
let calculateButton = document.getElementById(`calculateButton`);
let answer = document.getElementById(`answer`);

calculateButton.onclick = function(){
  let value=unitInput.value;
  console.log(value);
  if(value == ""){
    window.alert(`enter a value in text box`);
  }else{
    if(radio1.checked){
      answer.textContent = String(value * 9 / 5 + 32) + `°F`;
    }else if(radio2.checked){
      answer.textContent = String(((value - 32) * 5 / 9).toFixed(3)) + `°F`;
    }else{
      window.alert(`check a radio button`);
    }
  }
}


function multipleDiceRoller() {
  
  const textbox = document.getElementById(`textbox`);
  const button = document.getElementById(`rollWithImages`);
  const outputValues = document.getElementById(`outputValues`);
  const outputImages = document.getElementById(`outputImages`);

  let values = [];
  let images = [];

  for(let i=0;i<textbox.value;i++){
    values[i] = Math.floor(Math.random() * 6) + 1;
    images[i] = `<img src="diceImages/${values[i]}.png">`
  }

  outputImages.innerHTML = images.join(``);
  outputValues.textContent = values.join(", ");
}

function generateRandomNumber() {
  const lowerc = "abcdefghijklmnopqrstuvwxyz";
  const upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const n = "1234567890";
  const s = "!@#$%^&*()-_+";

  const passLength = Number(document.getElementById(`textboxRNG`).value);
  const answerField = document.getElementById(`password`);
  const lowercase = document.getElementById(`lowercase`).checked;
  const uppercase = document.getElementById(`uppercase`).checked;
  const numbers = document.getElementById(`numbers`).checked;
  const symbols = document.getElementById(`symbols`).checked;

  let characters = [];
  let password = [];

  if(!(lowercase || uppercase || numbers || symbols)){
    answerField.textContent = "Password Generator";
    window.alert(`Please check atleast one checkbox`);
    return;
  }
  if(passLength == 0){
    answerField.textContent = "Password Generator";
    window.alert(`Enter the required Length`);
    return;
  }

  if(lowercase){
    characters += lowerc;
  }
  if (uppercase) {
    characters += upperc;
  }
  if (numbers) {
    characters += n;
  }
  if (symbols) {
    characters += s;
  }

  let num=0;
  for(let i=0;i<passLength;i++){
    num = Math.floor((Math.random())*(characters.length));
    password += characters[num];
  }

  answerField.textContent = password;
}