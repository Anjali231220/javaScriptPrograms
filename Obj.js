//COLLECTION OF ANU TYPE OF DATA = OBJECT
const person = {
      name : 'testing',
      age : 24,
      hobbies : ['cricket', 'listen music'],
      greet: function(){
        console.log("Hello")
      }
}

//ACCESS VALUES FROM OBJECT
// console.log(person.name)
// console.log(person['name'])

//ADDING OR MODIFYING THE DATA OF OBJ
person.job = " React developer"
person.salary =  50000
// console.log(person)

delete person.salary
// console.log(person)

//NESTED OBJECT
// const person1 = {
//     name : "anjali",
//     age : 20,
//     address :{
//         city : "ksd",
//         zipcode : '362001',
//         street : "123 main st."
//     }
// }
// console.log(person1)
// console.log(person1?.address?.city)
// console.log(Object.keys(person1))
// console.log(Object.values(person1))
// console.log(Object.entries(person1))//single single entry array ma apse

const user = {
    name : "user",
    role : "admin",
    destination : "developer",
    age : 24,
    aaddress :{
         city : "ksd",
         zipcode : '362001',
         street : "123 main st."
     }
}
// const {name,age,role} = user
// console.log(name , age, role)
//RENAME OBJECT PROPERTIES (RENAME VARIABLES)
// const {name : profileName, age : profileAge} =user
// console.log(profileName,profileAge)

const {name, age, role, state = "gujarat"} = user
// console.log(name,age,role,state)

const array = [1,2,3]
const moreElements =[...array,4,5,6]
// console.log(moreElements)

const originalArray = [1,2,3]
const copiedArray = [...originalArray]
// console.log(copiedArray)

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const mergedArray =[...arr1,...arr2]
// console.log(mergedArray)

//SPREAD OPERATOR IN OBJECT

const user1 = {
    name:"user",
    city:"ksd"
}
console.log(user1)
const newObj = {
    ...user1,
    role : "React developer"
}
console.log(newObj)

//COPY OBJECT
const user2 ={
    name: "john",
    city:"junagdh"
}
const user3 = {...user2}
console.log(user3)

//MERGED OBJ
const obj1={
    name:"name",
    age:20
}
const obj2={
    city:"junagadh",
     state:"gujarat",
     age:30
}
const obj3 = {...obj1, ...obj2}
console.log(obj3)