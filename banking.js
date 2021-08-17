function doubleIt(num) {
    const result = num * 2;
    return result;
}
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7);

function getInputvalue(inputId) {
    const dipositInput = document.getElementById(inputId);
    const dipositAmountText = dipositInput.value;
    const dipositAmount = parseFloat(dipositAmountText);
    //  clrar input field 
    dipositInput.value = '';
    return dipositAmount;
}



// handle diposit event 
document.getElementById('diposit-button').addEventListener('click', function () {
    // console.log('diposit button');

    // const dipositInput = document.getElementById('diposit-input');

    // const dipositAmountText = dipositInput.value;
    // const dipositAmount = parseFloat(dipositAmountText)
    //  ;
    const dipositAmount = getInputvalue('diposit-input');


    // update diposit total 


    const dipositTotal = document.getElementById('diposit-total');
    const carrentDipositText = dipositTotal.innerText;
    const carrentDiposit = parseFloat(carrentDipositText);
    const newDiposit = parseFloat(carrentDiposit) + dipositAmount;

    dipositTotal.innerText = newDiposit;

    // update account  balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(balanceTotalText);
    const newbalancetotal = previouseBalanceTotal + newDiposit;
    balanceTotal.innerText = newbalancetotal;

    // // clrar the diposit input field 
    // dipositInput.value = '';

});
// handle withdraw event handler 

document.getElementById('withdrow-button').addEventListener('click', function () {
    // console.log('click widraw');

    // const withdrowInput = document.getElementById('withdrow-input');
    // const withdrowamountText = withdrowInput.value;
    // const newWithdrowAmount = parseFloat(withdrowamountText);
    // console.log(newWithdrowAmount);
    const newWithdrowAmount = getInputvalue('withdrow-input')

    // set withdrow total 
    const withdrowTotal = document.getElementById('widhrow-total');
    const previouseWithderowtext = withdrowTotal.innerText;
    const previouseWithderowtotal = parseFloat(previouseWithderowtext);
    const newWithdrowTotal = previouseWithderowtotal + newWithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;
    // // clear wthdreow field 
    // withdrowInput.value = '';

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previouseBalanceText = balanceTotal.innerText;
    const previouseBalanceTotal = parseFloat(previouseBalanceText);
    const newbalancetotal = previouseBalanceTotal - newWithdrowAmount;

    balanceTotal.innerText = newbalancetotal;

});










