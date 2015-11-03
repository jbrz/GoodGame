import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Guy from './GoodGuy';
import Scene from './Scene';

(function load(){
  window.onload = function(){
    $('.Scene').addClass('hidden');
    $('.endgame').addClass('hidden');
  };
}());

//GoodGuys
let arthur = new Guy('Arthur','For the holiest of Rails!','JavaScript...has been...DEFEATED!',100);
let arthursMount = new Guy('Patsy');
// Bad Dudes
let watKnight = new Guy('Wat Knight','None can defeat the Wat Knight!','Tis only a flesh wound!',100);
let timTheWizard = new Guy('Tim the Wizard','Quite!','Death awaits you all with nasty, big, pointy teeth!',125);
let railBit = new Guy('The Holy Railbbit!','nomnomnom','x.x',150);

// Health
  let goodHealth = $('.goodHealth');
  let badHealth = $('.badHealth');

// Fighting
  //Bad Dudes Fighting
    let watKnightFight = arthur.hit(1);
    let timTheHitzard = arthur.hit(_.random(15,35));
    let railBitHit = arthur.hit(_.random(25,45));

  // Arthur Buttons
    let arthurFight1 = $('.afight1');
    arthurFight1.on('click', function(){
      let num = _.random(15,50);
      watKnight.hit(num);
      arthur.hit(1);
      console.log(arthur.health);
      if (arthur.health <= 0) {
        lostgame();
      } else if (watKnight.health <= 0) {
        badHealth.text(watKnight.health);        
        alert('You won!')
        $('.Continue').removeClass('hidden');
        $('.afight1').addClass('hidden');
      } else {
        goodHealth.text(arthur.health);
        badHealth.text(watKnight.health);
      };
    });

    let arthurFight2 = $('.afight2');
    arthurFight2.on('click', function(){
      let num = _.random(15,50);
      timTheWizard.hit(num);
      arthur.hit(_.random(15,35));
      if (arthur.health <= 0) {
        lostgame();
      } else if (timTheWizard.health <= 0) {
        badHealth.text(timTheWizard.health);
        alert('You won!');
        $('.Continue').removeClass('hidden');
        $('.afight2').addClass('hidden');
      } else {
        goodHealth.text(arthur.health);
        badHealth.text(timTheWizard.health);
      };
    });

    let arthurFight3 = $('.afight3');
    arthurFight3.on('click', function(){
      let num = _.random(35,60);
      railBit.hit(num);
      arthur.hit(_.random(25,40));
      if (arthur.health <= 0) {
        lostgame();
      } else if (railBit.health <= 0) {
        badHealth.text(railBit.health);
        alert('You won!');
        $('.Continue').removeClass('hidden');
        $('.afight3').addClass('hidden');
      } else {
        goodHealth.text(arthur.health);
        badHealth.text(railBit.health);
      };
    });

// Menu Buttons
  // Start Button
    let startGame = $('#startGame');
    startGame.on('click', function(){
      $('.endgame').addClass('hidden');
      $('.start').addClass('hidden');
      $('.attack').addClass('hidden');
      $('.Scene').removeClass('hidden');
      $('.Continue').removeClass('hidden');
      let firstScene = new Scene('Your quest? To find the Holy Rails! Many have tried, Brit has succeeded. But with the banner of JS to protect you, you have a non-0% chance of succeeding. If we did the math right. Good luck!','Intro','./images/Start.jpg');
      $('.Stext').text(firstScene.text);
      $('.Scene').css('background-image', './images/Start.jpg');
    });

  // Credits
    let credits = $('#credits');
    credits.on('click',function(){
      let credScene = new Scene('<ul class="credits"><li>Me</li><li>Tim&JD</li><li>My Roommate, who suffered through many long days of blasting music and confusing rants about javascript</li></ul>','Credits');
      $('.start').addClass('hidden');
      $('.Scene').removeClass('hidden');
      $('.badGuy').addClass('hidden');
      $('.goodGuy').addClass('hidden');
      $('.Stext').text(credScene.sname);
      $('.Stext').html(credScene.text);
      $('.Continue').removeClass('hidden');
    });

