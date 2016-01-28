function balanced(input) {
  var tokens = "()[]{}";
  var stack = [];
  var current, index, tokenIndex;

  for (index = 0; current = input[index]; index++) {
    tokenIndex = tokens.indexOf(current);
    
    if(tokenIndex === -1){continue;}
    if(tokenIndex % 2 === 0){ stack.push(tokenIndex + 1);}
    else {
      if(stack.length === 0 || stack.pop() !== tokenIndex) {
        return 'NO';
      }
    }
  }
  
  return stack.length === 0 ? 'YES' : 'NO';
}

exports.balanced = balanced;