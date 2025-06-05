const CountChar = (word,char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((accum,cur) => {
        if(cur === char){
            accum++;
        }
        return accum;
    },0 );
    return totalCount;
}

console.log(CountChar("Mississipi", "I"));

const str = "missisipi";
let count = 0;

for (let char of str) {
  if (char === "i") count++;
}

console.log(count);                           