import { buildQueryParams } from '../utils';

describe('buildQueryParams', () => {
  test('Should return a string with the query', () => {
    const queryValues = {
      paramOne: 'valueOne',
      paramTwo: 'value Two',
      paramThree: 'valueThree',
    };

    const resultExpected = 'paramOne=valueOne&paramTwo=value%20Two&paramThree=valueThree';

    expect(buildQueryParams(queryValues)).toBe(resultExpected);
  });
});
