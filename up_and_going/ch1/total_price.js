const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 250;
const BANK_BALANCE = 300;

function calculateAmountWithTax(amt) {
    amt = amt + (amt * TAX_RATE);
    return amt;
}

function formatPrice(amt) {
    return '$' + amt.toFixed(2);
}

let amount = 0;

while(amount < BANK_BALANCE) {
    amount += PHONE_PRICE;

    if(amount < SPENDING_THRESHOLD) {
        amount += ACCESSORY_PRICE
    }
}

amount = calculateAmountWithTax(amount);
console.log(formatPrice(amount));

if(amount <= BANK_BALANCE) {
    console.log('can afford');
}
else
{
    console.log('no way');
}
