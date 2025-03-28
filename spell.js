import {general, computer, games, vegetables, colours, shapes} from './diction.js';


var wordList;

//This function is used to control the slected options from the game page. 
document.getElementById('def').style.display = 'flex';
function selector(){
	if(this.id == 'general'){
		wordList = general;
		const category = document.getElementById('category');
		category.innerHTML = 'GENERAL';
		life = 5;
		start();
		return;
		}
		if(this.id == 'computer'){
		wordList = computer;
		const category =document.getElementById('category');
		category.innerHTML = 'COMPUTER';
		life = 5;
        start();
		return;
		}
		if(this.id == 'restart'){
		life = 5;
		start();
		return;
		}
		
		if(this.id == 'games'){
		wordList = games;
		const category =document.getElementById('category');
		category.innerHTML = 'OUTDOOR GAME';
		life = 5;
		start();
		return;
		}
		
		if(this.id == 'vegetables'){
		wordList = vegetables;
		const category =document.getElementById('category');
		category.innerHTML = 'VEGETABLES';
		life = 5;
		start();
		return;
		}
		
		if(this.id == 'colours'){
		wordList = colours;
		const category =document.getElementById('category');
		category.innerHTML = 'COLOURS';
		life = 5;
		start();
		return;
		}
		
		if(this.id == 'shapes'){
		wordList = shapes;
		const category =document.getElementById('category');
		category.innerHTML = 'SHAPES';
		life = 5;
		start();
		return;
		}
		
		if(this.id == 'definition'){
		var definition = document.getElementById('def');
		//alert(definition.style.display);
		if(definition.style.display == 'flex'){
		definition.style.display = 'none';
		return
		}
		if(definition.style.display == 'none'){
		definition.style.display = 'flex';
		return
		}
		return;
		}
	}



var sideMenu = document.getElementsByClassName('side');

for (let x = 0; x < sideMenu.length; x++ ){
	sideMenu[x].addEventListener('click', selector);
	}

function menuclick(){
	const menu = document.getElementById('side-menu') 
	if(menu.style.display == 'none' ){
		menu.style.display = 'block';
		return;
		};
	if(menu.style.display == 'block' ){
		menu.style.display = 'none';
		return;
	};
		
	}



wordList = computer;

var life = 5;

function addme(){
document.getElementById('image').addEventListener('click', menuclick);
}

function endSound(){
var winAudio = new Audio('applause.mp3');
winAudio.play();
}

//Service worker function start here

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        'service_worker.js',
        {
          scope: './',
        }
      );
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

//Service worker function stops here


