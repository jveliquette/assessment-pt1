import { test, expect, suite } from "vitest";
import { parseCsv, generateReport } from "./sales-report.js"; // import your functions from the file they're defined in

suite("parseCsv", () => {
    test("parseCsv should parse CSV data into Sale objects", () => {
        const csv = "item,price,quantity\nToy Car,10,2\nDoll,15,1";
        const sales = parseCsv(csv);
        console.log(sales);

        // We expect the CSV file to have 2 sales
        expect(sales.length).toBe(2);
        if (sales[0] && sales[1]) {
            // Check first sale
            expect(sales[0].item).toBe("Toy Car");
            expect(sales[0].price).toBe(10);
            expect(sales[0].quantity).toBe(2);

            // Check second sale
            expect(sales[1].item).toBe("Doll");
            expect(sales[1].price).toBe(15);
            expect(sales[1].quantity).toBe(1);
        }
    });
});

suite("generateReport", () => {
    test("generateReport should generate a correct report", () => {
        const sales = [
            { item: "Toy Car", price: 10, quantity: 2 },
            { item: "Doll", price: 15, quantity: 1 },
        ];

        const report = generateReport(sales);

        // We expect the report to correctly calculate total revenue and units sold
        expect(report.unitsSold).toBe(3);
        expect(report.totalRevenue).toBe(35);
    });
});
