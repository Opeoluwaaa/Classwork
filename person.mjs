
class Person{
    constructor(firstname, lastname, gender) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.gender = gender;
    }

    firstName ='';
    lastName = '';
    gender = '';

    walk(){};
    jump(){
        console.log('I am jumping.')
    };
};

// const check = new Person("John", "Wu", "Male");
// console.log(check.firstName);

export default Person;