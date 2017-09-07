var words = ["ground", "control", "to", "major", "tom"];

var wordLengths = words.map(function(word) {
  return word.length;
});

var wordUpperCase = words.map(function(word) {
  return word.toUpperCase();
});

var wordSRJ = words.map(function(word) {
  return word.split('').reverse().join('');
});


// console.log(wordLengths, wordUpperCase, wordSRJ);

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]