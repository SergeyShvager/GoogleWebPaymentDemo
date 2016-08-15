import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selector from './../../selectors/checkout-confirmation';
import CheckoutConfirmation from './../../components/checkout-confirmation';

const mapDispatchToProps = (dispatch) => (bindActionCreators({
}, dispatch));

export default connect(selector, mapDispatchToProps)(CheckoutConfirmation);
