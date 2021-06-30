const wordSearch = (letters, word) => { 

  const horizontalJoin = letters.map(ls => ls.join(''));
  
  let tempArray = [];
  for (let string in letters[0]) {
    tempArray.push([]);
  }
  
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      tempArray[j].push(letters[i][j]);
    }
  }
  
  const verticalJoin = tempArray.map(tempArray => tempArray.join(''));

  for (horizontalString of horizontalJoin) {
    if (horizontalString.includes(word)) {
      return true
    }
  }
  
  for (verticalString of verticalJoin) {
    if (verticalString.includes(word)) {
      return true;
    }
  }
  return false;
}

module.exports = wordSearch

