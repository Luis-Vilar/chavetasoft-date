import InvalidDateError from './error';

export class ChavetasoftDates {
  private fecha: Date;
  constructor(date: string | Date) {
    if (date instanceof Date) {
      this.fecha = date;
      return;
    }
    if (date.includes('-')) {
      date = date.split('-').join('/');
      this.fecha = new Date(date);
    } else {
      this.fecha = new Date(date);
    }
    if (this.fecha.toString() === 'Invalid Date') {
      throw new InvalidDateError();
    }
  }

  es(): string {
    return `${this.fecha.getDate()}/${this.fecha.getMonth() +
      1}/${this.fecha.getFullYear()}`;
  }
  en(): string {
    return `${this.fecha.getMonth() +
      1}/${this.fecha.getDate()}/${this.fecha.getFullYear()}`;
  }

  isoShortEn(): string {
    return this.fecha.toISOString().slice(0, 10);
  }
  isoShortEs(): string {
    return this.fecha
      .toISOString()
      .slice(0, 10)
      .split('-')
      .reverse()
      .join('/');
  }

  getDay(): number {
    return this.fecha.getDate();
  }

  getMonth(): number {
    return this.fecha.getMonth() + 1;
  }

  getYear(): number {
    return this.fecha.getFullYear();
  }

  getWeekDay(): number {
    return this.fecha.getDay();
  }

  getWeekDayNameEs(): string {
    const dias = [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ];
    return dias[this.fecha.getDay()];
  }

  getWeekDayNameEn(): string {
    const dias = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return dias[this.fecha.getDay()];
  }

  getMonthNameEs(): string {
    const meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Setiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    return meses[this.fecha.getMonth()];
  }

  getMonthNameEn(): string {
    const meses = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return meses[this.fecha.getMonth()];
  }

  getLongDateEs(): string {
    return `${this.fecha.getDate()} de ${this.getMonthNameEs()} de ${this.fecha.getFullYear()}`;
  }

  getLongDateEn(): string {
    return `${this.getMonthNameEn()} ${this.fecha.getDate()}, ${this.fecha.getFullYear()}`;
  }
}
