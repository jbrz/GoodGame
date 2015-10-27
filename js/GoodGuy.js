let Guy = function (name,warCry,deathMsg) {
  this.guyName = name || 'Random Coconut Clapper';
  this.warCry = warCry || 'Clippity Clop';
  this.deathMsg = deathMsg || 'Forgive me, JS!';
  this.health = 100;
  this.hit = function (num){
    let hitDmg = num || 1;
    return this.health = this.health - hitDmg;
  };
};


export default Guy;