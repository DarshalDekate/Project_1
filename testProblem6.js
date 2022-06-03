var problem6 = require('./problem6.js');
var inventory = require('./inventary.js');
var car =problem6(inventory);
for (i = 0; i < car.length; i++) 
{
	console.log(car[i].car_make +" ");
}
