(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BadGuy = function BadGuy(x) {

  this.health = 100;
  this.dmg = x.dmg || _.random(0, 45);
  this.badName = x.badName;
  this.warCry = x.warCry;
  this.deathMsg = x.deathMsg;
  // this.HealthBar = function(){

  // };
  // this.hit = function (num) {
  //   let hitPoints = num || 10;
  //   return this.health = this.health - hitPoints;
  // };
};

exports["default"] = BadGuy;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var GoodGuy = function GoodGuy(x) {
  this.health = 100;
  this.dmg = x.dmg || _.random(0, 45);
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

exports['default'] = GoodGuy;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _GoodGuy = require('./GoodGuy');

var _GoodGuy2 = _interopRequireDefault(_GoodGuy);

var _BadGuy = require('./BadGuy');

var _BadGuy2 = _interopRequireDefault(_BadGuy);

(function () {
  'use strict';
  describe('Bad Guys', function () {
    describe('creating badGuys', function () {
      beforeEach(function () {
        window.x = new _BadGuy2['default']();
      });
      it('should be an instance of BadGuy', function () {
        expect(x instanceof _BadGuy2['default']).to.equal(true);
      });
      it('should have a name, health bar, damage value, war cry, and death message', function () {
        expect(_BadGuy2['default']).to.have.property('badName');
        expect(_BadGuy2['default']).to.have.property('healthBar');
        expect(_BadGuy2['default']).to.have.property('dmg');
        expect(_BadGuy2['default']).to.have.property('warCry');
        expect(_BadGuy2['default']).to.have.property('deathMsg');
      });
    });
    describe('Bad Guys Dying', function () {
      it('should die when it has 0 health', function () {
        expect(_BadGuy2['default'].health).to.be.below(1);
        expect();
      });
    });
  });

  describe('Good Guys', function () {
    describe('creating Good Guys', function () {
      beforeEach(function () {
        window.x = new _GoodGuy2['default']();
      });

      it('should be an instance of GoodGuy', function () {
        expect(x instanceof _GoodGuy2['default']).to.equal(true);
      });
      it('should have a name, health bar, damage value, war cry, and death message', function () {
        expect(_GoodGuy2['default']).to.have.property('goodName');
        expect(_GoodGuy2['default']).to.have.property('healthBar');
        expect(_GoodGuy2['default']).to.have.property('dmg');
        expect(_GoodGuy2['default']).to.have.property('warCry');
        expect(_GoodGuy2['default']).to.have.property('deathMsg');
      });
    });
    describe('Good Guys Dying', function () {
      it('should die when it has 0 health', function () {
        expect(_GoodGuy2['default'].health).to.be.below(1);
        expect();
      });
    });
  });

  // describe('',)
})();

},{"./BadGuy":1,"./GoodGuy":2}]},{},[3])


//# sourceMappingURL=tests.js.map
