
  function  problem1(inventory,id) {

    for (i = 0; i < inventory.length; i++) 
    {
      if(inventory[i].id==id)
        {
          //console.log("ID :-" + inventory[i].id );  
          //console.log("Car Make :-" + inventory[i].car_make ); 
          //console.log("Car Model :-" + inventory[i].car_model ); 
          //console.log("Car Year :-" + inventory[i].car_year ); 
          console.log("Car 33 is a" + inventory[i].id +"  "+ inventory[i].car_year +"  "+ inventory[i].car_make+"  "+inventory[i].car_model );
        }      
    }
   
  }
   // problem1(inventory,33);
   module.exports = problem1;
  