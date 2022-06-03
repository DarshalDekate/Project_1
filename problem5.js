function  problem5(inventory) {
    const car = [];
    for (i = 0; i < inventory.length; i++) 
    {
          if(inventory[i].car_year>=2000)
          {
           car.push(inventory[i]);  
          }
    }
    return car;
    }
    module.exports = problem5;
