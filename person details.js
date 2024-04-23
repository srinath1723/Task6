class Person {
     constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getGender() {
        return this.gender;
    }

    setGender(gender ){
        this.gender = gender;
    }

    toString() {
        return `Person: ${this.firstName} ${this.lastName}, Age: ${this.age}, Gender: ${this.gender}`;
    }
}

const person1 = new Person("Srii", "Ram", 22, "Male");
console.log(person1.toString()); 

person1.setAge(23);
person1.setGender("female")
person1.setFirstName("kavi")
person1.setLastName("priya")
console.log(person1.toString());
