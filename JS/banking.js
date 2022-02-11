// handle deposit 

document.getElementById('deposit-button').addEventListener('click', function () {


    // update diposit

    const depositInput = document.getElementById('deposit-input');

    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = newDepositAmount + previousDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance account for deposit calculation
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;

    balanceTotal.innerText = newBalanceTotal;

    // clear input field

    depositInput.value = '';


})
//  handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withDrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withDrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withAmountText);

    // set total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previusWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previusWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clear withdrw input

    withDrawInput.value = '';

    // update balance for withdraw calculation

    const balanceTotal = document.getElementById('balance-total');

    const previousBalanceText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;







})