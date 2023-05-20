class Home {
    constructor(rooms, bathrooms, squareFeet){
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.squareFeet = squareFeet;
    }

   getInfo() {
    return `This home has ${this.rooms} rooms, ${this.bathrooms} bathrooms and is ${this.squareFeet} square feet.`;
   }
}

class SingleFamilyHome extends Home {
    constructor(rooms, bathrooms, squareFeet, yardSize){
        super(rooms, bathrooms, squareFeet);
        this.yardSize = yardSize;
    }

    getInfo(){
        return `${super.getInfo()} It has a ${this.yardSize} square foot yard`;
    }

}  

class Apartment extends Home {
    constructor(rooms, bathrooms, squareFeet, floorUnit){
        super(rooms, bathrooms, squareFeet);
        this.floorUnit = floorUnit;
    }

    getInfo(){
        return `${super.getInfo()} It is on floor ${this.floorUnit}`
    }
}


const d = new Home(2,2,3)
console.log(d.getInfo())