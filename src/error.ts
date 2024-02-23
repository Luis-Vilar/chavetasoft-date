
class InvalidDateError extends Error {
    constructor() {
      super('Invalid Date');
      this.name = 'InvalidDateError';
    }
  }

export default InvalidDateError