// unit tests of the fuzzytrader app.

jest.mock('../db');
const listPortfolio = require('../db').listPortfolio()
const getDBURL = require('../db').getDBURL

// this is the first thing done by Jest, it is executed only once before any test is executed.
beforeAll(() => {
  return globalDatabase.clear().then(() => {
    return globalDatabase.insert({testData: 'foo'});
  });
});

test('Teste env var', () => {
	expect(process.env.DB_TEST_URL).toBeNotNull()
})

// foo is a mock function
getDBURL.mockImplementation(() => 3);

test('Teste URL mock', () => {
	expect(getDBURL()).toBe(3)
})
