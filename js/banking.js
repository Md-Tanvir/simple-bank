//handle deposit button event

document.getElementById('deposit-btn').addEventListener('click',function(){

    //always first e  console.log('clicked'); kore button kaaj kore kina check korte hobe as a junior

    //get the amount deposited

    const depositInput = document.getElementById('deposit-input');

    const depositAmount = document.getElementById('deposit-amount');

    const previousDepositAmount = depositAmount.innerText;

    const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositInput.value);

    depositAmount.innerText = newDepositAmount;

    // update account balance
    const balanceAmount = document.getElementById('balance-amount');

    const previousBalanceAmount = balanceAmount.innerText;

    const newBalanceAmount = parseFloat(previousBalanceAmount) + parseFloat(depositInput.value);

    balanceAmount.innerText = newBalanceAmount;


    // clear the deposit input field
    depositInput.value = '';

});

//handle withdraw button event

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmount = document.getElementById('withdraw-amount');

    const previousWithdrawAmount = withdrawAmount.innerText;

    const newWithdrawAmount = parseFloat(previousWithdrawAmount) + parseFloat(withdrawInput.value);

    withdrawAmount.innerText = newWithdrawAmount;

    const balanceAmount = document.getElementById('balance-amount');

    const previousBalanceAmount = balanceAmount.innerText;

    const newBalanceAmount = parseFloat(previousBalanceAmount) - parseFloat(withdrawInput.value);

    balanceAmount.innerText = newBalanceAmount;

    // clear the withdraw input field
    withdrawInput.value = '';


})