import Person from './person.mjs'

class Student extends Person{
    constructor(firstname, lastname, gender, stdid){
        super(firstname, lastname, gender)
        this.std_id = stdid;
    };

    std_id = '';

};