/* 
closures-notes.js
Olivia Chang
July 27 2016
Notes from Udacity's Object-Oriented Javascript course
*/

var hero = aHero();
var newSaga = function() {
	var foil = aFoil();
	var saga = function(){
		var deed = aDeed();
		log(hero+deed+foil);
	}
	saga(); 
	saga();
	/* 
	In order to retain access to the saga function objecs after newSaga calls have been returned,
	there are a few ways to accomplish this.
	- passing saga to setTimout
	- returning saga from newSaga
	- saving saga to a global var
	*/
}
newSaga();
newSaga();