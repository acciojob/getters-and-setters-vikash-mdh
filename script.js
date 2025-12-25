// Parent class
class Person {
    private _name: string;
    private _age: number;

    // Constructor
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(name: string) {
        this._name = name;
    }

    // Getter for age
    get age(): number {
        return this._age;
    }

    // Setter for age
    set age(age: number) {
        this._age = age;
    }
}

// Student class inherits Person
class Student extends Person {
    study(): void {
        console.log(`${this.name} is studying`);
    }
}

// Teacher class inherits Person
class Teacher extends Person {
    teach(): void {
        console.log(`${this.name} is teaching`);
    }
}

// --------------------
// Example Usage
// --------------------

// Person
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

// Student
const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

// Teacher
const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching
