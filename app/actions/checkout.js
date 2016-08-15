import { hashHistory } from 'react-router';

export const CHECKOUT_PROCESS_START = 'CHECKOUT_PROCESS_START';
export const CHECKOUT_PROCESS_FINISH = 'CHECKOUT_PROCESS_FINISH';
export const CHECKOUT_PROCESS_ERROR = 'CHECKOUT_PROCESS_ERROR';

function startCheckoutProcess() {
    return {
        type: CHECKOUT_PROCESS_START
    };
}

function finishCheckoutProcess(result) {
    return {
        type: CHECKOUT_PROCESS_FINISH,
        result
    };
}

function fininishCheckoutProcessWithError(error) {
    return {
        type: CHECKOUT_PROCESS_ERROR,
        error
    }
}

export function startCheckout(product) {
    return (dispatch:Function) => {
        dispatch(startCheckoutProcess());

        if (!window.PaymentRequest) {
            // PaymentRequest API is not available. Forwarding to
            // legacy form based experience.
            dispatch(fininishCheckoutProcessWithError('API is not supported'))
            location.href = '/checkout';
            return;
        }

        const supportedInstruments = [{ supportedMethods: ['visa', 'mastercard', 'amex'] }];

        const { amount, sku } = product;
        const { value, currency } = amount;

        const details = {
            displayItems: [
                {
                    label: sku,
                    amount: {
                        currency,
                        value
                    }
                },
                {
                    label: 'Shipment',
                    amount: {
                        currency,
                        value: '0.00'
                    }
                }
            ],
            total: {
                label: 'Total',
                amount: {
                    currency,
                    value
                }
            },
            shippingOptions: [
                {
                    id: 'parcel',
                    label: 'Parcel shipping',
                    amount: {
                        currency,
                        value: '0.00'
                    },
                    selected: true
                },
                {
                    id: 'furniture',
                    label: 'Furniture shipping',
                    amount: {
                        currency,
                        value: '10.00'
                    }
                }
            ]
        };

        const options = {
            requestShipping: true,
            requestPayerEmail: true,
            requestPayerPhone: true
        };

        const request = new PaymentRequest(supportedInstruments, details, options);

        request.show().then((result) => {
            return result.complete('success').then(()=> {
                dispatch(finishCheckoutProcess(result));
                hashHistory.push('/checkout-confirmation');
            });
        });

    }
}
