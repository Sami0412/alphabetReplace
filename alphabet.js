function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  text = text.toLowerCase();
  let result = [];
  for (i = 0; i <= text.length; i++) {
    let index = alphabet.indexOf(text[i]) + 1;
    if (index === 0) {
        continue;
    } else {
        result.push(index);
    }
  }
  return result.join(" ");
};

console.log(alphabetPosition("text"));

//module.exports = alphabetPosition;
