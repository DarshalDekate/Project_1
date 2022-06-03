function  problem1(inventory,id) {
    
    for (i = 0; i < inventory.length; i++) 
    {
      if(inventory[i].id==id)
        {
          
          console.log("Car 33 is a" + inventory[i].car_year +   inventory[i].car_make  + inventory[i].car_model );
        }      
    }
    }
    module.exports = problem1;
