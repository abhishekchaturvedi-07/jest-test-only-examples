# jest-test-only-examples

How to install?

Install Jest using yarn:
yarn add --dev jest

Or npm:
npm install --save-dev jest

And Enjoy testing!

In this repo, Examples are very easy-peasy, if you want to test your code in abc.js file. Create a abc.test.js file and run jest script which you've mentioned in package.json. My package json script looks like: 
"scripts": {
    "test": "jest --coverage"
  },
 So, I can test using "npm test" It will test the code and return if it will pass/fail. Use --coverage for debuging line by line.
 You can also debug with the UI view, by running the index.html file from here "/coverage/lcov-report/index.html" in your browser.


Check for Truthy and Falsy values: 

toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false

NOTE: If you want to use object/array, toBe will not work you've to use toEqual.... toBe is basically for primitive types and in object/array is a reference type in js!

If you want to continue watch your test, you can use watcher by just adding this in your script:
"testwath": "jest --watchAll"

Enjoy Testing! 
