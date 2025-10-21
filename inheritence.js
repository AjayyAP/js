//  one class can inherits properties and methods from another class(by using 'extends' keyword )


class Animal {
    constructor(name) { // initialization
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a sound`);

    }
}


//derived class
class dog extends Animal {
    constructor(name, breed) {
        super(name) // calls the parent constructor
        this.breed = breed;
    }
    //override speek method (polymorphism)
    speak() {
        console.log(`${this.name}-${this.breed} barks`);

    }
}
        const Dog = new dog("Rolex","german shiped");
        Dog.speak()
