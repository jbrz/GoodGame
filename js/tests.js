import Guy from './GoodGuy';
import {Scene} from "./main";
import _ from 'underscore';


(function() {
  'use strict';

  describe('Scenes',function() {
    describe('creating a new scene',function(){
      it('should have a name, text, background image, and list of enemies',function(){
        let newScene = new Scene();
        console.log(newScene);
        expect(newScene).to.have.property('sName');
        expect(newScene).to.have.property('text');
        expect(newScene).to.have.property('bg');
        expect(newScene).to.have.property('enemies');
      });
    });
  });

  describe('Guys',function(){
    describe('creating badGuys',function(){
      beforeEach(function(){
        window.dude = new Guy();
      });
      it('should be an instance of Guy',function(){
        expect(dude instanceof Guy).to.equal(true);
      });
      it('should have a name, health, war cry, and death message',function(){
        expect(badDude).to.have.property('guyName');
        expect(badDude).to.have.property('health');
        expect(badDude).to.have.property('warCry');
        expect(badDude).to.have.property('deathMsg');
      });
    });
    // describe('Bad Guys Dying',function(){
    //   it('should die when it has 0 health',function(){
    //     expect(BadGuy.health).to.be.below(1)
    //     expect();
    //   });
    // });
  });
}());