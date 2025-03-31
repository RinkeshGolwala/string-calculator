export function add(numbers: string): number {
  let delimiter = /,|\n/;

  // base case
  if (numbers === '') {
    return 0;
  }

  // Check if a custom delimiter is specified
  const customDelimiterMatch = numbers.match(/^\/\/(\[.*?\]|\S+)\n/);
  if (customDelimiterMatch) {
    const delimiterPart = customDelimiterMatch[1];
    numbers = numbers.slice(customDelimiterMatch[0].length); // Remove delimiter definition

    // Handle multiple custom delimiters
    const delimiters = delimiterPart
      .match(/\[.*?\]|[^\[\]]+/g) // Match delimiters inside brackets or standalone single char
      .map(d => d.replace(/[\[\]]/g, '')); // Remove brackets

    delimiter = new RegExp(delimiters.map(d => escapeRegExp(d)).join('|'), 'g'); // Create regex for splitting
  }

  // Split numbers using the determined delimiter
  const numList = numbers.split(delimiter).map(n => Number(n)).filter(n => n <= 1000);

  const negativeNums = numList.filter(num => num < 0);

  if (negativeNums.length) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(',')}`);
  }

  const result = numList.reduce((total, num) => total + num, 0);

  return result;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}