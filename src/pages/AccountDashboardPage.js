import React, {Component} from 'react';
import Dashboard from '../components/dashboard/Dashboard';

class CustomerDashboardPage extends Component {
  render() {
    const { context } = this.props;
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
