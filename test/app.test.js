import Character from '../src/app';

test('sort an array with additional parameters', () => {
  const recieved = new Character('Thor', 'Swordsman');
  const expected = {
    name: 'Thor',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(recieved).toEqual(expected);
});

test('incorrect data error', () => {
  // eslint-disable-next-line no-new
  expect(() => new Character('Loki', 'God')).toThrow('Переданы некорректные значения');
});
