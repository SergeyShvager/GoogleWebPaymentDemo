import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NotificationWidget from '../components/notification/widget';
import notificationSelector from './../selectors/notification-widget';
import { removeNotification } from './../actions/notification';


const mapDispatchToProps = (dispatch) => (bindActionCreators({
    removeNotification
}, dispatch));

export default connect(notificationSelector, mapDispatchToProps)(NotificationWidget);
