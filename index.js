console.clear();

/* --------------------------------------- */
console.log("-----------------------------");
console.log("1. while");

/* 1. The while loop: While <condition> do <Code> */
let string = "a";
while (string.length <= 8) {
  console.log(string);
  string = string + string;
}
const array = ["blue", "green", "red", "purple"];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i = i + 1;
}

let eyes = 0;
while (eyes < 6) {
  eyes = Math.floor(Math.random() * 6) + 1;
  console.log(eyes);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("2. for");

/* 2. The for loop */

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("3. for...in");

/* 3. The for..in loop to loop over object keys */
const user = {
  name: "Alex",
  age: 28,
  email: "alex@mail.com",
  isAdmin: false,
};
for (const key in user) {
  console.log(key + ": " + user[key]);
}

/* --------------------------------------- */
console.log("-----------------------------");
console.log("4. for...of");

/* 4. The for..of loop to loop over arrays */
for (const item of array) {
  console.log(item);
}
