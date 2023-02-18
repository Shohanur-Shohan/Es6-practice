class Parent{
    constructor(){
        this.parentName = "Shohan";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }

    fullName(){
        return this.name + " " + this.parentName;
    }
}

const baby = new Child("tuhin");
const baby2 = new Child("Limon");
console.log(baby);
console.log(baby.fullName());