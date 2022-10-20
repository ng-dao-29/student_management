"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, group, semester1, semester2) {
        this.name = name;
        this.group = group;
        this.scoresSemester1 = semester1;
        this.scoresSemester2 = semester2;
        this.mediumScore = (this.scoresSemester1 + this.scoresSemester2) / 2;
    }
    return Student;
}());
exports.Student = Student;
