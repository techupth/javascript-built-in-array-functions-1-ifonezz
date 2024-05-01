let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
   return words.filter((word) => {
      return word.length > 4;
   });
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
