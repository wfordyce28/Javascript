/**
 *   @author Fordyce, William (wfordyce28@gmail.com)
 *   @version 0.0.1
 *   @summary Code demonstration:  :: created:
 */

let bedroomNumber, bathroomNumber, garageSize, lotNumber;
let bedroomCalculated, bathroomCalculated, garageCalculated;
let finalPrice;
const BEDROOM_PRICE = 17000;
const BATHROOM_PRICE = 12500;
const GARAGE_PRICE = 6000;
const HOUSE_PRICE = 50000;

"use strict";
const PROMPT = require('readline-sync');

/**
 * @method
 * @desc The dispatch method for the program
 * @returns {null}
 */
function main() {
    setLotNumber();
    setBedroomNumber();
    setBathroomNumber();
    setGarageSize();
    setBedroomCalculated();
    setBathroomCalculated();
    setGarageCalculated();
    setFinalPrice();
    printFinalPrice();
}

main();

/**
 * @method
 * @desc Inputting what the lot number is
 * @returns {null}
 */
function setLotNumber() {
    lotNumber = Number(PROMPT.question(`\nPlease enter lot number: `));
}

/**
 * @method
 * @desc Inputting the number of bedrooms the house contains
 * @returns {null}
 */
function setBedroomNumber() {
    bedroomNumber = Number(PROMPT.question(`\nPlease enter number of bedrooms: `));
}

/**
 * @method
 * @desc Inputting the number of bathrooms the house contains
 * @returns {null}
 */
function setBathroomNumber() {
    bathroomNumber = Number(PROMPT.question(`\nPlease enter number of bathrooms: `));
}

/**
 * @method
 * @desc Inputting how many cars the garage is intended to hold
 * @returns {null}
 */
function setGarageSize() {
    garageSize = Number(PROMPT.question(`\nPlease enter number of cars garage can house: `));
}

/**
 * @method
 * @desc Calculates how much the cost will increase based on bedroom quantity
 * @returns {null}
 */
function setBedroomCalculated() {
    bedroomCalculated = bedroomNumber * BEDROOM_PRICE;
}

/**
 * @method
 * @desc Calculates how much the cost will increase based on bathroom quantity
 * @returns {null}
 */
function setBathroomCalculated() {
    bathroomCalculated = bathroomNumber * BATHROOM_PRICE;
}

/**
 * @method
 * @desc Calculates how much the cost will increase based on garage size
 * @returns {null}
 */
function setGarageCalculated() {
    garageCalculated = garageSize * GARAGE_PRICE;
}

/**
 * @method
 * @desc Calculates the total cost of the lot
 * @returns {null}
 */
function setFinalPrice() {
    finalPrice = bedroomCalculated + bathroomCalculated + garageCalculated + HOUSE_PRICE;
}

/**
 * @method
 * @desc Displays lot number and calculated final price
 * @returns {null}
 */
function printFinalPrice() {
    console.log(`\n Lot ${lotNumber} is worth: \$${finalPrice}`)
}