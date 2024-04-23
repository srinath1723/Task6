## Day 6 Task
  
>1. The question was in github [link](https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md)
   * completed in the [class-Movie.js](./Class%20-%20Movie.js)
    
    
**Description**
   *  We have a constructor for the Movie class that initializes its properties title, studio, and rating.

   * The constructor sets the default value of rating to "PG" if it's not provided.

   *  We have a static method getPG which takes an array of Movie instances as input and returns a new array containing only those movies with a rating of "PG".

   * We create an instance of Movie with the title "Casino Royale", the studio "Eon Productions", and the rating "PG-13".
  
>2. The question was in github [link](https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md)
   * Convert the UML diagram to Typescript class. - use number for double
   
   * completed in the [uml diagram.js](./uml%20diagram.js)
    
    
**Description**
   *  The Circle class has two private properties: `radius`and `color`.
  
   *  The constructor initializes these properties with the provided values, and it sets the default values of `radius` to 1.0 and `color` to "red" if no values are provided.
  
   *  There are getter and setter methods for both properties: `getRadius()`, `setRadius()`, `getColor()`, and `setColor()`.
   
   *  The `toString()` method returns a string representation of the circle's radius and color.
     
   *  The `getArea()` method calculates and returns the area of the circle using the formula π * radius^2.
  
   *  The `getCircumference()` method calculates and returns the circumference of the circle using the formula 2 * π * radius.
  
 >3. Write  a "person " class to hold all the details
  * completed in the [person details.js](./person%20details.js)
    
**Description**
   *  The `Person` class has four private properties: `firstName`, `lastName`, `age`, and `gender`.
  
   * The constructor initializes these properties with the provided values.

   * here are getter and setter methods for each property: `getFirstName()`, `setFirstName()`, `getLastName()`, `setLastName()`, `getAge()`, `setAge()`, `getGender()`, and `setGender()`.

   * The `toString()` method returns a string representation of the person's details.

 >4. write a class to caluclate the uber price.
   * completed in the [UberPriceCalculator.js](./UberPriceCalculator.js)
    
**Description**
   *  The `UberPriceCalculator` class has two private properties: `baseprice` and `costPerKilometer`.
   * The constructor initializes these properties with the provided base price and cost per kilometer.
   * There's a `method calculatePrice()` that takes the distance traveled in kilometers as input and calculates the total price for the Uber ride based on the base fare and the cost per kilometer.
 