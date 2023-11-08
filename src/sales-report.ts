// importing the fs module (file system module) which helps us access and manage data)
import * as fs from "fs";

// defining a type alias named Sale that is of type object. Sale has three keys.
// item is of type string, price is of type number, and quantity is of type number.
type Sale = {
    item: string;
    price: number;
    quantity: number;
};

// defining a type alias named DepartmentReport that is of type object. DepartmentReport has two keys.
// unitsSold is of type number and totalRevenue is of type number
type DepartmentReport = {
    unitsSold: number;
    totalRevenue: number;
};

// declaring a constant variable named companyName and setting it equal to "Acme Corp."
const companyName = "Acme Corp.";

// declaring a constant variable named departments and setting it equal to an array of strings.
const departments = ["Toys", "Electronics", "Books", "Clothing"];

// declaring a function named parseCsv that takes in one parameter named data (data is of type string)
// the function will return an array of type Sale
export function parseCsv(data: string): Sale[] {

    // declaring a variable named lines and setting it equal to data.split('\n')
    // this is taking our data from the 'input' folder, splitting the data at each
    // line, and returning the split data in an array
    const lines = data.split("\n");

    // declaring a variable named sales which is an array of type Sale.
    // This variable is set equal to an empty array.
    const sales: Sale[] = [];

    // using a c-style for loop to iterate through the lines array starting at index 1
    // (this means we are not including the header in our loop operation). We will continue our
    // loop as long as i is less than the length of our lines array; and then we increment our counter(i) by 1.
    for (let i = 1; i < lines.length; i++) {

        // declaring a variable named line and setting it equal to the index of i in our lines array
        // on the first iteration it will be lines array index[1], second iteration index[2], and so
        // on until we reach the end of our array.
        const line = lines[i];

        // here we are using an if statement. So if line (declared on 46) exists...we carry out the
        // next lines of code
        if (line) {

            // this line of code is taking each piece of data from each index, splitting it at the comma,
            // and returning it as an array in the structure of [item, price, quantity]
            const [item, price, quantity] = line.split(",");

            // using an if statement saying if item and price and quantity exist, we carry out the
            // next lines of our code
            if (item && price && quantity) {

                // pushing the following data to the previously empty sales array
                sales.push({

                    // pushing item to sales array
                    item,

                    // pushing price to sales array using the parseFloat function which converts a string to a
                    // floating point number (a number with a decimal point)
                    price: parseFloat(price),

                    // pushing quantity to sales array using the parseInt function which converts a string to an integer.
                    quantity: parseInt(quantity),
                });
            }
        }
    }
    // returning sales array
    return sales;
}

// declaring a function named generateReportt hat takes in one parameter named sales (our sales array)
// the function will return a type DepartmentReport
export function generateReport(sales: Sale[]): DepartmentReport {

    // declaring a variable named totalRevenue and setting it equal to 0; used as one of our counters
    let totalRevenue = 0;

    // declaring a variable named unitsSold and setting it equal to 0; also used as one of our counters
    let unitsSold = 0;

    // using a c-style for loop, we are going to loop through our sales array. Starting at index[0]; we will continue
    // our loop as long as i is less than the length of our sales array; then we increment our counter(i) by 1.
    for (let i = 0; i < sales.length; i++) {

        // declaring a variable named sale and setting it equal to the index of i in our sales array
        // on the first iteration it will be sales array index[1], second iteration index[2], and so
        // on until we reach the end of our array.
        const sale = sales[i];

        // here we are using an if statement. So if sale (declared on 97) exists...we carry out the
        // next lines of code
        if (sale) {

            // setting totalRevenue equal to the product of sale price times sale quantity.
            // += meaning each time we iterate we are accumulating each loop's values.
            totalRevenue += sale.price * sale.quantity;

            // setting unitsSold to sale quantity.
            // += meaning each time we iterate we are accumulating each loop's values.
            unitsSold += sale.quantity;
        }
    }
    // returning an object including unitsSold and totalRevenue (aka type DepartmentReport)
    return { unitsSold, totalRevenue };
}

// declaring a function named main
export function main() {

    // Generate report for each department starting with a for of loop.
    for (const department of departments) {

        // declaring a variable named data. This is our data file. We are reading the contents of the `input/${department}.csv` file.
        // we are setting utf-8 as our option which is a tool used to encode or decode

        const data = fs.readFileSync(`input/${department}.csv`, "utf8");

        // declaring a variable named sales and setting it equal to our parseCSV function that we explained earlier
        const sales = parseCsv(data);

        // declaring a variable named report and setting it equal to our generateReport function that we explained earlier
        const report = generateReport(sales);

        // declaring a variable named averageSellingPrice and setting it equal to the result of dividing totalRevenue by unitsSold (which are both in the report object)
        const averageSellingPrice = report.totalRevenue / report.unitsSold;

        // inside of our function we are using console.log to return our data in a particular format.
        // this console.log starts with an empty line then logs --- Acme Corp. - ________ Department ---
        console.log(`\n--- ${companyName} - ${department} Department ---`);

        // this console.log will log the number of units sold (located in the report object)
        console.log(`Units Sold: ${report.unitsSold}`);

        //this console.log will log the averageSellingPrice (from line 134) using the .tofixed method which takes 2 as an argument (meaning the number will include two numbers after the decimal point)
        console.log(`Average Selling Price: ${averageSellingPrice.toFixed(2)}`);

        // this console.log will log the total revenue (located in the report object)
        // it uses the .tofixed method which takes 2 as an argument (meaning the number will include two numbers after the decimal point)
        console.log(`Total Revenue: ${report.totalRevenue.toFixed(2)}`);
    }
}
