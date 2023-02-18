class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "Safiuddin";//common
    }
}
const student1 = new Student(10, "Shohan");
const student2 = new Student(20, "Tuhin");
console.log(student1, student2);
console.log(student1.id, student2.id);