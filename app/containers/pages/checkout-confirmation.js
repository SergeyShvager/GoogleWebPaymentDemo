import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selector from './../../selectors/checkout-confirmation';
import CheckoutConfirmation from './../../components/checkout-confirmation';


export default connect(selector, null)(CheckoutConfirmation);
