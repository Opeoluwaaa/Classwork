import Student_reg from "./stdreg.mjs";

class Std_course_reg extends Student_reg {
    constructor(semester, year, std_id, faculty, department, course) {
        super (semester, year, std_id, faculty, department)

        this.courses = course;
        
    };

    courses = [];

    totalCourse(){
        return this.courses.length;
    };
    totalComCourse(){
        return this.courses.filter(course => course.Type === 'Compulsory').length;
    };
    totalElCourse(){
        return this.courses.filter(course => course.Type === 'Elective').length;
    };
    
}

export default Std_course_reg;