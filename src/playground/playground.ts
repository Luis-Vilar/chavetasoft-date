import { ChavetasoftDates } from '../index';

var date = new ChavetasoftDates('2024-12-1'); // you can pass a string as YYYY-MM-DD
date = new ChavetasoftDates('2024/12/1'); // you can pass a string as YYYY/MM/DD
date = new ChavetasoftDates(new Date('2024-12-1')); // you can pass a Date object

console.log(date.es()); // 31/12/2021
console.log(date.en()); // 12/31/2021
console.log(date.isoShortEs()); // 31-12-2021
console.log(date.isoShortEn()); // 2021-12-31
console.log(date.getDay()); // 31
console.log(date.getMonth()); // 12
console.log(date.getYear()); // 2021
console.log(date.getWeekDay()); // 5
console.log(date.getWeekDayNameEs()); // Viernes
console.log(date.getWeekDayNameEn()); // Friday
console.log(date.getMonthNameEs()); // Diciembre
console.log(date.getMonthNameEn()); // December
console.log(date.getLongDateEs()); // 31 de Diciembre de 2021
console.log(date.getLongDateEn()); // December 31, 2021
console.log(date.getDate()); // 2024-12-01T03:00:00.000Z (Date object)