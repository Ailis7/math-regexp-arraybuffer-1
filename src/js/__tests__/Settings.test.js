import Settings from '../classes/Settings';

test('change setting', () => {
  const testSettings = new Settings();
  testSettings.userChoise = { theme: 'gray' };
  const result = testSettings.userChoise;
  const ideal = new Map();
  ideal.set('theme', 'gray');
  ideal.set('music', 'trance');
  ideal.set('difficulty', 'easy');
  expect(result).toEqual(ideal);
});

test('change with err', () => {
  const testSettings = new Settings();
  expect(() => {
    testSettings.userChoise = { theme: 'sfdjkdfgjdfgdfg' };
  }).toThrowError();
});

test('change with err', () => {
  const testSettings = new Settings();
  expect(() => {
    testSettings.userChoise = { fdasdasdxcxcS: 'gray' };
  }).toThrowError();
});