// Quit Button
  let quit = $('#quitGame');
  quit.on('click', function(){
    let quitScene = new Scene("Sorry old chap, you've failed us all","loser",'./images/loser.jpeg');
    $('.start').addClass('hidden');
    $('.endgame').removeClass('hidden');
    $('.win').addClass('hidden');
    $('.lose').removeClass('hidden');
    alert('This might be coded in javascript, but your loss means Rails is victorious :(');
  });
  
  let lostgame = function(){
    let lostScene = new Scene("Sorry old chap, you've failed us all","loser",'./images/loser.jpeg');
    watKnight.health = 100;
    timTheWizard.health = 125;
    railBit.health = 150;
    $('.start').addClass('hidden');
    $('.Scene').addClass('hidden');
    $('.goodGuy').addClass('hidden');
    $('.badGuy').addClass('hidden');
    $('.endgame').removeClass('hidden');
    $('.win').addClass('hidden');
    $('.lose').removeClass('hidden');
    alert('This might be coded in javascript, but your loss means Rails is victorious :(');
  };

  let playAgain = $('.playAgain');
  let nope = $('.nope');
  playAgain.on('click', function(){
    startGame.click();
    $('.Continue').removeClass('hidden');
  });

  nope.on('click', function(){
    alert('NEVER GIVE UP.  NEVER SURRENDER!');
  startGame.click();
  });

// Continue Button
  let cont = $('.Continue');
  cont.on('click',function(){
    if (watKnight.health <= 0 && timTheWizard.health > 0) {
      arthur.health = 100;
      let timScene = new Scene('*WOOOSH* with a flash of white hot fire, Tim the Wizard appears before you, spouting gibberish that sounds like php - but also promising the location of the Holy Rail, on one condition: that you best him in combat!','Fight Tim');
      $('.Continue').addClass('hidden');
      $('.Scene').removeClass('hidden');
      $('.afight2').removeClass('hidden');
      $('.goodGuy').removeClass('hidden');
      $('.badGuy').removeClass('hidden');
      $('.btext').text(timScene.text);
      $('.bname').text(timScene.sname);
      $('.goodHealth').text(arthur.health);
      $('.badHealth').text(timTheWizard.health);
      $('.Scene').css('background-image', './images/TimTheWizard.png');
    } else if (timTheWizard.health <= 0 && railBit.health > 0) {
      arthur.health = 100;
      let bitScene = new Scene('*nomnomNOM* - you hear the sounds of furious eating as you enter the caves of SQL.  The culprit, you find, is a cute-looking, fluffy bunny - only once it sees you, it charges, its teeth bared in a pattern that reminds you of mindless data entry.','Fight the RailBit','./images/railbg.jpg');
      $('.Scene').css('background-image','./images/rabbit.jpg');
      $('.Continue').addClass('hidden');
      $('.Scene').removeClass('hidden');
      $('.afight3').removeClass('hidden');
      $('.goodGuy').removeClass('hidden');
      $('.badGuy').removeClass('hidden');
      $('.btext').text(bitScene.text);
      $('.bname').text(bitScene.sname);
      $('.goodHealth').text(arthur.health);
      $('.badHealth').text(railBit.health);
    } else if (railBit.health <= 0) {
      arthur.health = 100;
      let victoryScene = new Scene('You did it.  The RailBit was defeated, the Holy Rail is now yours!','Victory','./images/victory.png');
      $('.Continue').addClass('hidden');
      $('.badGuy').addClass('hidden');
      $('.goodGuy')
      $('.Stext').text(victoryScene.text);
      $('.Scene').css('background-image','./images/victory.png');
      setTimeout(function(){
        $('.Scene').addClass('hidden');
        $('.endgame').removeClass('hidden');
        $('.win').removeClass('hidden');
        $('.lose').addClass('hidden');
        credits.click();
      },5000);
    } else {
      arthur.health = 100;
      let watScene = new Scene('the watKnight guards the bridge out of the forest.  It is said he cannot be bested in combat.  You will have to be the first...','Fight the watKnight!','./images/watbg.jpg');
      $('.Stext').text('');
      $('.Continue').addClass('hidden');
      $('.Scene').removeClass('hidden');
      $('.afight1').removeClass('hidden');
      $('.goodGuy').removeClass('hidden');
      $('.gtext').text('You are Arthur, King of the Britons. None can defeat you (usually)!');
      $('.gname').text('Arthur, King of the Britons, Lord of the British Isles.')
      $('.badGuy').removeClass('hidden');
      $('.btext').text(watScene.text);
      $('.bname').text(watScene.sname);
      $('.goodHealth').text(arthur.health);
      $('.badHealth').text(watKnight.health);      $('.Scene').css('background-image', './images/Black_Knight.jpg');
    };
  });


console.log('Hello, World');