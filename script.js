// Function to convert USD to CAD
function convertUSDToCAD() {
    // Get the USD amount from the input field
    let usdAmount = parseFloat(document.getElementById('usdamount').value);

    // Check if the input is a valid number
    if (isNaN(usdAmount)) {
        alert('Please enter a valid amount in USD.');
        return;
    }

    // Conversion rate from USD to CAD
    const exchangeRate = 1.25;
    let cadAmount = usdAmount * exchangeRate;
    
    // Display the converted amount in the CAD input field
    document.getElementById('cadamount').value = cadAmount.toFixed(3);
}

// Function to convert CAD to USD
function convertCADToUSD() {
    // Get the CAD amount from the input field
    let cadAmount = parseFloat(document.getElementById('cadamount').value);
    
    // Check if the input is a valid number
    if (isNaN(cadAmount)) {
        alert('Please enter a valid amount in CAD.');
        return;
    }
    
    // Conversion rate from USD to CAD
    const exchangeRate = 1.25;
    let usdAmount = cadAmount / exchangeRate;

    // Display the converted amount in the USD input field
    document.getElementById('usdamount').value = usdAmount.toFixed(3);
}

// Main conversion function
function convertCurrency() {
    // Get the USD and CAD amounts from the input fields
    let usdAmount = parseFloat(document.getElementById('usdamount').value);
    let cadAmount = parseFloat(document.getElementById('cadamount').value);

    // Check which amount is valid and perform the conversion
    if (!isNaN(usdAmount)) {
        convertUSDToCAD(); //function call
    } else if (!isNaN(cadAmount)) {
        convertCADToUSD();//function call
    } else {
        alert('Please enter a valid amount.');
    }
}
