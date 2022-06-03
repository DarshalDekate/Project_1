var problem5 = require('./problem5.js');
var inventory = require('./inventary.js');
var car =problem5(inventory);
for (i = 0; i < car.length; i++) 
{
	console.log(car[i].car_year +" ");
}
