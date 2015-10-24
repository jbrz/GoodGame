import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import GoodGuy from './GoodGuy';
import BadGuy from './BadGuy';

console.log('Hello, World');

let Scene = function(x){
  this.text = x.text;
  this.bg = x.bg;
  this.enemies = x.enemies || null;
};

let GameStart = function () {
  Scene({
    text: "You must find the holy Rails!",
    bg: 'images/Start.png',
  });

  this.options = x.options || ['Start Game','Credits','Quit Game'];
  this.start = function(badguy) {
    let arthur = new GoodGuy({
      dmg: 50,
      goodName: 'Arthur',
      warCry: 'For the holiest of Rails!',
      deathMsg: 'JavaScript...has been...DEFEATED!',
    });
    let arthursMount = new GoodGuy({
      dmg: 1,
      goodName: 'Patsy'
    });
  };
};

// startGame.on('click', function () {};