"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sales_report_js_1 = require("./sales-report.js"); // import your functions from the file they're defined in
(0, vitest_1.suite)("parseCsv", () => {
    (0, vitest_1.test)("parseCsv should parse CSV data into Sale objects", () => {
        const csv = "item,price,quantity\nToy Car,10,2\nDoll,15,1";
        const sales = (0, sales_report_js_1.parseCsv)(csv);
        console.log(sales);
        // We expect the CSV file to have 2 sales
        (0, vitest_1.expect)(sales.length).toBe(2);
        if (sales[0] && sales[1]) {
            // Check first sale
            (0, vitest_1.expect)(sales[0].item).toBe("Toy Car");
            (0, vitest_1.expect)(sales[0].price).toBe(10);
            (0, vitest_1.expect)(sales[0].quantity).toBe(2);
            // Check second sale
            (0, vitest_1.expect)(sales[1].item).toBe("Doll");
            (0, vitest_1.expect)(sales[1].price).toBe(15);
            (0, vitest_1.expect)(sales[1].quantity).toBe(1);
        }
    });
});
(0, vitest_1.suite)("generateReport", () => {
    (0, vitest_1.test)("generateReport should generate a correct report", () => {
        const sales = [
            { item: "Toy Car", price: 10, quantity: 2 },
            { item: "Doll", price: 15, quantity: 1 },
        ];
        const report = (0, sales_report_js_1.generateReport)(sales);
        // We expect the report to correctly calculate total revenue and units sold
        (0, vitest_1.expect)(report.unitsSold).toBe(3);
        (0, vitest_1.expect)(report.totalRevenue).toBe(35);
    });
});
//# sourceMappingURL=sales-report.test.js.map