class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        if (!name || name.trim().length === 0) {
            throw new Error("Name cannot be empty");
        }
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    // Setter for age with validation
    set age(age: number) {
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = age;
    }
}

// --------------------
// Example Usage
// --------------------

const person = new Person("John", 25);

try {
    person.age = -5;
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}

try {
    person.name = "";
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}

// Student
class Student extends Person {
    study(): void {
        console.log(`${this.name} is studying`);
    }
}

// Teacher
class Teacher extends Person {
    teach(): void {
        console.log(`${this.name} is teaching`);
    }
}

const student = new Student("Alice", 22);
student.study();

const teacher = new Teacher("Bob", 40);
teacher.teach();
