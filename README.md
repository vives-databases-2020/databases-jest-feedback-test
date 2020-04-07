
# Databases automated query testing

The following project is a tryout application in order to automatticaly test and give feedback. The feedback is given by running the queries onto an real database and comparing the result with some unit tests.

## Getting started

To get started with this tryout application, clone this project.

```bash
git clone git@github.com:vives-databases-2020/databases-jest-feedback-test.git
```

`cd` into the newly cloned `databases-jest-feedback-test` directory and run the following commands.

Install dependencies to run the application and testing code:

```bash
npm install
```

Install Jest globally to get access to the `jest` command inside your terminal

```bash
npm install -g jest
```

## Files

The most important files are located in the `src/` directory.

### Exercise files

The `game-reviews.js` and `spacex.js` files are JavaScript files containing the structure for a bunch of questions. The questions have a number, a question text and an answer section. The answers are empty and should be fillid in by the user.

The answers should be put between the backtick characters (`\``). This enables the use of multiline strings.

example:

```js
 {
    number: 1, question: `
    Example question.
    `,
    answer: `
        SELECT *
        FROM foo
        WHERE bar LIKE '%hello%'
        GROUP BY baz
        LIMIT 3;
    `
    }
```

### Test files

These files live in the `src/tests/` directory. These files do not need te be viewed by the user, but they contain the tests that are run.

Do not change these file.

The feedback of these tests is given by the commands below.

### Other files

The project contains some other file that enable the automation process of the test. Changing these files will result in breaking the application.

## Run the tests

### Run a single test of one exercise

The following command will only run question 23 from the spacex exercise

```bash
jest spacex -t 23
```

### Run all tests of one exercise

The following command will run all tests of the spacex exercise

```bash
jest spacex
```

### Run all tests

The following command will run all tests of all exercises

```bash
jest
```
