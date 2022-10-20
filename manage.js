"use strict";
exports.__esModule = true;
exports.StudentMay = void 0;
var student_1 = require("./student");
var StudentMay = /** @class */ (function () {
    function StudentMay() {
        this.list = [];
        this.size = 0;
    }
    //thêm sinh viên
    StudentMay.prototype.add = function (name, group, dhk1, dhk2) {
        this.list.push(new student_1.Student(name, group, dhk1, dhk2));
        this.size++;
    };
    // hiện thị sinh viên
    StudentMay.prototype.showList = function () {
        return this.list;
    };
    // hiển thị số lượngts=
    StudentMay.prototype.totalStudent = function () {
        return this.size;
    };
    //sắp xếp theo thứ tự
    StudentMay.prototype.showRank = function () {
        for (var i = 0; i < this.size - 1; i++) {
            var min = this.list[i];
            var minIndex = i;
            for (var j = i + 1; j < this.size; j++) {
                if (min.mediumScore < this.list[j].mediumScore) {
                    min = this.list[j];
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                this.list[minIndex] = this.list[i];
                this.list[i] = min;
            }
        }
        return this.list;
    };
    //tìm kiếm theo tên
    StudentMay.prototype.searchName = function (name) {
        var names = [];
        for (var i = 0; i < this.list.length; i++) {
            if (name == this.list[i].name) {
                names.push(this.list[i]);
            }
        }
        return names;
    };
    //tìm kiếm theo group
    StudentMay.prototype.searchGroup = function (group) {
        var groups = [];
        for (var j = 0; j < this.list.length; j++) {
            if (group == this.list[j].group) {
                groups.push(this.list[j]);
            }
        }
        return groups;
    };
    return StudentMay;
}());
exports.StudentMay = StudentMay;
