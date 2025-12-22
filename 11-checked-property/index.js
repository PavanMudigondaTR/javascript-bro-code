
subscribeCheckBox = document.getElementById("subscribeCheckBox");
visaRadioBtn = document.getElementById("visaRadioBtn");
masterRadioBtn = document.getElementById("masterRadioBtn");
americanExpressRadioBtn = document.getElementById("americanExpressRadioBtn");
paypalRadioBtn = document.getElementById("paypalRadioBtn");
submitBtn = document.getElementById("submitBtn");
subscriptionConfirmationMessage = document.getElementById("subscriptionConfirmationMessage");
selectedPaymentMethodConfirmationMessage = document.getElementById("selectedPaymentMethodConfirmationMessage");

submitBtn.onclick = function() {
    // Check if the checkbox is checked
    if (subscribeCheckBox.checked) {
        subscriptionConfirmationMessage.textContent = "You are subscribed to the newsletter.";
    } else {
        subscriptionConfirmationMessage.textContent = "You are not subscribed to the newsletter.";
    }

    // Determine which radio button is selected
    let selectedPaymentMethod = "";
    if (visaRadioBtn.checked) {
        selectedPaymentMethod = "Visa";
    } else if (masterRadioBtn.checked) {
        selectedPaymentMethod = "MasterCard";
    } else if (americanExpressRadioBtn.checked) {
        selectedPaymentMethod = "American Express";
    } else if (paypalRadioBtn.checked) {
        selectedPaymentMethod = "PayPal";
    } else {
        selectedPaymentMethod = "No payment method selected.";
    }

    selectedPaymentMethodConfirmationMessage.textContent = `Selected Payment Method: ${selectedPaymentMethod}`;
};