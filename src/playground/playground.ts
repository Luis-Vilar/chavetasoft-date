import { ChavetasoftDates } from '../index';

var date = new ChavetasoftDates('2024-12-1'); // you can pass a string as YYYY-MM-DD
date = new ChavetasoftDates('2024/12/1'); // you can pass a string as YYYY/MM/DD
date = new ChavetasoftDates(new Date('2024-12-1')); // you can pass a Date object

console.log(date.es()); // 1/12/2024
console.log(date.en()); // 12/1/2024
console.log(date.isoShortEs()); // 1-12-2024
console.log(date.isoShortEn()); // 2024-12-1
console.log(date.isoShortPt()); // 2024-12-1
console.log(date.getDay()); // 1
console.log(date.getMonth()); // 12
console.log(date.getYear()); // 2024
console.log(date.getWeekDay()); // 0
console.log(date.getWeekDayNameEs()); // Domingo
console.log(date.getWeekDayNameEn()); // Sunday
console.log(date.getWeekDayNamePt()); // Domingo
console.log(date.getMonthNameEs()); // Diciembre
console.log(date.getMonthNameEn()); // December
console.log(date.getMonthNamePt()); // Dezembro
console.log(date.getLongDateEs()); // 1 de Diciembre de 2024
console.log(date.getLongDateEn()); // December 1, 2024
console.log(date.getLongDatePt()); // 1 de Dezembro de 2024
console.log(date.getDate()); // 2024-12-01T03:00:00.000Z (Date object)
