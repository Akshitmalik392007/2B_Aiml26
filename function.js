// const student={
//     firstName: "Akshit",
//     lastName: "malik",
//     city: "ghaziabad",
//     pincode: 201002,
//     salary: function(){
//         document.write("salary");
//     },
//     subject: ["java script","c++","java"],
// }
// console.log(student["firstName"]);
// console.log(student["lastName"]);
// console.log(student["city"]);
// console.log(student["pincode"]);
// console.log(student["salary()"]);

let student=new Object();
student.name="Akshit malik ";
student.pincode="201204";
student.salary = function(){
    document.write("salary");
}
console.log(student);
let s1= new student("Vikas",101,201201,"Modinagar");
let s2 = new student("Akshit",102,20123,"Muzaffarnagar");
let s3= new student("Mohit",103,20123,"muzaffarnagar");

console.log(s1);

class student1{
    
}
