# Heartburn Checker

The Heartburn Checker is a web application designed to assess symptoms related to heartburn and provide appropriate medical recommendations based on user responses. This application guides users through a series of questions about their symptoms and health history to determine the severity of their condition.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Running Tests](#running-tests)

## Installation

To run the Heartburn Checker locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/skontan/heartburn-checker.git
   cd heartburn-checker
   ```

2. Install dependencies using npm:

   ```
   npm run start
   ```

   This will launch the Heartburn Checker application locally. Open your web browser and navigate to http://localhost:3000 to view it.

## How to Use

1. Answer each question presented on the screen by clicking on the appropriate answer.

2. Click the "Next" button to proceed to the next question.

3. After answering all questions, the application will display a recommendation based on your responses.

## Technologies Used

The Heartburn Checker is built using the following technologies and libraries:

- React: Frontend library for building user interfaces.
- Material-UI: React component library for designing responsive and accessible UIs.
- TypeScript: Typed JavaScript superset for improved code quality and maintainability.
- React Testing Library: Testing utilities for integration tests to ensure application functionality.

## Running Tests

You can run integration tests to verify the functionality of the Heartburn Checker:

```
npm run test
```

This command will execute the integration tests using React Testing Library, ensuring that the application behaves correctly across different scenarios.
