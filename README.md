# Sales Report

**Goal:** Produce a 5 minute video explaining how the code functions.

One of the first tasks you are given at the company is to document a piece of
code by adding comments to it, and making a 5 minute video on the logic of the
code.

The code in question is a script which summarizes all the sales data from four
different departments in the company.

The sales data is located in the `input` folder. They are CSV files which
contain the following fields:

```csv
item,price,quantity
```

Each line in the file represents an order completed from that department.

The script is named `sales-report.ts`. You can see the script run by first installing the dependencies with `npm install`, then run the script with `npm start`.

Start off your task by adding comments above every line of code.

Then record a 5 minute video (please set a timer!) explaining how the `parseCSV`
and `generateReport` functions work.

You can build the code with `npm run build`

You can build and run the script with `npm start`

You can run the automated tests with `npm test`
