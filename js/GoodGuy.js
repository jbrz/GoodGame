import _ from 'underscore';

let Guy = function (name,warCry,deathMsg,health,hit) {
  this.guyName = name || 'Random Coconut Clapper';
  this.warCry = warCry || 'Clippity Clop';
  this.deathMsg = deathMsg || 'Forgive me, JS!';
  this.health = health || 100;
  this.hit = function (num){
    let hitDmg = num || 1;
    return this.health = this.health - hitDmg;
  };
};


export default Guy;