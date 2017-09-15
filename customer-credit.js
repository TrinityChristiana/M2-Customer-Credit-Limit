// Trinity Terry
// 09/13/17
// JavaScript for Module 2 programming problem.
// This program will calculate customers's 
// new credit limit after a 25% decrease.

function main()
{
    //Declare Variables
    var customerCredit;
    var creditDecrease;
    var creditNew;
    var limitCut = .25;
    var accountNumber;

    //Call modules
    accountNumber = getAccountNumber(accountNumber);
    customerCredit = getCustomerCredit(customerCredit);
    creditDecrease = calcCreditDecrease(creditDecrease, customerCredit, limitCut);
    creditNew = calcCreditNew(creditNew, creditDecrease, customerCredit);
    displayOutput(creditNew, accountNumber);
}

//This module will get user to input their account number
function getAccountNumber(accountNumber)
{
    accountNumber=prompt("Enter Customer Account Number");
    return accountNumber;
}

//This module gets the user to input their current credit limit
function getCustomerCredit(customerCredit)
{
    customerCredit=prompt("Enter current credit limit")
    return customerCredit
}

//This module will calculate the amount of credit decrease
function calcCreditDecrease(creditDecrease, customerCredit, limitCut)
{
    return creditDecrease = customerCredit * limitCut
}

//This module wil calculate the new credit limit
function calcCreditNew(creditNew, creditDecrease, customerCredit)
{
    return creditNew = customerCredit - creditDecrease
}

//This module will display theuser's accout number along with th new calculated credit limit.
function displayOutput(creditNew, accountNumber)
{
    alert("Account Number: " + accountNumber + "\n \nYour new credit limit is: " + creditNew)
}

main();