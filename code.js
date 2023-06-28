let array = [1, 2, 3, 4, 6, 7, 8, 9, 10]; //Assume there are 100 numbers in array but for example sake i am taking 10 numbers
let max_num = -999999999;
for (let eachItem of array) {
  if (eachItem > max_num) {
    max_num = eachItem;
  }
}

let formula = (max_num * (max_num + 1)) / 2;
let total = 0;
for (let eachItem of array) {
  total += eachItem;
}

console.log(formula - total);
