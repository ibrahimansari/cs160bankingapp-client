import React, {Component} from 'react';
import MainNavbar from '../components/navbar/MainNavbar';
import ManagerCreation from '../components/managercreation/ManagerCreation';

class ManagerCreationPage extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <ManagerCreation />
      </div>
    );
  }
}

export default ManagerCreationPage;
