import React, {Component} from 'react';
import { Button, Card, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Popup from "reactjs-popup";

class MakeTransactions  extends Component {

    state = {
      depositNum: 0,
      withdrawNum : 0,
      transferName : "",
      transferNum : 0,
      showPopup : false
    }


  togglePopup() {
  this.setState({showPopup: !this.state.showPopup});
}

    handleDeposit =  e => {
      //e.preventDefault();
      this.togglePopup();
      let result =  Number(this.props.context.balance) + Number(this.state.depositNum);
      this.props.context.updateBalance(result);
    }

    handleWithdraw = e => {
      //e.preventDefault();
      this.togglePopup();
      let result =  Number(this.props.context.balance) - Number(this.state.withdrawNum);
      this.props.context.updateBalance(result);
    }

    handleTransfer = e => {
      e.preventDefault();
      this.togglePopup();

      // do backend stuff
      // for transfering money
      // if external just subtract money from the account
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

          <div style = {{ textAlign: 'center', paddingTop: '30px'}}>

          <Popup
            trigger={<Button block size = "large" type="submit">Make a Deposit</Button>}
            position="center right"
            modal
            open= {this.state.showPopup}
            >
            <Card style = {{height: '18rem', textAlign: 'center'}}>
              <Card.Body>
           <Card.Title>Making an imaginary deposit/credit</Card.Title>
          <div className="Deposit" style = {{ maxWidth: '500px', margin: '0 auto'}}>
             <form onSubmit={this.handleDeposit}>
                <FormGroup controlId="depositNum">
                  <FormLabel>Amount to deposit</FormLabel>
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
                  Deposit
                </Button>
              </form>
          </div>
        </Card.Body>
       </Card>
           </Popup>

           <Popup
             trigger={<Button block size = "large" type="submit">Make a Withdrawal</Button>}
             position="center right"
             modal
             open= {this.state.showPopup}
             style = {{ maxWidth: '500px'}}
             >
             <Card style = {{height: '18rem', textAlign: 'center'}}>
               <Card.Body>
            <Card.Title>Making a withdrawal</Card.Title>
          <div className="Withdraw" style = {{ maxWidth: '500px', textAlign: 'center', margin: '0 auto'}} >
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
        </Card.Body>
       </Card>
      </Popup>

      <Popup
        trigger={<Button block size = "large" type="submit">Transfer money to another account</Button>}
        position="center right"
        modal
        open= {this.state.showPopup}
        style = {{ maxWidth: '500px'}}
        >
        <Card style = {{height: '18rem', textAlign: 'center'}}>
          <Card.Body>
       <Card.Title>Making a transfer</Card.Title>
     <div className="Transfer" style = {{ maxWidth: '500px', textAlign: 'center', margin: '0 auto'}} >
        <form onSubmit={this.handleTransfer}>
           <FormGroup controlId="transferName">
             <FormLabel>Name of Transferee</FormLabel>
             <FormControl
               autoFocus
               placeholder="Enter email if internal transfer or enter an name if external transfer"
               type = "transferName"
               value ={this.state.transferName}
               onChange={this.handleChange}
             />
         </FormGroup>
          <FormGroup controlId="transferNum">
           <FormLabel>Ammount to be transfered</FormLabel>
           <FormControl
             placeholder="Enter amount to transfer"
             type = "transferNum"
             value ={this.state.transferNum}
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
   </Card.Body>
  </Card>
 </Popup>
        <h1> Balance: ${balance} </h1>
        </div>
      );
    }
}

export default MakeTransactions;
