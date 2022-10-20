import {StudentMay} from "./manage";
import {Student} from "./student";

let studentMay = new StudentMay();

studentMay.add("gió","C08", 8,9);
studentMay.add("gió","C08", 10,10);
studentMay.add("bão","C08",7,9);
studentMay.add("mưa","C09",5,4);
studentMay.add("mây","C09",3,4);
studentMay.add("sóng","C010",6,8);
studentMay.add("rừng","C010",8,2);
studentMay.add("biển","C07",9,10);

// console.log(studentMay.showRank());
// console.log(studentMay.searchName("gió"))
// console.log(studentMay.searchGroup("C08"))
// studentMay.searchGroup("C08")
console.log(studentMay.showRank())





