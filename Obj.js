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
console.log(person.name)
console.log(person['name'])

//ADDING OR MODIFYING THE DATA OF OBJ
person.job = " React developer"
person.salary =  50000
console.log(person)

delete person.salary
console.log(person)

//NESTED OBJECT
const person1 = {
    name : "anjali",
    age : 20,
    address :{
        city : "ksd",
        zipcode : '362001',
        street : "123 main st."
    }
}
console.log(person1)
console.log(person1?.address?.city)
console.log(Object.keys(person1))
console.log(Object.values(person1))
console.log(Object.entries(person1))//single single entry array ma apse