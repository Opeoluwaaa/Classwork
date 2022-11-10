class Person {
    constructor(firstname, lastname, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.gender = gender;
    }
    firstname = '';
    lastname = '';
    gender = '';

    walk(){};
    jump(){};
}

const check = new Person('Okon', 'Lawal', 'male');
console.log(check.firstname);


class Teacher extends Person{
    // constructor(firstname, lastname, gender){
    //     super(firstname, lastname, gender)
    // }


    teach(){
        return 'I teach English Language';
    }
}

const thisTeacher = new Teacher('Ayo', '', '');
console.log(thisTeacher.firstname);
thisTeacher.teach()

class Occupation extends Teacher{
    // constructor(firstname, lastname, gender){
    //     super(firstname, lastname, gender)
    // }

    job(){
        return 'I am a Teacher';
    }

};

const thisOccupation = new Occupation('John', 'Bosco', 'Male');
console.log(thisOccupation.lastname);
thisOccupation.job();

class Area extends Occupation{
    // constructor(firstname, lastname, gender){
    //     super(firstname, lastname, gender)
    // }

    address(){
        return 'I live in Accra, Ghana';
    };
}

const profile = new Area('Buju', 'Benson', 'Male');
// console.log(profile.address());

console.log('My name is ' + profile.firstname + ' ' + profile.lastname + '. ' + profile.address() + '. ' + profile.job() + " and " + profile.teach());