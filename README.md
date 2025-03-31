# string-calculator

This is a simple string calculator that takes a string of numbers separated by different delimiters and returns their sum. It supports commas, new lines, custom delimiters, and error handling for negative numbers.

---

**This function supports:**

1. Comma-Separated Numbers

    ```
    console.log(add("1,2,3"));  // Output: 6
    ```

2. New Line (\n) as a Delimiter

    ```
    console.log(add("1\n2,3"));  // Output: 6
    ```

3. Custom Single-Character Delimiters

    Define a custom delimiter using the format: `//[delimiter]\n[numbers]`

    ```
    console.log(add("//;\n1;2;3"));  // Output: 6
    ```

4. Custom Multi-Character Delimiters

    Use brackets [ ] for multi-character delimiters:

    ```
    console.log(add("//[***]\n1***2***3"));  // Output: 6
    ```

5. Multiple Custom Delimiters

    Use multiple single or multi-character delimiters:

    ```
    console.log(add("//[*][%]\n1*2%3"));   // Output: 6
    console.log(add("//[*^][%--]\n1*^2%--3"));  // Output: 6
    ```

6. Handling Negative Numbers

    If a negative number is included, an exception is thrown:

    ```
    console.log(add("-1,2,3"));  // Throws: "negative numbers not allowed -1"
    console.log(add("-1,-2,3"));  // Throws: "negative numbers not allowed -1,-2"
    ```

7. Ignoring Numbers Greater Than 1000

    Numbers above 1000 are ignored:

    ```
    console.log(add("2,1001"));  // Output: 2
    ```

## Initialize project

```
npm i
```

## Run tests

```
npm test
```

## Run tests on every change

```
npm run test:watch
```