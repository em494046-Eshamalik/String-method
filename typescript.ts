 let dname ="ayesha"
 console.log(dname.toUpperCase())
let unam ="esha,sana,khadija"
console.log(unam.toUpperCase())

let small="FATIMA"
console.log(small.toLowerCase())
let smallname="KAMRAN"
console.log(smallname.toLowerCase())

let city=" Faisalabad "
console.log(city.trim())
let country=" Pakistan "
console.log(country.trim())

let thing="Table"
console.log(thing.slice (0,3))
let living ="Drawingroom"
console.log(living.slice(0,5))

let fruit="Banana"
console.log(fruit.substring(0,3))
let veg="potatao"
console.log(veg.substring(3,5))

let sirname = "Ayesha Malik";
console.log(sirname.replace("Malik", "Kamran"));
let sis ="khadija"
console.log(sis.replace("khadija","Esha"))

let add ="email"
console.log(add.includes("eamil.com"))
let addd="bilal.com brand"
console.log(addd.includes("bilal.com brand"))

let meal="pizza"
console.log(meal.indexOf("pizza"))

let email = "esha.malik@gmail.com";
let parts = email.split("@");
console.log(parts);
let data = "apple,banana,mango";
let fruits = data.split(",");
console.log(fruits);
let firstName = "Ayesha";
let lastName = "Malik";

let fullName = firstName.concat(" ", lastName);
console.log(fullName);
let cit= "Faisalabad";
let countr = "Pakistan";

let address = cit.concat(", ", countr);
console.log(address);