//the function is the whole programme.
function start() {
// This is to disable the tip display
var definition = document.getElementById('def');
//alert(definition.style.display);
definition.style.display = 'none';

var audio = new Audio('Snd/opening.mp3');
audio.play();
addme();

var lifeE = document.getElementById('life');

if(life < 16){
lifeE.innerHTML =  life;
}
else if(life < 20 && life > 15){
lifeE.innerHTML = 'Qn'
}
else if(life > 20){
lifeE.innerHTML ='Kg'
}

//var correctWord ;
var correctWord2 = [];
	
/*This first line of code are used to reset the codes*/
var main = document.getElementById('main-doc');
main.innerHTML = '';

document.getElementById('alphabet').innerHTML = '';
document.getElementById('wrong').innerHTML = '';
document.getElementById('g-over').style.display = 'none';
document.getElementById('g-over2').style.display = 'none';
document.getElementById('cover').style.display = 'none';
document.getElementById('side-menu').style.display = 'none';


/*This is a function that should start the program and select word*/	
var selectedWord= wordList[Math.floor(Math.random() *wordList.length)];
var selectedWord2

//This aspect is used to select either single word without defination or the one with definition.
if(typeof selectedWord == 'string'){
if(selectedWord.includes('(' || ')' || ']' || '[' )){
	start();
	return;
}
selectedWord2 = selectedWord.toUpperCase();
document.getElementById('def2').innerHTML = 'No definition!';
}
if(Array.isArray(selectedWord)){
if(selectedWord[0].includes('(' || ')' || ']' || '[' )){
	start();
	return
}
selectedWord2 = selectedWord[0].toUpperCase();
document.getElementById('def2').innerHTML = selectedWord[1];
}

/*This for loop is used to input element base on t
he length of the word selected at random*/
for (let x = 0; x < selectedWord2.length; x++ ) {
var newNode = document.createElement('input');
var att1 = document.createAttribute('maxlength');
att1.value = '1';
var att2 = document.createAttribute('readonly');
newNode.setAttributeNode(att2);
newNode.setAttributeNode(att1);
document.getElementById("main-doc").appendChild(newNode);

}

/*This loop is used to create the letter button*/
for (let i = 65; i < 91; i++) {

var letterButton = document.createElement('button');
var letter =  String.fromCharCode(i);
var node1 = document.createTextNode(letter);
letterButton.appendChild(node1);

var myId = document.createAttribute('id');
myId.value = letter;
letterButton.setAttributeNode(myId);
letterButton.addEventListener('click',myclick);
document.getElementById('alphabet').appendChild(letterButton);


}


/*Start function stops here*/

function keyboard(event) {
	if (event.key == 'H' ) {
	alert(event.key);
	}
	else {
		alert(event.code)
	}
		
}

/*This function is to select the letter, 
check if its in the selected word and updates the answer box with the letter.*/

var bool = 'no';
var wrongLetters =[];
var wrongE = document.getElementById('wrong');
var typedLetter = [];
var correctWordBoxes = document.getElementsByTagName('input')
var correctWordLetters = [];

//This is to handle special character
//1
if(selectedWord2.includes('_')){
for (let i = 0; i < selectedWord2.length; i++) {
const letter = selectedWord2[i];
if (letter == '_') {
correctWordBoxes[i].value = letter;
correctWordBoxes[i].style.border = '0px';
}
}
}

//2
if(selectedWord2.includes(' ')){
for (let i = 0; i < selectedWord2.length; i++) {
const letter = selectedWord2[i];
if (letter == ' ') {
correctWordBoxes[i].value = letter;
correctWordBoxes[i].style.border = '0px';
}
}
}

//3
if(selectedWord2.includes('-')){
for (let i = 0; i < selectedWord2.length; i++) {
const letter = selectedWord2[i];
if (letter == '-') {
correctWordBoxes[i].value = letter;
correctWordBoxes[i].style.border = '0px';
}
}
}
//Special character issue ends here!


function myclick(event) {
if (typedLetter.includes(event.target.id) == true) {
return
}

var selectedLetter = event.target.id;
var selectedBoxes = document.getElementsByTagName('input');
var selectedLetter2 = event.target;

selectedLetter2.style.color = 'rgba(255, 155, 26, 0.3)'
selectedLetter2.style.backgroundColor = 'rgba(255, 155, 26, 0.4)'



for (let i = 0; i < selectedWord2.length; i++) {
const letter = selectedWord2[i];

if (selectedLetter == letter) {
var correctAudio = new Audio('thats-correct.mp3');
correctAudio.play();
selectedBoxes[i].value = letter;
//alert(selectedBoxes[i].value);
bool = 'yes';
typedLetter.push(selectedLetter);
for (let i = 0; i < selectedWord2.length; i++) {
var cWord = correctWordBoxes[i];
correctWordLetters.push(cWord.value);
};

var newList = correctWordLetters.join('');

if (newList == selectedWord2) {
document.getElementById('cover').style.display = 'block';
document.getElementById('cover').style.backgroundColor = 'green';
document.getElementById('g-over2').style.display = 'block';
life += 1;

//var winAudio = new Audio('applause.mp3');
//winAudio.play();
setTimeout(endSound, 2000);
}
cWord.length =0;
correctWordLetters.length = 0;
}
	
}
if (bool == 'no' && wrongLetters.length < life){
var wrongAudio = new Audio('wrong.mp3');
wrongAudio.play();
typedLetter.push(selectedLetter);
wrongLetters.push(' '+selectedLetter);
wrongE.innerHTML = 'Incorrect: '+ wrongLetters;

}

if(wrongLetters.length == life){
var lossAudio = new Audio('loss.mp3');
lossAudio.play();
document.getElementById('cover').style.display = 'block';
document.getElementById('cover').style.backgroundColor = 'red';
document.getElementById('w-word').innerHTML = '"' + selectedWord2 +'"'
document.getElementById('g-over').style.display = 'block';
life = 5;

}

bool = 'no';
}





}

globalThis.start = start;

registerServiceWorker();

start();
