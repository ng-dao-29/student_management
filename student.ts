export class Student {
    name: string;
    group: string;
    scoresSemester1: number;
    scoresSemester2: number;
    mediumScore:number
    constructor(name: string, group: string, semester1: number, semester2: number) {
        this.name = name;
        this.group = group;
        this.scoresSemester1 = semester1;
        this.scoresSemester2 = semester2;
        this.mediumScore = (this.scoresSemester1+this.scoresSemester2)/2
    }
}