import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      currencyAmount: '',
      currencyType: '',
    };
  }

  // Counter handlers
  incrementCounterValue = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleSayHelloAndStaticMessage = () => {
    alert('Hello! This is a static message from Increment.');
  };

  handleIncrement = () => {
    this.incrementCounterValue();
    this.handleSayHelloAndStaticMessage();
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  // Greeting with argument
  sayWelcome = (message) => {
    alert(`Hello! ${message}`);
  };

  // Synthetic Event
  handleClickOnMe = () => {
    alert('I was clicked');
  };

  // Currency conversion input handlers
  handleCurrencyAmountChange = (event) => {
    this.setState({ currencyAmount: event.target.value });
  };

  handleCurrencyTypeChange = (event) => {
    this.setState({ currencyType: event.target.value });
  };

  // Currency conversion submit
  handleSubmitConversion = (event) => {
    event.preventDefault();
    const { currencyAmount, currencyType } = this.state;
    const rupeeToEuro = 0.011;
    const euroToRupee = 90;
    const amount = parseFloat(currencyAmount);

    if (isNaN(amount) || amount < 0) {
      alert('Please enter a valid positive amount.');
      return;
    }

    let resultMessage = '';
    const type = currencyType.trim().toLowerCase();

    if (type === 'rupees' || type === 'inr') {
      const converted = amount * rupeeToEuro;
      resultMessage = `Converting ₹${amount} to Euro is €${converted.toFixed(2)}`;
    } else if (type === 'euro' || type === 'eur') {
      const converted = amount * euroToRupee;
      resultMessage = `Converting €${amount} to Rupees is ₹${converted.toFixed(2)}`;
    } else {
      resultMessage = 'Please enter a valid currency type (Rupees/INR or Euro/EUR).';
    }

    alert(resultMessage);
  };

  render() {
    const { counter, currencyAmount, currencyType } = this.state;

    return (
      <div className="App" style={{ padding: '30px', fontFamily: 'Arial' }}>
        <h2>Counter: {counter}</h2>

        <div style={{ marginBottom: '30px' }}>
          <button onClick={this.handleIncrement} style={buttonStyle}>Increment</button>
          <button onClick={this.handleDecrement} style={buttonStyle}>Decrement</button>
          <button onClick={() => this.sayWelcome('Member1')} style={buttonStyle}>Say Welcome</button>
          <button onClick={this.handleClickOnMe} style={buttonStyle}>Click on Me</button>
        </div>

        <hr style={{ margin: '40px 0' }} />

        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          <h2 style={{ color: 'green' }}>Currency Converter</h2>

          <form onSubmit={this.handleSubmitConversion}>
            <label style={labelStyle}>Amount:</label>
            <input
              type="number"
              placeholder="Enter amount"
              value={currencyAmount}
              onChange={this.handleCurrencyAmountChange}
              style={inputStyle}
            />

            <label style={labelStyle}>Currency Type:</label>
            <input
              type="text"
              placeholder="e.g., Rupees / Euro"
              value={currencyType}
              onChange={this.handleCurrencyTypeChange}
              style={inputStyle}
            />

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button type="submit" style={buttonStyle}>Convert</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  padding: '10px 20px',
  margin: '8px',
  fontSize: '16px',
  cursor: 'pointer',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
};

export default App;
