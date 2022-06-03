function problem3(inventory){
    let carModels = [];
    for (i = 0; i < inventory.length; i++) {
        carModels.push(inventory[i].car_model)
    }
    carModels.sort();
    console.log(carModels);
    }
    module.exports = problem3;
