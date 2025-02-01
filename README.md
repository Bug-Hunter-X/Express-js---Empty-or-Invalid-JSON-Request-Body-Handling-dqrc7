# Express.js - Empty or Invalid JSON Request Body Handling

This repository demonstrates a common issue in Express.js applications where the request body parsing fails when an empty or invalid JSON body is sent. The bug and its solution are provided to illustrate the problem and its fix.

## Bug

The `bug.js` file contains an Express.js application that attempts to parse the JSON request body using `express.json()`. However, it doesn't handle cases where the request body is empty or contains invalid JSON data. This leads to unexpected behavior or errors, often without clear error messages.

## Solution

The `bugSolution.js` file demonstrates how to fix this issue by adding error handling around the `express.json()` middleware and handling empty or invalid JSON requests gracefully. It uses a custom middleware to verify the incoming request and parse the JSON appropriately.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install the necessary packages.
4. Run `node bug.js` to execute the buggy application.
5. Run `node bugSolution.js` to execute the application with the solution.
6. Test the endpoints using tools like Postman or curl.