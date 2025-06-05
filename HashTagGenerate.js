// Find Longest Word in a String

const HashTagGenerator = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    word = str.split(" ").map((cur)=> cur.replace(cur[0],cur[0].toUpperCase()));
    word = `#${word.join("")}`;
    console.log(word);
}

console.log(HashTagGenerator("I am Learning Javascript"));