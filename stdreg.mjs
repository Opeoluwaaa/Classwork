import Academic from "./academic.mjs";

class Student_reg extends Academic {
    constructor(semester, year, std_id, faculty, department) {
        super(semester, year)
        this.stdId = std_id;
        this.Faculty = faculty;
        this.Department = department;
    };

    stdId = '';
    Faculty = '';
    Department = '';
};

export default Student_reg;