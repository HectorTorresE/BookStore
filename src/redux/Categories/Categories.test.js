import reducer, { checkStatus } from './categories';

describe('Categories test', () => {
  test('Check unknown action', () => {
    const categories = [
      {
        id: 1,
        name: 'Educational',
      },
      {
        id: 2,
        name: 'Self Improvment',
      },
    ];
    const result = reducer(categories, { type: 'NEW', payload: categories });
    expect(result.length).toBe(2);
  });
  test('Check status', () => {
    const categories = [
      {
        id: 1,
        name: 'Educational',
      },
      {
        id: 2,
        name: 'Self Improvment',
      },
    ];
    const result = reducer(categories, checkStatus(categories));
    expect(result).toBe('Under construction');
  });
});