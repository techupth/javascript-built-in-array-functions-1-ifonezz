let words = ["hello", "world"];

function getWordLengths(words) {
    let countLetter = (words.map((word) => {
      return word.length;
    }));
    return countLetter;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
