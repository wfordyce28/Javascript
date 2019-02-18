/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.1
 *   @summary Code demonstration:  :: created:
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let purchasePrice, commission;
let salespersonName;
const COMMISSION_RATE = .05;

/**
 * @method
 * @desc The dispatch method for our program
 * @returns {null}
 */
function main() {
    setSalespersonName();
    setPurchasePrice();
    setCommission();
    printCommission();
}

main();

/**
 * @method
 * @desc Set the vehicle purchase price
 * @returns {null}
 */
function setPurchasePrice() {
    purchasePrice = Number(PROMPT.question(`\nPlease enter vehicle purchase price: `));
}

/**
 * @method
 * @desc Set the total commission
 * @returns {null}
 */
function setCommission() {
    commission = purchasePrice * COMMISSION_RATE;
}

/**
 * @method
 * @desc Set the salesperson's name
 * @returns {null}
 */
function setSalespersonName() {
    salespersonName = PROMPT.question(`\nPlease enter salesperson's name: `);
}

/**
 * @method
 * @desc Output the final commission from the sale
 * @returns {null}
 */
function printCommission() {
    console.log(`\n${salespersonName}'s commission: \$${commission}`);
}

/*
 Plan the logic for a program for the sales manager of The Henry Used Car Dealership. The program will determine the
 salesperson's commission on any car sold. Input includes the Salesperson's name & the sale price. The output
 is the commission which is 5% of the sale price.
 */