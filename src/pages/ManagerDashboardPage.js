import React, {Component} from 'react';
import MainNavbar from '../components/navbar/MainNavbar';
import ManagerDashboard from '../components/managerdashboard/ManagerDashboard';

class ManagerDashboardPage extends Component {
  render() {
    const { context } = this.props;
    return (
      <div>
        <MainNavbar
          context = {context}
        />
      <ManagerDashboard
        context = {context}
        />
      </div>
    );
  }
}

export default ManagerDashboardPage;
