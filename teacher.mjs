import Person from './person.mjs'

class Teacher extends Person{
    constructor(firstname, lastname, gender, degree) {
        super(firstname, lastname, gender)
        this.degree = degree;
    }
    degree = '';

    teach(){

    }
}


// console.log(per.firstName + ' has a ' + per.degree + ' degree.');



export default Teacher;