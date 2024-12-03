const input = require("fs")
  .readFileSync("./source.txt", "utf-8")
  .toString()
  .replace(/(\r)/gm, "")



  const  instructions = input;

  console.log(input);
  const regex = /mul\(\d{1,3},\d{1,3}\)/g;

  const matches = instructions.match(regex);
    let total = 0;
    //console.log(matches);

    matches.forEach((match) => {
      const stripped = match.replace("mul(", "").replace(")", "");
      const numbers = stripped.split(",");
      const first = numbers[0];
      const second = numbers[1];
      const result = first * second;
      //console.log(first, second, result);
      total+= result;
      })
  console.log(total);

