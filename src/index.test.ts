import { faker } from '@faker-js/faker';
import { add } from "./index";

describe('Add function for comma-separated numbers', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number itself if only one number is provided', () => {
    const number = faker.number.int({ min: 1, max: 100 });
    expect(add(number.toString())).toBe(number);
  });

  it('should return the sum of two comma-separated numbers', () => {
    const num1 = faker.number.int({ min: 1, max: 100 });
    const num2 = faker.number.int({ min: 1, max: 100 });
    expect(add(`${num1},${num2}`)).toBe(num1 + num2);
  });

  it('should return the sum of multiple comma-separated numbers', () => {
    const numbers = Array.from({ length: 5 }, () => faker.number.int({ min: 1, max: 100 }));
    expect(add(numbers.join(','))).toBe(numbers.reduce((sum, num) => sum + num, 0));
  });
})

describe('Add function for delimited strings', () => {
  it('should handle new line as a delimiter along with commas', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should support custom single-character delimiters', () => {
    const num1 = faker.number.int({ min: 1, max: 20 });
    const num2 = faker.number.int({ min: 1, max: 20 });
    expect(add(`//;\n${num1};${num2}`)).toBe(num1 + num2);
  });

  it('should support custom multi-character delimiters', () => {
    const numbers = Array.from({ length: 3 }, () => faker.number.int({ min: 1, max: 20 }));
    expect(add(`//[***]\n${numbers.join('***')}`)).toBe(numbers.reduce((sum, num) => sum + num, 0));
  });

  it('should support custom multiple delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
  });

  it('should support custom multiple delimiters with length longer than one char', () => {
    expect(add('//[*^][%--]\n1*^2%--3')).toBe(6);
  });
})

describe('Add function for negative numbers', () => {
  it('should throw an exception with one negative number', () => {
    const negativeNum = faker.number.int({ min: -100, max: -1 });
    const positiveNum = faker.number.int({ min: 1, max: 100 });
    expect(() => add(`${negativeNum},${positiveNum}`)).toThrow(`negative numbers not allowed ${negativeNum}`);
  });

  it('should throw an exception with list of negative numbers', () => {
    const negativeNumbers = Array.from({ length: 3 }, () => faker.number.int({ min: -50, max: -1 }));
    expect(() => add(negativeNumbers.join(','))).toThrow(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  });
})

describe('Add function for large numbers', () => {
  const num1 = faker.number.int({ min: 1, max: 20 });
  const num2 = faker.number.int({ min: 1000 });
  it('should ignore numbers greater than 1000', () => {
    expect(add(`${num1},${num2}`)).toBe(num1);
  });
})