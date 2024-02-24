describe('unit tests', () => {
  const { ChavetasoftDates } = require('../index');

  it('should throw an error when an invalid date string is passed to the constructor', () => {
    expect(() => new ChavetasoftDates('bad date string')).toThrowError(
      /invalid date/i
    );
  });

  it('should return the date in one string like MM/DD/YYYY', () => {
    const date = new ChavetasoftDates('2021/02/03').en();
    const expected = '2/3/2021';

    expect(date).toEqual(expected);
  });

  it('should return the date in one string like DD/MM/YYYY', () => {
    const date = new ChavetasoftDates('2021-02-03').es();
    const expected = '3/2/2021';

    expect(date).toBe(expected);
  });

  it('should return the date in ISO format EN', () => {
    const date = new ChavetasoftDates('2021-02-03').isoShortEn();
    const expected = '2021-02-03';

    expect(date).toBe(expected);
  });

  it('should return the date in ISO format ES', () => {
    const date = new ChavetasoftDates('2021-02-03').isoShortEs();
    const expected = '03/02/2021';

    expect(date).toBe(expected);
  });

  it('should return the day of the month', () => {
    const date = new ChavetasoftDates('2021-02-03').getDay();
    const expected = 3;

    expect(date).toBe(expected);
  });

  it('should return the month', () => {
    const date = new ChavetasoftDates('2021-02-03').getMonth();
    const expected = 2;

    expect(date).toBe(expected);
  });

  it('should return the year', () => {
    const date = new ChavetasoftDates('2021-02-03').getYear();
    const expected = 2021;

    expect(date).toBe(expected);
  });

  it('should return the week day', () => {
    const date = new ChavetasoftDates('2021-02-03').getWeekDay();
    const expected = 3;

    expect(date).toBe(expected);
  });

  it('should return the week day name in Spanish', () => {
    const date = new ChavetasoftDates('2021-02-03').getWeekDayNameEs();
    const expected = 'Miércoles';

    expect(date).toBe(expected);
  });

  it('should return the week day name in English', () => {
    const date = new ChavetasoftDates('2021-02-03').getWeekDayNameEn();
    const expected = 'Wednesday';

    expect(date).toBe(expected);
  });
  it('should return the month name in Spanish', () => {
    const date = new ChavetasoftDates('2021-02-03').getMonthNameEs();
    const expected = 'Febrero';

    expect(date).toBe(expected);
  });

  it('should return the month name in English', () => {
    const date = new ChavetasoftDates('2021-02-03').getMonthNameEn();
    const expected = 'February';

    expect(date).toBe(expected);
  });

  it('should return a string like "Month DD, YYYY "', () => {
    const date = new ChavetasoftDates('2021/02/03').getLongDateEn();
    const expected = 'February 3, 2021';

    expect(date).toEqual(expected);
  });

  it('should return a string like "DD de Mes de YYYY "', () => {
    const date = new ChavetasoftDates('2021-02-03').getLongDateEs();
    const expected = '3 de Febrero de 2021';

    expect(date).toBe(expected);
  });
  it('should return the date in one string like MM/DD/YYYY when the class is created from one typeof Date object  ', () => {
    const date = new Date('2021/02/03');
    const chavetasoftDate = new ChavetasoftDates(date);
    const result = chavetasoftDate.en();
    const expected = '2/3/2021';

    expect(date).toBeInstanceOf(Date);
    expect(result).toEqual(expected);

  });
});
