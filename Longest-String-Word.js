// Find Longest Word in a String

const FindLongestWord = (str) => {
    word = str.split(" ");
    word = word.sort((a, b) => b.length - a.length);
    
    // 2nd method
    // return word.reduce((accum,cur)=> (cur.length > accum.length ? cur : accum) , "")

    console.log("finalword" , word);
    return word[0];
}

console.log(FindLongestWord("I am Learning Javascript"));