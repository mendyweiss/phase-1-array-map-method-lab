const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
// "x" repersents the strings in the array, and the "i" repersents the chars in the strings.
const titleCased = () => {
  tutorials.forEach((tutorial, index) => {
  const splitSentence = tutorial.split(" ");
  const alteredSentence = splitSentence.map(word => {
      const charecters = word.split("");
      const firstChar = charecters.shift();
      // debugger
      return firstChar.toUpperCase() + charecters.join("");
      //  debugger
      }).join(" ")
      //  debugger
      tutorials[index] = alteredSentence;
  })
  return tutorials;
}
titleCased()
