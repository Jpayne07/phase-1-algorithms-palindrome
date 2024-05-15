function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();
  
  // Reverse the word
  let reversedWord = word.split('').reverse().join('');
  
  // Compare the original word with the reversed word
  return word === reversedWord;
}
console.log(isPalindrome("Sneddens")); // Output: false

isPalindrome("Sneddens")



/* 
  Add your pseudocode here
  if(parseInt(word)%2 === 0){
    let evenLength = parseInt(word).len)
    let iterations = evenLength/2
    console.log(parseInt(word).len)
    for (let i = 0, iterations, text = word; i < iterations; i++) {
       firstHalf = console.log(word.slice(i))

        for (let i = 0, iterations, text = word; i < iterations; i--) {
      lastHalf = console.log(word.slice(-i))
      if (firstHalf = lastHalf){
        true
      }
      else{
        break
      }
      }
}
  }
  else{
    console.log((parseInt(word).len)-1)
  }
  if 

*/

/*
use modulo to find if it is even or odd
assign a variable to that
Use slice to dissect the word
console log each letter in a for loop until len/2 is through
in a nested for loop - 
console log each letter in a for loop for the back half in reverse order
check to ensure each letter matches

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
