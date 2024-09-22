// src/components/SIPCalculator.js
import React, { useState } from 'react';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [annualInterest, setAnnualInterest] = useState('');
  const [years, setYears] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateSIP = () => {
    const monthlyRate = annualInterest / 12 / 100;
    const months = years * 12;
    const futureValue = 
      monthlyInvestment * 
      (((1 + monthlyRate) ** months - 1) / monthlyRate) * 
      (1 + monthlyRate);

    setTotalAmount(futureValue.toFixed(2));
  };

  return (
    <div className="sip-calculator">
      <h1>SIP Calculator</h1>
      <div className="calculator-inputs">
        <div className="input-group">
          <label>Monthly Investment (₹):</label>
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            value={annualInterest}
            onChange={(e) => setAnnualInterest(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Investment Duration (Years):</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </div>
        <button onClick={calculateSIP}>Calculate</button>
      </div>
      {totalAmount && (
        <div className="result">
          <h2>Total Value: ₹{totalAmount}</h2>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
