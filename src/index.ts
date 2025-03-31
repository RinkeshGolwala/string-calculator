export function add(numbers: string): number {
    let defaultDelimiter = ',';

    // base case
    if (numbers === '') {
        return 0;
    }

    const result = numbers.split(defaultDelimiter).reduce((total, num) => total + Number(num), 0);

    return result;
}