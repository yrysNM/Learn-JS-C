class Student {
    #firstName; 
    #secondName;
    constructor(firstName, secondName) {
        this.#firstName = firstName; 
        this.#secondName = secondName;  
    }

    getFirstName() {
        return this.#firstName;
    }

    getSecondName() {
        return this.#secondName;
    }

    setFirstName(firstName) {
        this.#firstName = firstName;
        
    }

    setSecondName(secondName) {
        this.#secondName = secondName;
    }

    /**
     *  @Override
    */
    toString() {
        return `First name: ${this.firstName} 
                Second name:  ${this.#secondName}`;
    }
}

class Grades extends Student {
    
    constructor(firstName, grades) {
        super(firstName);
        if(grades) {
            this.grades= grades;
        }
        this.grades = [];
    }

    addGrades(temp) {
        return this.grades.push(temp);
    }

    averageGrades() {
        let total = 0; 
        for(let i = 0; i < this.grades.length; i++) {
            total += this.grades[i];
        }   
        return total / this.grades.length;
    }

    toString() {
        return `Average of grades: ${this.averageGrades()} \nname: ${this.getFirstName()}`;
    }

}

let st1 = new Student("Erke", "Erkebulanov");
let grade = new Grades(st1.getFirstName());
grade.addGrades(55);
grade.addGrades(52);
grade.addGrades(60);
grade.addGrades(69);
console.log(grade.toString() );


