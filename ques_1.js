// 1. University Student Management System
// Create a class Student having rollNo, name, and marks. Initialize these properties using a constructor. Create an instance method displayResult() that displays student details and determines whether the student has passed. Create a static property/method to maintain and display the total number of Student objects created. Create at least three Student objects and demonstrate all methods.
// Concepts Covered: Class, Object, Constructor, Instance Method, Static Method

class student{
    static count=0;
    constructor( rollNo, name,marks){
        this.rollNo=rollNo;
        this.name=name;
        this.marks=marks;
        student.count++;
    }
    displayResult(){
        console.log("Roll no. ",this.rollNo);
        console.log("Name ",this.name);
        console.log("marks",this.marks);

        if(this.marks>=33){
            console.log("Pass :")
        } else{
            console.log("Fail :")
        }
    }
};

let s1=new student(101,"Akshit malik",95);
let s2=new student(102,"Ayush",95);
let s3=new student(103,"Rahul",32);

s1.displayResult();
s2.displayResult();
s3.displayResult();