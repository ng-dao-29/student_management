import {Student} from "./student";

export class StudentMay {
    list: Student [] = [];
    size: number;
    constructor() {
        this.size = 0
    }
    //thêm sinh viên
    add(name: string, group: string, dhk1:number, dhk2:number): void {
        this.list.push(new Student(name,group,dhk1,dhk2));
        this.size++;
    }

    // hiện thị sinh viên
    showList(): Student[] {
        return  this.list
    }
    // hiển thị số lượngts=
    totalStudent():number {
        return this.size
    }

    //sắp xếp theo thứ tự
    showRank () {
        for (let i = 0; i < this.size -1; i++) {
            let min: Student = this.list[i];
            let minIndex: number = i
            for (let j = i+1; j < this.size;j++) {
                if (min.mediumScore < this.list[j].mediumScore) {
                    min = this.list[j];
                    minIndex = j
                }
            }
            if (minIndex !== i) {
                this.list[minIndex] = this.list[i];
                this.list[i] = min
            }
        }
        return this.list
    }

    //tìm kiếm theo tên
    searchName(name: string): Student[] {
        let names: Student[] = []
        for (let i =0; i < this.list.length; i++) {
            if (name == this.list[i].name) {
                names.push(this.list[i])
            }
        }
        return names
    }

    //tìm kiếm theo group
    searchGroup(group: string): Student[] {
        let groups:Student[] = []
        for (let j = 0; j < this.list.length; j++) {
            if (group == this.list[j].group) {
                groups.push(this.list[j]);
            }
        }
        return groups;
    }
}