var wordList = ['book','father', 'mother', 'uncle', 'pedestrian', 'kingdom', 'letter', 'exercise', 'dangerous', 'foreign', 'hammer', 'height', 'island', 'kitchen', 'neighbour', 'door', 'together', 'born', 'continue', 'knee', 'feed', 'when', 'soup', 'fill', 'since', 'train', 'elephant', 'remove', 'private', 'ladder', 'seven', 'offer', 'dangerous', 'though', 'speak', 'burn', 'machine', 'sentence', 'love', 'most', 'bone', 'life', 'area', 'difficult', 'very', 'milk', 'hello', 'stay', 'period', 'wild', 'skill', 'crash', 'star', 'cloth', 'winter', 'float', 'male', 'opposite', 'beautiful', 'example', 'petrol', 'neither', 'signal', 'bell', 'shelf', 'woman', 'what', 'gold', 'start', 'good', 'hear', 'round', 'lesson', 'false', 'short', 'noble', 'angry', 'restaurant', 'behave', 'more', 'station', 'tonight', 'appear', 'island', 'serve', 'fast', 'flag', 'notice', 'active', 'still', 'help', 'zero', 'form', 'other', 'rush', 'hour', 'hurry', 'pull', 'smile', 'mention', 'sell', 'tool', 'promise', 'such', 'exact', 'taste', 'tomorrow', 'potato', 'coat', 'first', 'fruit', 'pretty', 'knife', 'that', 'stomach', 'fever', 'black', 'free', 'back', 'pencil', 'card', 'sharp', 'uncle', 'partner', 'large', 'blood', 'rainy', 'shoulder', 'fire', 'count', 'depend', 'special', 'voice', 'east', 'discover', 'point', 'attack', 'safe', 'sail', 'prize', 'both', 'daughter', 'hungry', 'pass', 'party', 'care', 'model', 'lazy', 'surprise', 'light', 'deer', 'face', 'collect', 'boil', 'fear', 'public', 'dance', 'eight', 'enjoy', 'find', 'rent', 'cloud', 'brown', 'cake', 'fork', 'laugh', 'double', 'between', 'game', 'general', 'fail', 'expensive', 'ever', 'page', 'poison', 'five', 'rule', 'person', 'bright', 'lend', 'answer', 'grandfather', 'corn', 'student', 'exercise', 'think', 'smell', 'sure', 'record', 'dream', 'warm', 'control', 'head', 'sunny', 'front', 'expect', 'type', 'hotel', 'choice', 'never', 'nearly', 'heart', 'border', 'education', 'electric', 'west', 'until', 'female', 'finish', 'subject', 'drop', 'take', 'copper', 'kill', 'kind', 'white', 'make', 'close', 'catch', 'under', 'circle', 'garden', 'colour', 'nation', 'famous', 'city', 'telephone', 'market', 'suitable', 'invent', 'possible', 'steam', 'friendly', 'clock', 'much', 'four', 'fall', 'autumn', 'forgive', 'lock', 'drive', 'total', 'trust', 'over', 'cross', 'ship', 'shoe', 'tidy', 'horse', 'course', 'holiday', 'seem', 'chance', 'will', 'sword', 'rain', 'thick', 'business', 'behind', 'hobby', 'spring', 'below', 'arrive', 'careful', 'spend', 'paint', 'everyone', 'newspaper', 'similar', 'begin', 'common', 'glad', 'anytime', 'coffee', 'bird', 'ready', 'marry', 'great', 'play', 'bleed', 'decrease', 'green', 'tree', 'want', 'heavy', 'your', 'week', 'shade', 'same', 'remind', 'pour', 'feel', 'hate', 'hole', 'sleep', 'table', 'photograph', 'chair', 'into', 'every', 'spread', 'letter', 'country', 'deep', 'strong', 'result', 'furniture', 'side', 'read', 'therefore', 'cool', 'past', 'popular', 'neck', 'gray', 'where', 'piece', 'must', 'goat', 'world', 'always', 'fresh', 'wedding', 'outside', 'size', 'drink', 'blue', 'rude', 'stamp', 'enter', 'fine', 'chicken', 'tram', 'parent', 'million', 'dress', 'children', 'school', 'happy', 'threat', 'above', 'healthy', 'teach', 'park', 'radio', 'salt', 'prince', 'about', 'support', 'yell', 'team', 'equal', 'different', 'goodbye', 'third', 'hospital', 'juice', 'excited', 'everybody', 'useful', 'vegetable', 'climb', 'single', 'protect', 'pepper', 'computer', 'sometimes', 'wine', 'certain', 'flower', 'water', 'poor', 'corner', 'plenty', 'freeze', 'path', 'change', 'some', 'visit', 'borrow', 'stone', 'event', 'step', 'need', 'boat', 'mother', 'show', 'dirty', 'hand', 'terrible', 'lonely', 'part', 'before', 'aunt', 'enemy', 'complete', 'sorry', 'rice', 'shadow', 'punish', 'jump', 'fold', 'bottle', 'gift', 'perfect', 'study', 'twice', 'summer', 'contain', 'beer', 'central', 'method', 'thing', 'scissors', 'meat', 'branch', 'spoon', 'quiet', 'only', 'breakfast', 'usually', 'sheep', 'nose', 'build', 'hundred', 'silence', 'height', 'else', 'call', 'north', 'room', 'shine', 'pleased', 'after', 'sudden', 'often', 'grass', 'increase', 'needle', 'slow', 'should', 'chase', 'list', 'dark', 'escape', 'modern', 'brush', 'basket', 'nature', 'ring', 'well', 'title', 'busy', 'ruler', 'save', 'mountain', 'dust', 'peace', 'know', 'produce', 'plate', 'news', 'explain', 'entrance', 'farm', 'amount', 'move', 'birth', 'each', 'next', 'without', 'waste', 'mistake', 'coin', 'king', 'stop', 'land', 'remember', 'mean', 'ride', 'freedom', 'welcome', 'taxi', 'sweet', 'silly', 'have', 'middle', 'main', 'another', 'join', 'luck', 'rock', 'sick', 'home', 'father', 'half', 'fact', 'hard', 'receive', 'than', 'future', 'space', 'picture', 'decide', 'board', 'bite', 'library', 'either', 'morning', 'tall', 'word', 'nothing', 'town', 'window', 'skin', 'book', 'reply', 'cloudy', 'store', 'raise', 'office', 'tear', 'down', 'search', 'travel', 'miss', 'bridge', 'something', 'thin', 'cost', 'finger', 'late', 'lower', 'skirt', 'bear', 'jelly', 'breathe', 'pupil', 'unit', 'grave', 'send', 'many', 'ugly', 'hammer', 'forget', 'meal', 'correct', 'wish', 'weak', 'repeat', 'desk', 'even', 'brother', 'talk', 'pick', 'hair', 'sport', 'football', 'successful', 'were', 'with', 'bean', 'quick', 'square', 'open', 'medicine', 'order', 'give', 'strange', 'clothes', 'earth', 'knock', 'wife', 'cheap', 'fight', 'obey', 'slip', 'brave', 'gentleman', 'enough', 'money', 'draw', 'reach', 'evening', 'tennis', 'shoot', 'ground', 'walk', 'less', 'cupboard', 'while', 'invite', 'press', 'child', 'body', 'music', 'minute', 'candle', 'glass', 'speed', 'number', 'problem', 'direction', 'turn', 'leave', 'activity', 'foot', 'hope', 'weather', 'idea', 'afraid', 'kitchen', 'heaven', 'night', 'duty', 'anyone', 'gate', 'none', 'friend', 'their', 'object', 'sand', 'bank', 'funny', 'lose', 'pink', 'already', 'fish', 'sink', 'best', 'lamp', 'lately', 'forest', 'careless', 'develop', 'empty', 'comb', 'destroy', 'look', 'meet', 'hold', 'quite', 'mouth', 'people', 'here', 'long', 'measure', 'duck', 'shout', 'rest', 'sheet', 'second', 'rich', 'near', 'piano', 'which', 'three', 'nine', 'house', 'orange', 'carry', 'anything', 'spell', 'street', 'bring', 'hill', 'story', 'queen', 'examination', 'clever', 'understand', 'hide', 'young', 'village', 'just', 'little', 'true', 'earn', 'ball', 'bedroom', 'wash', 'except', 'cover', 'place', 'seat', 'early', 'hurt', 'steal', 'usual', 'pain', 'silver', 'several', 'further', 'moment', 'wait', 'wire', 'come', 'sister', 'provide', 'base', 'along', 'bottom', 'force', 'please', 'real', 'price', 'pocket', 'yesterday', 'from', 'birthday', 'smoke', 'noise', 'yard', 'today', 'comfortable', 'husband', 'happen', 'cheese', 'grandmother', 'left', 'plastic', 'learn', 'push', 'prison', 'listen', 'clear', 'these', 'lion', 'cold', 'live', 'proper', 'besides', 'ocean', 'work', 'easy', 'wide', 'case', 'name', 'snow', 'there', 'better', 'plane', 'storm', 'break', 'around', 'flat', 'mind', 'paper', 'inside', 'neighbour', 'prevent', 'soon', 'shop', 'last', 'century', 'weight', 'keep', 'agree', 'extremely', 'report', 'member', 'food', 'pool', 'present', 'foreign', 'rubber', 'shirt', 'science', 'apple', 'bowl', 'wonder', 'wise', 'plant', 'swim', 'sing', 'dead', 'question', 'road', 'important', 'wind', 'wear', 'moon', 'repair', 'sugar', 'shake', 'worry', 'return', 'family', 'soap', 'sound', 'baby', 'pair', 'lady', 'wheel', 'group', 'test', 'tell', 'south', 'stand', 'structure', 'fool', 'then', 'leaf', 'rise', 'like', 'substance', 'this', 'alone', 'dinner', 'across', 'power', 'hall', 'introduce', 'wake', 'compare', 'sock', 'condition', 'small', 'stupid', 'iron', 'really', 'effect', 'soft', 'police', 'clean', 'position', 'grow', 'high', 'nice', 'month', 'army', 'someone', 'matter', 'again', 'film', 'full', 'bath', 'lead', 'right', 'floor', 'flour', 'cook', 'touch', 'tooth', 'probably', 'block', 'simple', 'blow', 'fault', 'bread', 'class', 'chocolate', 'television', 'polite', 'away', 'monkey', 'dish', 'watch', 'mark', 'share', 'trouble', 'length', 'hers', 'narrow', 'choose', 'shape' ];


