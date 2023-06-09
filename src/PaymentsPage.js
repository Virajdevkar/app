import React, { useState } from 'react';
import './PaymentsPage.css';

const PaymentsPage = () => {
  const items = [
    { id: 1, name: 'Item 1', price: '$10' },
    { id: 2, name: 'Item 2', price: '$20' },
    { id: 3, name: 'Item 3', price: '$30' },
    // Add more items as needed
  ];

  const [paymentOption, setPaymentOption] = useState('');
  const [showUPIOptions, setShowUPIOptions] = useState(false);
  const [upiId, setUpiId] = useState('');

  const handlePaymentOptionChange = (e) => {
    const selectedOption = e.target.value;
    setPaymentOption(selectedOption);
    setShowUPIOptions(selectedOption === 'upi');
  };

  const handleUPIIdChange = (e) => {
    const enteredUPIId = e.target.value;
    setUpiId(enteredUPIId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment based on the selected payment option
    // and the entered UPI ID (if applicable)
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name} - {item.price}</li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <h2>Payment Method</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input type="text" id="expiryDate" required />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" required />
          </div>
          <div className="form-group">
            <label htmlFor="paymentOption">Payment Option:</label>
            <select id="paymentOption" value={paymentOption} onChange={handlePaymentOptionChange} required>
              <option value="">Select</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          {showUPIOptions && (
            <div className="upi-options">
              <h3>UPI Options</h3>
              <div className="form-group">
                <label htmlFor="upiIdOption">Select UPI Option:</label>
                <select id="upiIdOption" required>
                  <option value="">Select</option>
                  <option value="gpay">Google Pay</option>
                  <option value="paytm">Paytm</option>
                  <option value="phonepay">PhonePe</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="upiId">Enter UPI ID:</label>
                <input type="text" id="upiId" value={upiId} onChange={handleUPIIdChange} required />
              </div>
            </div>
          )}
          <button type="submit">Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentsPage;
