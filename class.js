// class hello{
//     constructor(name){
//         this.faculty = "Akshit";
        
//     }
// };

class student{
    constructor(roll,name,year){
        this.rollNumber = roll;
        this.rollNumbername = name;
        this.Year = year;

        console.log(this.rollNumber);
        console.log(this.Name);
        console.log(this.Year);
    }
};

class detail{
   static Fname = "vikas";
   static Lname = "choudhary";
     display(){
        console.log(student.Fname);
        console.log(student.Lname);
    }
};
// let h = new hello();
// let h1 = new hello();
// let h2 = new hello();
// console.log(h2.faculty);

// let s1 = new student();
// let s2 = new student(101,"akshit","2nd");
// let s3 = new student(102,"vivek","2nd");

// detail.display();
// let s1 = new detail();
// s1.display();
class hello{
    constructor(){
        console.log("Hello constructor")
    }
}
class hi extends hello{
            constructor(){
                super();
                console.log("Hi constructor");
            }
};
let n1=new hi();
hi.info();
