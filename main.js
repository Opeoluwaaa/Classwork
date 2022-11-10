// import {Person} from './person'
// import Teacher from './teacher.mjs' 

// const per = new Teacher("Buju", "Benson", "Male", "Masters");
// console.log(per.firstName);
// per.jump();

import Course from "./course.mjs";
import Std_course_reg from "./std_course_reg.mjs";

const course1 = new Course('101', 'MAT101', 'Introduction to Algebra', 3, 'Dr. Istanbul', 'Compulsory');

const course2 = new Course('111', 'MAT111', 'Introduction to Statistics', 3, 'Dr. Jamaica', 'Elective');

const course3 = new Course('112', 'MAT112', 'Introduction to Calculus', 3, 'Dr. Bayern', 'Compulsory');

// console.log(course1, course2, course3);

const one = new Std_course_reg("First", '2022', '22/30GD056', 'Engineering', 'Mechanical', [course1, course2, course3]);

console.log("The Total Course lenght is " + one.totalCourse());

console.log("The Total number of compulsory courses = " + one.totalComCourse());

console.log("The Total number of elective courses = " + one.totalElCourse());

// console.log(one.totalComCourse)

