import React, {Component} from 'react';
import Dashboard from '../components/dashboard/Dashboard';

class CustomerDashboardPage extends Component {
  render() {
    const { context } = this.props;

    if(this.props.context.isSignedIn !== "true") // yeah, it converts to string
    {
      return null;
    }

    return (
      <div>
        <Dashboard
          context = {context}
        />
      </div>
    );
  }
}

export default CustomerDashboardPage;
