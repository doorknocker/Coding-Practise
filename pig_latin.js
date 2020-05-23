/* Problem Statement: Move the first letter of each word to the end of it, 
                      then add "ay" to the end of the word. Leave punctuation marks untouched. 
   
   Examples: pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
             pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  str = str.trim(); //remove whitespaces from beginning and end
  let strArray = str.split(" "); //transform into array
  let temp = "";

  return strArray
    .map((word) => {
      temp = word;
      temp = temp.toLowerCase();
      if (word.length === 1) {
        //one letter only. can be a punctuation
        word =
          temp.charCodeAt(0) > 96 && temp.charCodeAt(0) < 123
            ? word + "ay"
            : word;
        return word;
      }
      //check for punctuation
      word =
        temp.charCodeAt(word.length - 1) > 96 &&
        temp.charCodeAt(word.length - 1) < 123
          ? word
          : word.substring(0, word.length - 1);
      //remove the first character and append it at the end along with 'ay'
      word = word.substring(1) + word[0] + "ay";

      return word;
    })
    .join(" ");
}
