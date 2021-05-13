function handleProductChange(product, isIncrease) {    
    const productCount = getInputValue(product)
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    } if (isIncrease == false && productNewCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    } if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = "$" + productTotal;
    calculateTotal();
}

function calculateTotal() {
    /* const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case'); */

    const totalPrice = getInputValue('phone') * 1219 + getInputValue('case')* 59;
    document.getElementById('total-price').innerText = totalPrice;
    const txtAmount = totalPrice / 10;
    document.getElementById('tax-amount').innerText = txtAmount;
    const grandTotal = Math.round(totalPrice + txtAmount);
    document.getElementById('grand-total').innerText = grandTotal;

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;


    /* const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value) */
}







/* function handleCaseChange(isIncrease) {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }if (isIncrease == false && caseNewCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const casetTotal = caseNewCount * 59;
    document.getElementById('case-total').innerText = casetTotal;
}

function handlePhoneChange(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }if (isIncrease == false && phoneNewCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;
}
 */



// document.getElementById('case-increase').addEventListener('click', function () {
//     /*     const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         const caseNewCount = caseCount + 1;
//         caseInput.value = caseNewCount;
//         const casetTotal = caseNewCount * 59;
//         document.getElementById('case-total').innerText = casetTotal; */

// });

// document.getElementById('case-decrease').addEventListener('click', function () {
//     /*     const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         let caseNewCount = caseCount;
//         if(caseNewCount > 0){
//             caseNewCount =caseCount-1;
//         }
//         caseInput.value = caseNewCount;
//         const casetTotal = caseNewCount *59;
//         document.getElementById('case-total').innerText = casetTotal; */

// });



/* document.getElementById('phone-increase').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount +1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;
});

document.getElementById('phone-decrease').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(phoneNewCount>0){
        phoneNewCount = phoneCount - 1
    }
    phoneInput.value =  phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;
})

 */