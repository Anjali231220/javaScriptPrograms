let Student = {
    name : "  first name  ",
    email : "USER@GMAIL.COM",
    course : "Javascript,React,Node",
    marks : [75,78,60,90,33],
    hobbies : ["music" , 'Cricket' , "Reading"],
    address : ["India", ["Gujarat", "Ahmedabad"]]
};

//STRING OPERATIONS
let trimText = Student.name.trim();
console.log("remove extra space from name :-",trimText);
console.log("convert name in UpprerCase :-",Student.name.toUpperCase());
console.log("convert email in LowerCase :-",Student.email.toLowerCase());
console.log("check course includes React :-",Student.course.includes("React"));
console.log("inndex of Node:-",Student.course.indexOf("Node"));
console.log("replace JavaScript With JS :-",Student.course.replace("Javascript","JS"));
console.log("convert course string into an array :-",Student.course.split());
// let stdname = Student.name.length();
// console.log("length of student name:-",stdname);

//ARRAY OPERATION

console.log("Add Hobbies:-",Student.hobbies.push("Swimming"),Student.hobbies);
console.log("remove last Hobby:-",Student.hobbies.pop(),Student.hobbies);
console.log("remove first hobby:-",Student.hobbies.shift(),Student.hobbies);
console.log("add hobby first Drawing: -",Student.hobbies.unshift("Drawing"),Student.hobbies);
console.log("check course includes React :-",Student.course.includes("React"));
console.log("inndex of JS:-",Student.course.indexOf("JS"));


// let removeMark = Student.marks.split(0,2)
// console.log("Removed failes mark : ");
let hobby = Student.hobbies.join(",");
 console.log("convert Hobbies array into a string :-",hobby);


//ARRAY ITERATION METHODS
console.log( "Map() : ",Student.marks.map( marks => marks + 5))
console.log( "filter() : ",Student.marks.filter( marks => marks >= 40))
console.log( "find() : ",Student.marks.find( marks => marks > 80))
console.log( "Ascending Order : ",[...Student.marks].sort((a,b)=>a-b));
console.log( "Reversed : ",[...Student.marks].reverse());
console.log( "Flat address : ",Student.address.flat());

//OBJECT HANDLING
const passed = Student.marks.every(marks => marks >= 40);
console.log("allpassed : ",passed);
console.log("final Student Object : " , Student);











