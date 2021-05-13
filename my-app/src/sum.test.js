const sum = require('./sum');
///param1 a string of what the test is doing
//param2 function is what gets called to run your test
//we need to make sure our repsected reuslt happens
//jest have built in function
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

beforeEach(() => jest.resetAllMocks())