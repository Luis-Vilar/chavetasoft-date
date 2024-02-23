# Chavetasoft Dates

Chavetasoft Dates is a  simple library for help with dates in different formats and languages for now Español an English. It provides methods to parse and format dates, retrieve specific date components, and get localized date strings.
For now this run only in typescript.

## Installation

To install Chavetasoft Date, you can use npm:
  
  ```bash
  npm install chavetasoft-date
  ```

 ## Usage in TypeScript
  
  ```typescript
import fecha  from 'chavetasoft-date';

const date = new fecha('2021-12-31');
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


```
## Usage in JavaScript
  
  ```javascript
const  ChavetasoftDates = require("chavetasoft-date").default ;
const fecha = new ChavetasoftDates("2021-03-01");

console.log(fecha.es()); // 1/3/2021
console.log(fecha.en()); // 3/1/2021
console.log(fecha.getLongDateEs()); // 1 de enero de 2021
console.log(fecha.getLongDateEn()); // January 1, 2021
console.log(fecha.isoShortEs()); // 01-03-2021
console.log(fecha.isoShortEn()); // 2021-03-01  
console.log(fecha.getDay()); // 1
console.log(fecha.getMonth()); // 3 
console.log(fecha.getYear()); // 2021 
console.log(fecha.getWeekDay()); // 1
console.log(fecha.getWeekDayNameEs()); // Lunes
console.log(fecha.getWeekDayNameEn()); // Monday
console.log(fecha.getMonthNameEs()); // Marzo
console.log(fecha.getMonthNameEn()); // March
```


## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
[Chavetasoft](https://luisvilar.netlify.app/)

## Version
  0.0.1
