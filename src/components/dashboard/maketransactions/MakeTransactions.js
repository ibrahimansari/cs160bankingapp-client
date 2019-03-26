import React, {Component} from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

class MakeTransactions  extends Component {

    state = {
      depositNum: 0,
      withdrawNum : 0
    }


    handleDeposit =  e => {
      e.preventDefault();

      let yes =  Number(this.props.context.balance) + Number(this.state.depositNum);
      this.props.context.updateBalance(yes);
      console.log(this.props.context.balance);
    }

    handleWithdraw = e => {
      e.preventDefault();
      let yes =  Number(this.props.context.balance) - Number(this.state.depositNum);
      this.props.context.updateBalance(yes);
      console.log(this.props.context.balance);
    }


    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();
    }

    render() {
      let {balance} = this.props.context;
      return (
          <div style = {{ textAlign: 'center'}}>
          <div className="Deposit" style = {{ maxWidth: '1000px', margin: '0 auto'}}>
             <form onSubmit={this.handleDeposit}>
                <FormGroup controlId="depositNum">
                  <FormLabel>Deposit</FormLabel>
                  <FormControl
                    autoFocus
                    placeholder="Enter number to deposit"
                    type = "depositNum"
                    value ={this.state.depositNum}
                    onChange={this.handleChange}
                  />
              </FormGroup>
                <Button
                  block
                  size="large"
                  type="submit"
                >
                  Click me
                </Button>
              </form>
          </div>

          <div className="Withdraw" style = {{ maxWidth: '1000px', textAlign: 'center', margin: '0 auto'}} >
             <form onSubmit={this.handleWithdraw}>
                <FormGroup controlId="withdrawNum">
                  <FormLabel>Withdraw</FormLabel>
                  <FormControl
                    autoFocus
                    placeholder="Enter number to withdraw"
                    type = "withdrawNum"
                    value ={this.state.withdrawNum}
                    onChange={this.handleChange}
                  />
              </FormGroup>
                <Button
                  block
                  size="large"
                  type="submit"
                >
                  Click me
                </Button>
              </form>
          </div>
          <h1> Balance: ${balance} </h1>
        </div>
      );
    }
}

export default MakeTransactions;
