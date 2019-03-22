import React, {Component} from 'react';
import MainNavbar from '../components/navbar/MainNavbar';

class ManagerDashboardPage extends Component

  render() {
    const { context } = this.props;
    return (
      <div>
        <MainNavbar
          context = {context}
        />
        <div style = {{textAlign: 'center'}} >
          <h1>Manager Dashboard to be implemented</h1>
        </div>
      </div>
    );
  }
}

export default ManagerDashboardPage;
