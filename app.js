'use strict';

alert('WoooOOOooOOOoo, Guessing Game Time! \nHow well do you know This Guy?! \n\nThe only site that knows YOU CARE!');
alert('You will be given 5 questions about me to determine whether we should be friends. \n\n Please answer with a "yes" or "y" or with a "no" or "n"');

var one = prompt('Given the option of mutant abilities, would I want to be able to fly?');
console.log('Question One Answer:', one);

one = one.toLowerCase();

if(one === 'yes' || one === 'y') {
  alert('No! I have a healthy fear of heights.');
} else if(one === 'no' || one === 'n'){
  alert('That\'s right! Flying is for squirrels and fish.');
};

var two = prompt('Am I tired?');
console.log('Question Two Answer:', two);

two = two.toLowerCase();

if(two === 'yes' || two === 'y') {
  alert('Yes! I\'m always tired. I take a car/boat/bus-ride to class and back every day!');
} else if(two === 'no' || two === 'n'){
  alert('That\'s incorrect. I\'m so tired. I survive on thirty 10 second power naps every day.');
};

var three = prompt('Are lagers my favorite beers?');
console.log('Question Three Answer:', three);

three = three.toLowerCase();

if(three === 'yes' || three === 'y') {
  alert('Nope. IPAs are the right PAs.');
} else if(three === 'no' || three === 'n'){
  alert('That\'s right! IPAs for me.');
};

var four = prompt('Should they reboot the tv series Firefly?');
console.log('Question Four Answer:', four);

four = four.toLowerCase();

if(four === 'yes' || four === 'y') {
  alert('YES! RIGHT?!');
} else if(four === 'no' || four === 'n'){
  alert('Who hurt you?');
};

var five = prompt('Is money the root of my happiness?');
console.log('Question Five Answer:', five);

five = five.toLowerCase();

if(five === 'yes' || five === 'y') {
  alert('Oh, for sho.');
} else if(five === 'no' || five === 'n'){
  alert('Don\'t tell my lady, but yes, money is where it\'s at.');
};
