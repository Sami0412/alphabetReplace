const alphabetPosition = require('./alphabet');

test('a is converted to 1', () => {
  expect(alphabetPosition("a")).toBe("1");
});