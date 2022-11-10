class Course {
    constructor(courseid, coursetitle, coursename, unit, advisor, type) {
        this.course_id = courseid;
        this.course_title = coursetitle;
        this.course_name = coursename;
        this.Unit = unit;
        this.Advisor = advisor;
        this.Type = type;
    };

    course_id = '';
    course_title = '';
    course_name = '';
    Unit = 0;
    Advisor = '';
    Type = '';

};

export default Course;

