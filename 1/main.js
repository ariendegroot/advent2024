const input = require("fs")
  .readFileSync("./source.txt", "utf-8")
  .toString()
  .replace(/(\r)/gm, "")
  .split("\n");


const firstList = [];
const secondList = [];  

input.forEach((entry) => {
    const newEntry = entry.split("   ");
    firstList.push(+newEntry[0]);
    secondList.push(+newEntry[1]);
})

firstList.sort((a,b)=> a-b);
secondList.sort((a,b)=> a-b);

const results = [];

const calculateDifference = (first, second) => {
    if(first > second) {
        return first - second;
    } else if ( second > first) {
        return second - first;
    } else {
        return 0;
    }
}

firstList.forEach((number, index) => {
    const difference = calculateDifference(number, secondList[index]);
    results.push(difference);
})
 

const total = results.reduce((total, a) => total + a, 0);

console.log("total", total);
