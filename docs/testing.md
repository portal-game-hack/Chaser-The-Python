# Testing

We aim to keep the code coverage of Chaser The Python high. We ask that all pull
request not only pass all existing tests, but ideally also add new tests
to cover changed code and new scenarios. Ensuring that we capture as
many code paths and use cases of Chaser The Python as possible ensures that we
all ship apps with fewer bugs.

This repository comes with linting rules for JavaScript 
 To learn more about coding style, please see the [coding-style](coding-style.md) document.

## Linting
To ensure that your JavaScript is in compliance with the coding
style, run `npm run lint-js`.

## Unit Tests

To run all unit tests, run `npm run test`.

To run only specific tests matching a pattern, run `npm run test --
-g=PATTERN`, replacing the `PATTERN` with a regex that matches the tests
you would like to run. As an example: If you want to run only IPC tests, you
would run `npm run test -- -g ipc`.