module.exports = function check(str, bracketsConfig) {
  let bracketMap = {};
  bracketsConfig.forEach(element => {
    bracketMap[element[0]] = element[1]
  });

  let bracketStack = [str[0]];
  str = str.substr(1)

  if (!bracketMap[bracketStack[0]]) {
    return false
  } else {
    while (str.length) {
      let currentBracket = str[0];
      str = str.substr(1)

      if (bracketMap[currentBracket] === currentBracket) {
        if (bracketStack[bracketStack.length - 1] === currentBracket) {
          bracketStack.pop();
        } else {
          bracketStack.push(currentBracket)
        }
      }
      else if (bracketMap[currentBracket]) {

        bracketStack.push(currentBracket)

      } else {
        let previousBracket = bracketStack.pop()
        if (bracketMap[previousBracket] !== currentBracket) {

          return false
        }
      }
    }
    return bracketStack.length ? false : true
  }
}

