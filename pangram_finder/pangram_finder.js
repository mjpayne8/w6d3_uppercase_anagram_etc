const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase().split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.reduce((accumalator,letter) => accumalator && this.phrase.includes(letter),true);
}

module.exports = PangramFinder;
