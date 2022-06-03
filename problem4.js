function  problem4(inventory) {

    
    const car_year = [];
    
    for (i = 0; i < inventory.length; i++) 
    {
           car_year.push(inventory[i].car_year);  
    }
    
    return car_year;
    
    }
    module.exports = problem4;
