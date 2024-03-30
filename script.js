function convertUSDToCAD() {
    let usdAmount = parseFloat(document.getElementById('usdamount').value);

    if (isNaN(usdAmount)) {
        alert('Please enter a valid amount in USD.');
        return;
    }

    const exchangeRate = 1.25;
    let cadAmount = usdAmount * exchangeRate;

    document.getElementById('cadamount').value = cadAmount.toFixed(3);
}

function convertCADToUSD() {
    let cadAmount = parseFloat(document.getElementById('cadamount').value);

    if (isNaN(cadAmount)) {
        alert('Please enter a valid amount in CAD.');
        return;
    }

    const exchangeRate = 1.25;
    let usdAmount = cadAmount / exchangeRate;

    document.getElementById('usdamount').value = usdAmount.toFixed(3);
}

function convertCurrency() {
    let usdAmount = parseFloat(document.getElementById('usdamount').value);
    let cadAmount = parseFloat(document.getElementById('cadamount').value);

    if (!isNaN(usdAmount)) {
        convertUSDToCAD();
    } else if (!isNaN(cadAmount)) {
        convertCADToUSD();
    } else {
        alert('Please enter a valid amount.');
    }
}
