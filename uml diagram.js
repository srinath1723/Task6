class Circle {

    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle();
console.log(myCircle.toString());
console.log(myCircle.getArea()); 
console.log(myCircle.getCircumference()); 

myCircle.setRadius(2);
myCircle.setColor("black");
console.log(myCircle.toString()); 
