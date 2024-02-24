describe('constructor tests', () => {
  it('should throw an error when an invalid date string is passed to the constructor', () => {
    const { ChavetasoftDates } = require('../index');

    expect(() => new ChavetasoftDates('bad date string')).toThrowError(
      /invalid date/i
    );
  });
  it('test in development', () => {
    const { ChavetasoftDates } = require('../index');
    expect(() => new ChavetasoftDates('2021-02-03')).not.toThrowError();
  });

});


describe(`ES tests`, () => {
  it('should return the date in one string like DD/MM/YYYY', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').es();
    const expected = '3/2/2021';

    expect(date).toBe(expected);
  });
  it('should return the month name in Spanish', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getMonthNameEs();
    const expected = 'Febrero';

    expect(date).toBe(expected);
  });

  it('should return a string like "DD de Mes de YYYY "', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getLongDateEs();
    const expected = '3 de Febrero de 2021';

    expect(date).toBe(expected);
  });

  it('should return the date in ISO format ES', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').isoShortEs();
    const expected = '03/02/2021';

    expect(date).toBe(expected);
  });

  it('should return the week day name in Spanish', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getWeekDayNameEs();
    const expected = 'Miércoles';

    expect(date).toBe(expected);
  });
});
describe(`PT tests`, () => {
  it('should return the date in one string like DD/MM/YYYY', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').pt();
    const expected = '3/2/2021';

    expect(date).toBe(expected);
  });
  it('should return the month name in Portuguese', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getMonthNamePt();
    const expected = 'Fevereiro';

    expect(date).toBe(expected);
  });

  it('should return a string like "DD de Mes de YYYY "', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getLongDatePt();
    const expected = '3 de Fevereiro de 2021';

    expect(date).toBe(expected);
  });

  it('should return the date in ISO format PT', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').isoShortPt();
    const expected = '03/02/2021';

    expect(date).toBe(expected);
  });

  it('should return the week day name in Portuguese', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getWeekDayNamePt();
    const expected = 'Quarta-feira';

    expect(date).toBe(expected);
  });
});

describe(`EN tests`, () => {
  it('should return the date in one string like MM/DD/YYYY', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').en();
    const expected = '2/3/2021';

    expect(date).toBe(expected);
  });
  it('should return the month name in English', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getMonthNameEn();
    const expected = 'February';

    expect(date).toBe(expected);
  });

  it('should return a string like "Month DD, YYYY "', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getLongDateEn();
    const expected = 'February 3, 2021';

    expect(date).toBe(expected);
  });

  it('should return the date in ISO format EN', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').isoShortEn();
    const expected = '2021-02-03';

    expect(date).toBe(expected);
  });

  it('should return the week day name in English', () => {
    const { ChavetasoftDates } = require('../index');
    const date = new ChavetasoftDates('2021-02-03').getWeekDayNameEn();
    const expected = 'Wednesday';

    expect(date).toBe(expected);
  });
});
