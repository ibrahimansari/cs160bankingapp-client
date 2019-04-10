import React, {Component} from 'react';
import { Button, Card, FormGroup, FormControl, FormLabel} from "react-bootstrap";
import Popup from "reactjs-popup";

class MakeTransactions  extends Component {

    state = {
      depositNum: 0,
      withdrawNum : 0,
      transferName : "",
      transferNum : 0,
      showPopup : false,
      internalTransfer : "Checking To Savings"
    }

   handleDeposit = async e => {
      if(isNaN(this.state.depositNum) || this.state.depositNum < 0) {
        this.setState({depositNum : 0})
        return;
      }

      this.togglePopup();
     
      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/depositChecking', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      body: JSON.stringify({first_name: this.props.context.first_name, last_name: "Samm", email : "testing@gmail.com", amount: Number(this.state.withdrawNum) , balance: Number(this.props.context.balance)}),
      });
       
      let result =  Number(this.props.context.balance) + Number(this.state.depositNum);
      this.props.context.updateBalance(result);
    }



    handleWithdraw = async e => {
       e.preventDefault();
      
      console.log('withdrawing');
      if(isNaN(this.state.withdrawNum) || this.state.withdrawNum < 0) {
        this.setState({withdrawNum : 0})
        return;
      }
      

      this.togglePopup();

      //const {first_name, last_name, email, amount, balance} = req.body
      //this.setState({request : JSON.stringify({first_name: "Sam", last_name: "Samm", email : "testing@gmail.com", amount: , balance: })});

        
      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/withdrawChecking', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      body: JSON.stringify({first_name: "Sam", last_name: "Samm", email : "testing@gmail.com", amount: Number(this.state.withdrawNum) , balance: Number(this.props.context.balance)}),
      });
        

      let result =  Number(this.props.context.balance) - Number(this.state.withdrawNum);
      this.props.context.updateBalance(result);
    }


    handleTransferToAnotherCustomer = e => {
      e.preventDefault();
      this.togglePopup();

      // backend stuff
    }

    handleTransferToExternalAccount = e => {
      e.preventDefault();
      this.togglePopup();
      // backend stuff
    }

    handleTransferToInternalAccount = e => {
      e.preventDefault();
      this.togglePopup();
        // backend stuff
    }

    togglePopup() {
    this.setState({showPopup: !this.state.showPopup});
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
           <Card.Title>Making a deposit/credit</Card.Title>
          <div className="Deposit" style = {{ maxWidth: '500px', margin: '0 auto'}}>
             <form onSubmit={this.handleDeposit}>
                <FormGroup controlId="depositNum">
                  <FormLabel>Amount to deposit</FormLabel>
                  <FormControl
                    autoFocus
                    placeholder="Enter amount to deposit"
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
                  Submit
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
            <Card.Title>Making a withdrawal/debit</Card.Title>
          <div className="Withdraw" style = {{ maxWidth: '500px', textAlign: 'center', margin: '0 auto'}} >
             <form onSubmit={this.handleWithdraw}>
                <FormGroup controlId="withdrawNum">
                  <FormLabel>Withdraw</FormLabel>
                  <FormControl
                    autoFocus
                    placeholder="Enter amount to withdraw"
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
                  Submit
                </Button>
              </form>
          </div>
        </Card.Body>
       </Card>
      </Popup>

      <Popup
        trigger={<Button block size = "large" type="submit">Transfer money to another customer</Button>}
        position="center right"
        modal
        open= {this.state.showPopup}
        style = {{ maxWidth: '500px'}}
        >
        <Card style = {{height: '18rem', textAlign: 'center'}}>
          <Card.Body>
       <Card.Title>Making a transfer</Card.Title>
     <div className="Transfer" style = {{ maxWidth: '500px', textAlign: 'center', margin: '0 auto'}} >
        <form onSubmit={this.handleTransferToAnotherCustomer}>
           <FormGroup controlId="transferName">
             <FormLabel>Name of Transferee</FormLabel>
             <FormControl
               autoFocus
               placeholder="Enter email of person you want to tranfer to"
               type = "transferName"
               value ={this.state.transferName}
               onChange={this.handleChange}
             />
         </FormGroup>
          <FormGroup controlId="transferNum">
           <FormLabel>Amount to be transfered</FormLabel>
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
             Submit
           </Button>
         </form>
     </div>
   </Card.Body>
  </Card>
 </Popup>

 <Popup
   trigger={<Button block size = "large" type="submit">Transfer money to an external account</Button>}
   position="center right"
   modal
   open= {this.state.showPopup}
   style = {{ maxWidth: '500px'}}
   >
   <Card style = {{height: '18rem', textAlign: 'center'}}>
     <Card.Body>
  <Card.Title>Making a transfer</Card.Title>
<div className="Transfer" style = {{ maxWidth: '500px', textAlign: 'center', margin: '0 auto'}} >
   <form onSubmit={this.handleTransferToExternalAccount}>
      <FormGroup controlId="transferName">
        <FormLabel>Name of Account to Transfer</FormLabel>
        <FormControl
          autoFocus
          placeholder="The Account name you want to transfer to i.e itunes"
          type = "transferName"
          value ={this.state.transferName}
          onChange={this.handleChange}
        />
    </FormGroup>
     <FormGroup controlId="transferNum">
      <FormLabel>Amount to be transfered</FormLabel>
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
        Submit
      </Button>
    </form>
</div>
</Card.Body>
</Card>
</Popup>

<Popup
  trigger={<Button block size = "large" type="submit">Transfer money to an internal account</Button>}
  position="center right"
  modal
  open= {this.state.showPopup}
  style = {{ maxWidth: '500px'}}
  >
  <Card style = {{height: '18rem', textAlign: 'center'}}>
    <Card.Body>
 <Card.Title>Making an internal transfer</Card.Title>
<div className="Transfer" style = {{ maxWidth: '500px', textAlign: 'center', margin: '0 auto'}} >
  <form onSubmit={this.handleTransferToInternalAccount}>
    <FormGroup controlId="transferNum">
     <FormLabel>Amount to be transfered</FormLabel>
     <FormControl
       placeholder="Enter amount to transfer"
       type = "transferNum"
       value ={this.state.transferNum}
       onChange={this.handleChange}
     />
    </FormGroup>
    <label>
      <select className="internalTransfer" name={this.state.internalTransfer} onChange={this.handleChange}>
       <option value="Checking to Savings">Checking to Savings</option>
       <option value="Savings to Checking">Savings to Checking</option>
     </select>
   </label>

     <Button
       block
       size="large"
       type="submit"
       style= {{paddingTop: '10px'}}
     >
       Submit
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
