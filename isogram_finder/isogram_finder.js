const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  return this.word.every(letter => this.letterCount(letter,this.word)===1);
}

IsogramFinder.prototype.letterCount = function(letter,wordArray){
  return wordArray.filter(arrayLetter => arrayLetter === letter).length;
};

module.exports = IsogramFinder;
