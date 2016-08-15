import CHECKOUT_PROCESS_FINISH from './../actions/checkout';

export default function checkout(state, action) {

    switch(action) {

      case CHECKOUT_PROCESS_FINISH:
        return action.result;

      default:
        return {
"methodName": "mastercard",
"details": {
"cardholderName": "Jim McGill",
"cardNumber": "XXXX-XXXX-XXXX-4444",
"expiryMonth": "08",
"expiryYear": "2023",
"cardSecurityCode": "***",
"billingAddress": {
"country": "DE",
"region": "",
"city": "Berlin",
"dependentLocality": "",
"addressLine": [
"Franz-Jacob-Str 1"
],
"postalCode": "10369",
"sortingCode": "",
"languageCode": "de",
"organization": "HHM",
"recipient": "Jim McGill",
"careOf": "",
"phone": "+49 176 35257799"
}
},
"shippingAddress": {
"recipient": "Jim McGill",
"careOf": "",
"organization": "HHM",
"addressLine": [
"Franz-Jacob Str 1"
],
"dependentLocality": "",
"city": "Berlin",
"region": "",
"postalCode": "10369",
"sortingCode": "",
"country": "DE",
"phone": "+49 176 35257799"
},
"shippingOption": "978d72f66b114682ab2bbeccb50322fd",
"payerPhone": "04656 45560",
"payerEmail": "Testt1621@qa.home24.de"
};
    }
    return state;
}
