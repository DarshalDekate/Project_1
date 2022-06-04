function  problem6(inventory) {    
    const car = [];  
    for (i = 0; i < inventory.length; i++) 
    {
          if(inventory[i].car_make=="Audi" || inventory[i].car_make=="BMW")
          {
           car.push(inventory[i]);  
          }
    }
    console.log(JSON.stringify(car)+" ");
    } 
    module.exports = problem6;
