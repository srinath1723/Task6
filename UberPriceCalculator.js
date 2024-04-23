class UberPriceCalculator {
   
    constructor(baseprice, costPerKilometer) {
        this.baseprice = baseprice;
        this.costPerKilometer = costPerKilometer;
    }

    calculatePrice(distanceInKm) {
        return this.baseprice + (distanceInKm * this.costPerKilometer);
    }
}

const uberCalculator = new UberPriceCalculator(4, 2); 
const distanceTraveled = 26; 
const totalPrice = uberCalculator.calculatePrice(distanceTraveled);
console.log(totalPrice);
