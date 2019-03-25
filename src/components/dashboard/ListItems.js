import React, { Component } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TodayIcon from '@material-ui/icons/Today';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class ListItems extends Component {

handleDashboardClick() {
    console.log(this.props.context.dashboardDisplay);
}

  mainListItems() {
    return (
    <div>
      <ListItem
      button
      onClick = {() => this.props.context.updateDashboardDisplay(
        this.props.context.DEFAULT_DISPLAY)
      }
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        onClick = {() => this.props.context.updateDashboardDisplay(
          this.props.context.ACCOUNTS_DISPLAY)
        }
      >
        <ListItemIcon>
          <AccountBoxIcon />
        </ListItemIcon>
        <ListItemText primary="Accounts" />
      </ListItem>
      <ListItem
      button
      onClick = {() => this.props.context.updateDashboardDisplay(
        this.props.context.MAKE_TRANSACTIONS_DISPLAY)
      }
      >
        <ListItemIcon>
          <CompareArrowsIcon />
        </ListItemIcon>
        <ListItemText primary="Make Transactions" />
      </ListItem>
      <ListItem
      button
      onClick = {() => this.props.context.updateDashboardDisplay(
          this.props.context.SETUP_BILL_AUTO_PAYMENTS_DISPLAY)
        }
      >
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Set up Bill Autopayments" />
      </ListItem>
      <ListItem
      button
      onClick = {() => this.props.context.updateDashboardDisplay(
        this.props.context.CARDS_DISPLAY)
      }
      >
        <ListItemIcon>
          <CreditCardIcon />
        </ListItemIcon>
        <ListItemText primary="Cards" />
      </ListItem>
      <ListItem
      button
      onClick = {() => this.props.context.updateDashboardDisplay(
        this.props.context.USER_SUMMARY_DISPLAY)
      }
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="User Summary" />
      </ListItem>
    </div>
  );
  }

  secondaryListItems() {
  return (
    <div>
      <ListSubheader inset>Transaction reports</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText primary="This Week" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="This Month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="This Year" />
      </ListItem>
    </div>
  );
}

  render() {
    return (
      <div>
      <List>{this.mainListItems()}</List>
      <Divider />
      <List>{this.secondaryListItems()}</List>
      </div>
    );
  }
}

export default ListItems
