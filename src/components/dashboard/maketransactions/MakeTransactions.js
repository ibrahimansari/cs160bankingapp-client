import React, {Component} from 'react';
import { Button, Card, FormGroup, FormControl, FormLabel, Modal} from "react-bootstrap";
import Popup from "reactjs-popup";

class MakeTransactions  extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        value:"Checking to Savings",
        depositNum: 0,
        withdrawNum : 0,
        transferName : "",
        transferNum : 0,
        showPopup : false,
        showDepositPopUp: false,
        showWithdrawPopUp: false,
        showTransferToAnotherCustomer: false,
        showTransferToExternalAccount: false,
        showTransferToInternalAccount: false,
        internalTransfer : "Checking to Savings",
        label: ''
      };
    }

   handleDeposit = async e => {
       e.preventDefault();
       console.log('depositing');
      if(isNaN(this.state.depositNum) || this.state.depositNum < 0) {
        this.setState({depositNum : 0})
        return;
      }

      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/depositChecking', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      body: JSON.stringify({first_name: "Sam", last_name: "Samm", email : "testing@gmail.com", amount: Number(this.state.depositNum) , balance: Number(this.props.context.balance)}),
      });

      let result =  Number(this.props.context.balance) + Number(this.state.depositNum);
      this.props.context.updateBalance(result);
      this.props.context.updateCheckingBalance(result);
      this.toggleDepositPopup();
    }



    handleWithdraw = async e => {
       e.preventDefault();

      console.log('withdrawing');
      let result =  Number(this.props.context.balance) - Number(this.state.withdrawNum);

      if(isNaN(this.state.withdrawNum) || this.state.withdrawNum < 0 || result < 0) {
        this.setState({withdrawNum : 0})
        return;
      }

      this.toggleWithdrawalPopup();

      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/withdrawChecking', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      body: JSON.stringify({first_name: "Sam", last_name: "Samm", email : "testing@gmail.com", amount: Number(this.state.withdrawNum) , balance: Number(this.props.context.balance)}),
      });



      this.props.context.updateBalance(result);
      this.props.context.updateCheckingBalance(result);
       console.log('finished withdrawing');
    }


    handleTransferToAnotherCustomer = async e => {
      e.preventDefault();

      this.toggleCustomerTransferPopup();
        
      console.log('transferring to another customer');


      // variables to use
      // this.state.transferName //email of person to Transferee
      // this.state.transferNum //amount to be transfered
      //
      // backend stuff
        
//       var to_first_name = "";
//       var to_last_name = "";
//       var to_balance = 0;


//       const r = await fetch('https://cs160bankingapp-api.herokuapp.com/api/getToBalance', { //get balance from toUser
//       method: 'POST',
//       mode: "cors",
//       headers: {'Content-type': 'application/json',},
//       body: JSON.stringify({emailTo: this.state.transferName}),});  

//       const body = await r.json();
//       var array = body["array"];
//       to_balance = array[0].balance;
//       to_first_name = array[0].first_name;
//       to_last_name = array[0].last_name;

      //const {emailFrom, emailTo, amount, balance} = req.body
      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/transferToInternal', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      //body: JSON.stringify({first_name: this.props.context.first_name, last_name: this.props.context.last_name,emailFrom : this.props.context.email, emailTo: this.state.transferName, amount: Number(this.state.transferNum), balance: Number(this.props.context.balance), toBalance: Number(to_balance), toFirstName:to_first_name, toLastName:to_last_name }),
      body: JSON.stringify({first_name: this.props.context.first_name, last_name: this.props.context.last_name,emailFrom : this.props.context.email, emailTo: this.state.transferName, amount: Number(this.state.transferNum), balance: Number(this.props.context.balance)),

      });  

      console.log('Transferred to another account');

      let result =  Number(this.props.context.balance) - Number(this.state.transferNum);
      this.props.context.updateBalance(result);

    }

    handleTransferToExternalAccount = async e => {
      e.preventDefault();
      this.toggleExternalTransferPopup();

      // variables to use
      // this.state.transferName //the name of external account
      // this.state.transferNum //amount to be transfered
      // subtract the amount from the user and send into the void

      // backend stuff
        
      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/transferToExternal', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      body: JSON.stringify({first_name: this.props.context.first_name, last_name: this.props.context.last_name,emailFrom : this.props.context.email, amount: Number(this.state.transferNum), balance: Number(this.props.context.balance)}),
      });  

      let result =  Number(this.props.context.balance) - Number(this.state.transferNum);
      this.props.context.updateBalance(result);
    }

    handleTransferToInternalAccount = async e => {
      e.preventDefault();

     // variables to use
     // this.state.transferNum //amount to be transfered
     // this.state.label //either Checking to Savings or Savings to depositChecking

     // if (this.state.label === "Checking to Savings") {
         // backend sutff
     // }
     // else {
     //     // backend stuff
     // }
     //
        
        var from = '';
        var to = '';
        var fromBalance = 0;
        var toBalance = 0;
        
        if(this.state.value === "Checking to Savings"){
            from = 'checking';
            to = 'savings';
            fromBalance = this.props.context.checkingBalance;
            toBalance = this.props.context.savingsBalance;
        }else{
            to = 'checking';
            from = 'savings';  
            toBalance = this.props.context.checkingBalance;
            fromBalance = this.props.context.savingsBalance;
        }
        
        console.log("From " + from);
        console.log("To" + to);
        console.log(this.state.value);
        console.log(this.state.value.toString());
        
        
        
     //{email, accountFrom, accountTo, amount} 
      const response = await fetch('https://cs160bankingapp-api.herokuapp.com/api/transferSelf', {
      method: 'POST',
      mode: "cors",
      headers: {'Content-type': 'application/json',},
      body: JSON.stringify({email : this.props.context.email, accountFrom:from , accountTo:to,amount: Number(this.state.transferNum), toBalance:toBalance, fromBalance:fromBalance}),
      });  

        if(this.state.value === "Checking to Savings"){
            let result = Number(this.props.context.balance) - Number(this.state.transferNum);
            this.props.context.checkingBalance = this.props.context.checkingBalance - this.state.transferNum;
            this.props.context.savingsBalance = this.props.context.savingsBalance + this.state.transferNum;
                    this.props.context.updateBalance(result);


        }else{
           let result = Number(this.props.context.balance) + Number(this.state.transferNum);
            this.props.context.checkingBalance = this.props.context.checkingBalance + this.state.transferNum;
            this.props.context.savingsBalance = this.props.context.savingsBalance - this.state.transferNum;
                    this.props.context.updateBalance(result);

        }
        
        console.log("transferring internally");
        
        this.toggleInternalTransferPopup();
    }

  toggleDepositPopup() {
      this.setState({showDepositPopUp: !this.state.showDepositPopUp});
    }

  toggleWithdrawalPopup() {
    this.setState({showWithdrawPopUp: !this.state.showWithdrawPopUp});
  }

  toggleCustomerTransferPopup() {
  this.setState({showTransferToAnotherCustomer: !this.state.showTransferToAnotherCustomer});
  }

  toggleExternalTransferPopup() {
  this.setState({showTransferToExternalAccount: !this.state.showTransferToExternalAccount});
  }

  toggleInternalTransferPopup() {
  this.setState({showTransferToInternalAccount: !this.state.showTransferToInternalAccount});
  }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value,
      });
    }

    handleInternalChange = event => {

         
        this.setState({value: event.target.value});

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
            open= {this.state.showDepositPopUp}
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
             open= {this.state.showWithdrawPopUp}
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
        trigger={<Button block size = "large" type="submit">Transfer money to another fellow customer</Button>}
        position="center right"
        modal
        open= {this.state.showTransferToAnotherCustomer}
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
               placeholder="Enter email of person you want to transfer to"
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
   open= {this.state.showTransferToExternalAccount}
   style = {{ maxWidth: '500px'}}
   >
   <Card style = {{height: '18rem', textAlign: 'center'}}>
     <Card.Body>
  <Card.Title>Making an external account transfer</Card.Title>
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
  open= {this.state.showTransferToInternalAccount}
  style = {{ maxWidth: '500px'}}
  >
  <Card style = {{height: '18rem', textAlign: 'center'}}>
    <Card.Body>
 <Card.Title>Making an internal account transfer</Card.Title>
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

      <select className="internalTransfer"  value={this.state.value}  name={this.state.internalTransfer} onChange={this.handleInternalChange}>
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
