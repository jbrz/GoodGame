let GoodGuy = function (x) {
  this.health = 100;
  this.dmg = x.dmg || _.random(0,45);
  this.goodName = x.goodName;
  this.warCry = x.warCry || 'Clippity Clop';
  this.deathMsg = x.deathMsg;
  // this.HealthBar = function(){

  // };
  // this.hit = function (num) {
  //   let hitDmg = num || 1;
  //   return this.health = this.health - hitDmg;}
  // };

};


export default GoodGuy;