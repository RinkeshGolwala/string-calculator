# string-calculator

The `add` function is used to add integers inside the string. 

This function can:

1. Sum any amount of integers inside the string

2. Sum integers while ignoring new line delimiter (`\n`), e.g, "1\n2,3" will return 6

3. Support different delimiters.
To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.

4. throw an exception if called with a negative number: "negative numbers not allowed <negative_number>".

## Run project

```
npm i
npm test
```
