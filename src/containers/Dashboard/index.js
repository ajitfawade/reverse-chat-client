import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';
import { fetchAllMessagesInitiated } from '../../actions/messageActions';
import { fetchAllUsersInitiated } from '../../actions/userActions';

class DashboardImpl extends PureComponent {
  componentWillMount() {
    this.props.fetchAllMessages();
    this.props.fetchAllUsers();
  }

  render() {
    return <Dashboard />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  fetchAllMessages: () => dispatch(fetchAllMessagesInitiated()),
  fetchAllUsers: () => dispatch(fetchAllUsersInitiated())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardImpl);
