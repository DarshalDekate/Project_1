function  problem6(inventory) {

    //document.write(inventory.length);
    const car = [];
    
    for (i = 0; i < inventory.length; i++) 
    {
          if(inventory[i].car_make=="Audi" || inventory[i].car_make=="BMW")
          {
           car.push(inventory[i]);  
          }
    }
    return car;
    } 
    module.exports = problem6;
