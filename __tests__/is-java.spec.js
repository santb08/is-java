const { isJava } = require('../');

test('isJava', () => {
  expect(isJava()).toEqual({
    status: false,
    message: "javascript != java"
  });
});
