import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegisterCompany from './../../components/company/register/index';

import { createCompany } from './../../actions/company';
import { createTeam } from './../../actions/team';
import { checkUserAuth } from './../../actions/user';

import selector from './../../selectors/checkout-confirmation';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    createCompany,
    createTeam
}, dispatch));

export default connect(selector, mapDispatchToProps)(RegisterCompany);
