   // you can store function inside object are called mothods.

   // ". this" - keyword= its refers the object itself.(used to access properties and methods)

const car = {
 brand: "toyota",
 start: function(){
    // console.log('car started');
    console.log(`${this.brand} is started`);
    
    
 }
 
}

     car.start();