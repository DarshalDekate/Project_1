function  problem5(inventory) {
    const car = [];
    for (i = 0; i < inventory.length; i++) 
    {
          if(inventory[i].car_year<2000)
          {
           car.push(inventory[i]);  
          }
    }
    console.log(car.length);
    }
    module.exports = problem5;
