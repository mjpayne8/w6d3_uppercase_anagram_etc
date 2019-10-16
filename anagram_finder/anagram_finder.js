const AnagramFinder = function (word) {
  this.word = word.toLowerCase().split('').sort();
  this.asString = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter(word => this.isAnagram(word));
}

AnagramFinder.prototype.isAnagram = function(anagramWord){
  const wordArray = anagramWord.toLowerCase().split('').sort()
  const anagramWordCount = wordArray.map(letter => this.letterCount(letter,wordArray));
  const thisWordCount = this.word.map(letter => this.letterCount(letter,this.word));
  const sameCount1 = anagramWordCount.every((number, index) => number === thisWordCount[index]);
  const sameCount2 = thisWordCount.every((number,index) => number === anagramWordCount[index]);
  const everyLetter = wordArray.every(letter => this.word.includes(letter));
  const sameWord = this.asString === anagramWord;
  return sameCount1 && sameCount2 && everyLetter && !sameWord;
};

AnagramFinder.prototype.letterCount = function(letter,wordArray){
  return wordArray.filter(arrayLetter => arrayLetter === letter).length;
};

module.exports = AnagramFinder;