function start() {

var correctWord ;
var correctWord2 = [];
	
/*This first line of code are used to reset the codes*/
var me = document.getElementById('main-doc')
me.innerHTML = '';

document.getElementById('alphabet').innerHTML = '';
document.getElementById('wrong').innerHTML = '';
document.getElementById('g-over').style.display = 'none';
document.getElementById('g-over2').style.display = 'none';
document.getElementById('cover').style.display = 'none';

/*This is a function that should start the program*/	
var selectedWord = wordList[Math.floor(Math.random() *wordList.length)];
selectedWord = selectedWord.toUpperCase()

/*This for loop is used to input element base on t
he length of the word selected at random*/
for (let x = 0; x < selectedWord.length; x++ ) {
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
var wrong =[];
var wrongE =document.getElementById('wrong');
var typedLetter = [];
var correctWord = document.getElementsByTagName('input')


function myclick(event) {
if (typedLetter.includes(event.target.id) == true) {
return
}


var selectedLetter = event.target.id;
var selectedBoxes = document.getElementsByTagName('input');
var selectedLetter2 = event.target;

selectedLetter2.style.color = 'rgba(255, 155, 26, 0.3)'
selectedLetter2.style.backgroundColor = 'rgba(255, 155, 26, 0.4)'



for (let i = 0; i < selectedWord.length; i++) {
const letter = selectedWord[i];

if (selectedLetter == letter) {
selectedBoxes[i].value = letter;
bool = 'yes';
typedLetter.push(selectedLetter);
for (let i = 0; i < selectedWord.length; i++) {
var cWord = correctWord[i];
correctWord2.push(cWord.value);
};

var newList = correctWord2.join('');

if (newList == selectedWord) {
document.getElementById('cover').style.display = 'block';
document.getElementById('cover').style.backgroundColor = 'green';
document.getElementById('g-over2').style.display = 'block';
}
cWord.length =0;
correctWord2.length = 0;
}
	
}
if (bool == 'no' && wrong.length < 7){
typedLetter.push(selectedLetter);
wrong.push(' '+selectedLetter);
wrongE.innerHTML = 'Incorrect: '+ wrong;

}

if(wrong.length == 7){
document.getElementById('cover').style.display = 'block';
document.getElementById('cover').style.backgroundColor = 'red';
document.getElementById('w-word').innerHTML = '"' + selectedWord +'"'
document.getElementById('g-over').style.display = 'block';

}

bool = 'no';
}


}

start();
