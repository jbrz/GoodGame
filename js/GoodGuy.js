let GoodGuy = function (x) {

  this.health = 100;
  this.dmg = _.random(0,45);
  this.goodName = x.goodName;
  this.warCry = x.warCry;
  this.deathMsg = x.deathMsg;
  this.HealthBar = function(){

  };
  // this.hit = function (num) {
  //   let hitPoints = num || 10;
  //   return this.health = this.health - hitPoints;
  // };

};


export default GoodGuy;