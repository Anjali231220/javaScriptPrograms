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

let str = "Hello JavaScript World"
console.log(str)
console.log("length():-",str.length);

let trimText = str.trim();
console.log("trim():-",trimText);

console.log("toUpperCase():-",str.toUpperCase())
console.log("toLowerCase():-",str.toLowerCase())

console.log("includes() :-", str.includes("World"))

console.log("indexOf():- ",str.indexOf("World"))

console.log("slice() :-",str.slice(1,6))

console.log("subString():-",str.substring(1,6))

console.log("replace() :-",str.replace("JavaScript","React"))

let extraText=" - HELLO JS, React";
console.log("Concat",str.concat(extraText))

console.log("Split:",str.split(" "));
 