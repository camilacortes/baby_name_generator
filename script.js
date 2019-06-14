var result = document.getElementById('result');
var generateButton = document.getElementById('generate-button');
var form = document.getElementById('input-box');
var formInput = document.querySelector('input[type="text"]');
var girlRadioBtn = document.getElementById('girl-radio');
var boyRadioBtn = document.getElementById('boy-radio');


// generate button function 
generateButton.addEventListener("click", function(event) {
  displayRandomName();
});

//random name generator function 

function displayRandomName(){
  if(girlRadioBtn.checked){
    var randomGirlName = getRandElem(girlNames);
    var randomMiddleName = getRandElem(middleNames);
    result.innerHTML = randomGirlName + ' ' + randomMiddleName + ' ' + formInput.value;
    result.style.color = "red";
  }else if(boyRadioBtn.checked){
    var randomBoyName = getRandElem(boyNames);
    var randomMiddleName = getRandElem(middleNames);
    result.innerHTML = randomBoyName + ' ' + randomMiddleName;
    result.style.color = "blue";
  }
}

//functions that loop through elements in arrays 

function getRandElem(arr) {
  return arr[genRandNum(0, arr.length - 1)];
}

function genRandNum(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}


