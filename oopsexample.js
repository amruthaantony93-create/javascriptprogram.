/*class Student{

    

    display()
    {
        console.log("welcome to oops world")

    }

}*/


class Student{

    constructor(name,age,course)
    {
        this.name=name;
        this.age=age;
        this.course=course;
    }

    display()
    {
        console.log("name:"+this.name);
        console.log("sge:"+this.age);
        console.log("course:"+this.course);

    }
}
//creating object

let Student1= new Student("ammu",33);
let student2= new Student("anu",21,"MBA");
let student3= new Student("alu",28,"MCA");
student2.display();











