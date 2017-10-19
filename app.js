'use strict';
/*
alert('Do you want to play a game? \nThey call it "How well do you know Richard?" \n\nThe only site that knows YOU CARE!');
alert('You will be given 5 questions about me to determine whether we should friends. \n\n Answer with a "yes" or "y" or with a "no" or "n"');

var user = prompt('Well Player, let\'s start by getting your name:');
console.log('User\'s name:', user);

var one = prompt('Given the option of mutant abilities, would I want to be able to fly?');
console.log('Question One Answer:', one);

one = one.toLowerCase();

if(one === 'yes' || one === 'y') {
  alert('Nah... I have a healthy fear of heights.');
} else if(one === 'no' || one === 'n'){
  alert('That\'s right! Flying is for squirrels and fish.');
};

var two = prompt('Am I tired?');
console.log('Question Two Answer:', two);

two = two.toLowerCase();

if(two === 'yes' || two === 'y') {
  alert('Yes! I\'m always tired. I take a car/boat/bus-ride to class and back.');
} else if(two === 'no' || two === 'n'){
  alert('That\'s incorrect. I\'m so tired. I survive on micro naps.');
};

var three = prompt('Are lagers my favorite beers?');
console.log('Question Three Answer:', three);

three = three.toLowerCase();

if(three === 'yes' || three === 'y') {
  alert('Nope. IPAs are the right PAs.');
} else if(three === 'no' || three === 'n'){
  alert('That\'s right! Let\'s go put back a few.');
};

var four = prompt('Should they reboot the tv series Firefly?');
console.log('Question Four Answer:', four);

four = four.toLowerCase();

if(four === 'yes' || four === 'y') {
  alert('They absolutely should.');
} else if(four === 'no' || four === 'n'){
  alert('Honestly, "No" shouldn\'t have even been a choice.');
};

var five = prompt('Is money the root of my happiness?');
console.log('Question Five Answer:', five);

five = five.toLowerCase();

if(five === 'yes' || five === 'y') {
  alert('Oh, for sho.');
} else if(five === 'no' || five === 'n'){
  alert('I guess it isn\'t everything...');
};


var number;
var counter = 1;

while(number !== 15){
  number = parseInt(prompt('About how many IPAs do you think until my body starts to work in reverse?'));

  if(number < 15) {
    alert(number + '? I can do better than that.');
    counter++;
  } else if(number > 24) {
    alert(number + ' IPAs is how I\'d die. You should guess a smaller number like, 15.');
  } else if(number > 15) {
    alert('I\'m probably getting closer to shitting myself at ' + number + ' IPAs.');
    counter++;
  } else if(number === NaN || number === null) {
    alert('Please enter a number.');
    counter++;
  }
}

console.log('Counter:', counter);

alert('Nailed it!' ,user);
*/
var user = prompt('What\'s your name?');
console.log('User\'s name:', user);

alert('So anyways ' + user + '. Soon it will be Halloween. I think it\'s a good idea to make a list of scary things to avoid this year. Thing\'s like Heights, Public Pooping, and Narcissists in Power.');

var list = ['Height\'s', ' Pooping in Public Places', ' Narcissists'];

for(var i = 0 ; i < list.length ; i++){
  var answer = prompt('What else should we add to the Scary List?');
  console.log('Each scary iteration:', answer);
  list.push(' ' + answer);
  if(i === 2) {
    break;
  }
}

alert('The Scary List is Complete! ' + list + '.');
