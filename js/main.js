import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Guy from './GoodGuy';

console.log('Hello, World');

let Scene = function(options){
  this.text = options.text || 'text';
  this.sname = options.sname || 'defaultScene';
  this.bg = options.bg || 'URL Missing';
  this.enemies = options.enemies || 'none';
};
export {Scene};

let Continue = function(options){
  this.text = options.text || 'Continue...';
  this.class = options.class || '.continue';
  this.attribs = options.attribs || ['$defaultButton'];
};

let GameStart = function () {
  Scene({
    text: "You must find the holy Rails!",
    bg: 'images/Start.png',
  });

  this.options = x.options || ['Start Game','Credits','Quit Game'];
  this.start = function(badguy) {
    let arthur = new Guy('Arthur','For the holiest of Rails!','JavaScript...has been...DEFEATED!');
    let arthursMount = new Guy('Patsy');
  };
};

let startGame = $('#startGame');
startGame.on('click', function(){
  new Continue;
  let firstScene = new Scene({
    sname: 'Intro',
    text: 'Your quest? To find the Holy Rails! Many have tried, few have succeeded. But with the banner of JS to protect you, you have a non-0% chance of succeeding. If we did the math right. Good luck!',
    bg: 'URL',
  });
    $(document.body).css('background-size', 'cover');
    $(document.body).css('background-color', 'black');
    $(document.body).css('background-repeat', 'no-repeat');
    $('.Scene').css('background-image', 'url(./images/Start.jpg)');
});

let credits = $('#credits');
credits.on('click',function(){
  new Credits
});

let contButton = $('.continue');
contButton.on('click',function(){
  let LoadScene = function(sceneOptions) {
    new Scene(sceneOptions)
  };
});

// Bad Dudes
let watKnight = new Guy('Wat Knight','None can defeat the Wat Knight!','Tis only a flesh wound!');
let timTheWizard = new Guy('Tim the Wizard','Quite!','Death awaits you all with nasty, big, pointy teeth!');
let railBit = new Guy('The Holy Grailbbit!','nomnomnom','x.x');

//Bad Dudes Fighting
let watKnightFight = arthur.hit(1);
let timTheHitzard = arthur.hit(_.random(0,20));
let railBitHit = arthur.hit(_.random(0,45));

// Arthur Fighting
let arthurFight1 = watKnight.hit(_random(0,45));
let arthurFight2 = watKnight.hit(_random(0,45));
let arthurFight3 = watKnight.hit(_random(0,45));