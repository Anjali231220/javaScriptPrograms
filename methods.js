//string methods
// length()
// trim()
// toUpeerCase()
// toLowerCase()
// includes()
// indexeOf()
// slice()
// substring()
// replace()
// concat()
// split()

// let str = "Hello JavaScript World"
// console.log(str)
// console.log("length():-",str.length);

// let trimText = str.trim();
// console.log("trim():-",trimText);

// console.log("toUpperCase():-",str.toUpperCase())
// console.log("toLowerCase():-",str.toLowerCase())

// console.log("includes() :-", str.includes("World"))

// console.log("indexOf():- ",str.indexOf("World"))

// console.log("slice() :-",str.slice(1,6))

// console.log("subString():-",str.substring(1,6))

// console.log("replace() :-",str.replace("JavaScript","React"))

// let extraText=" - HELLO JS, React";
// console.log("Concat",str.concat(extraText))

// console.log("Split:",str.split(" "));
 
//ARRAY METHODS
// length()
// push()
// Pop()
// unshift()
// shift()
// concat()
// includes()
// indexOF()
// spilce()
// slice()
// join()
// delete()
// Map()
// filter()
// find()
// forEach()
// sort()
// reverse()
// flat()

// let arr = ['one','two','three',1,{name:"name"}]
// console.log("Default Array : ",arr);

// console.log("length() : ",arr.length)

// //console.log("push() : ",arr.push("new added elelment"))
// arr.push("new added elelment")
// console.log("array after push : ", arr)

// arr.pop();
// console.log('array after pop:',arr)

// arr.unshift("first element")
// console.log("array after unshift : ", arr)

// arr.shift("first removed")
// console.log("array after shift : ",arr)

// let newArr = ["str 1","str 2"];
// let mixedArr = arr.concat(newArr);
// console.log("default array after concat : ", arr)
// console.log("array after concat : ",mixedArr)

// console.log("include() : ", arr.includes("three"))
// console.log("indexOf() : ",arr.indexOf("three"))

// console.log("Slice() : ",arr.slice(2,4))
// console.log("Splice() : ",arr.splice(2,4))
// console.log("old Array : ",arr)

// console.log("join() : ",arr.join(", "))
// delete arr[4]
// console.log(arr)

console.log("Array iteration method : ")
let numbers = [1,2,3,4,5,]

console.log("map : ",numbers.map(num => num * 2))//instead of for loop
console.log("after map old array : ",numbers)

console.log("Filter : ", numbers.filter(num => num > 2))// instead of for and for each loop
console.log("after Filter old array : ",numbers)

console.log("forEach : ")// length does not require
numbers.forEach(num => console.log(num))

let num = [3,5,2,4,1]
console.log("sort() : ",num.sort())
console.log("reverse() : ",num.reverse())

let nestedArray = [1,2,[3,4],[5,6]]
console.log("default nested array : ",nestedArray)
let flatArray = nestedArray.flat()
console.log("flatArray :",flatArray)
