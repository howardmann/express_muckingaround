/**
 * Capitalizes all words in a string
 * @param  {string}
 * @return {string}
 */
exports.capitalize = function(string){
  let stringArr = string.split(' ');
  let capitalizeWord = function(word){
    return word[0].toUpperCase() + word.substr(1);
  }
  return stringArr.map(word => capitalizeWord(word)).join(' ');
}
