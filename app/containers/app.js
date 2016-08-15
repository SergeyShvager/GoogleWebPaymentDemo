import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/app';

import appSelector from './../selectors/app';
import { startCheckout } from '../actions/checkout';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    startCheckout
}, dispatch));

export default connect(appSelector, mapDispatchToProps)(App);
