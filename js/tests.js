import GoodGuy from './GoodGuy';
import BadGuy from './BadGuy';



(function() {
  'use strict';
describe('Bad Guys',function(){
    describe('creating badGuys',function(){
      beforeEach(function(){
        window.x = new BadGuy();
      });
      it('should be an instance of BadGuy',function(){
        expect(x instanceof BadGuy).to.equal(true);
      });
      it('should have a name, health bar, damage value, war cry, and death message',function(){
        expect(BadGuy).to.have.property('badName');
        expect(BadGuy).to.have.property('healthBar');
        expect(BadGuy).to.have.property('dmg');
        expect(BadGuy).to.have.property('warCry');
        expect(BadGuy).to.have.property('deathMsg');
      });
    });
    describe('Bad Guys Dying',function(){
      it('should die when it has 0 health',function(){
        expect(BadGuy.health).to.be.below(1)
        expect();
      });
    });
  });

  describe('Good Guys',function(){
    describe('creating Good Guys',function(){
      beforeEach(function(){
        window.x = new GoodGuy();
      });

      it('should be an instance of GoodGuy',function(){
        expect(x instanceof GoodGuy).to.equal(true);
      });
      it('should have a name, health bar, damage value, war cry, and death message',function(){
        expect(GoodGuy).to.have.property('goodName');
        expect(GoodGuy).to.have.property('healthBar');
        expect(GoodGuy).to.have.property('dmg');
        expect(GoodGuy).to.have.property('warCry');
        expect(GoodGuy).to.have.property('deathMsg');
      });
    });
    describe('Good Guys Dying',function(){
      it('should die when it has 0 health',function(){
        expect(GoodGuy.health).to.be.below(1);
        expect();
      });
    });
  });

  // describe('',)
}());