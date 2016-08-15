import { CHECKOUT_PROCESS_FINISH } from './../actions/checkout';

export default function checkout(state, action) {
    switch (action.type) {

        case CHECKOUT_PROCESS_FINISH:
            return action.result;

        default:
            return state;
    }
}
