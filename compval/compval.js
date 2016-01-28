function compareValue(input) {
  var values = [];
  var compare = input;
  while(compare.length > 0) {
    values.push(compareSingle(input,compare));
    compare = compare.substr(1);
  }
  return values.reduce(function(a,b){return a+b;});
}

function compareSingle(input, comparison) {
  comparison = comparison.split('');
  console.log(comparison);
  var first = comparison.shift();
  var regexp = new RegExp('^' + first + comparison.join('?'));
  var result = regexp.exec(input);
  return result ? result[0].length : 0;
}

module.exports = {
  compareValue: compareValue,
  compareSingle: compareSingle
}