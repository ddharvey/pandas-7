
import React, {useState} from 'react';

const currencies = [
  { name: "US Dollars", abbreviation: "USD" },
  { name: "Euro", abbreviation: "EUR" },
  { name: "Japanese Yen", abbreviation: "JPY" },
  { name: "British Pound Sterling", abbreviation: "GBP" },
  { name: "Australian Dollar", abbreviation: "AUD" },
  { name: "Canadian Dollar", abbreviation: "CAD" },
  { name: "Swiss Franc", abbreviation: "CHF" },
  { name: "Chinese Yuan Renminbi", abbreviation: "CNY" },
  { name: "Hong Kong Dollar", abbreviation: "HKD" },
  { name: "New Zealand Dollar", abbreviation: "NZD" }
];

const App = () => {
  const [fromCurrency, setFromCurrency] = useState(currencies[0].abbreviation);
  const [toCurrency, setToCurrency] = useState(currencies[1].abbreviation);
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = () => {
    const fromCurrencyRate = 1; // Replace this with actual API call to get real-time currency conversion rates
    const toCurrencyRate = 1; // Replace this with actual API call to get real-time currency conversion rates
    const calculatedAmount = (amount / fromCurrencyRate) * toCurrencyRate;
    setConvertedAmount(calculatedAmount);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="from-currency">From Currency:</label>
        <select
          id="from-currency"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.abbreviation} value={currency.abbreviation}>
              {currency.name} ({currency.abbreviation})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="to-currency">To Currency:</label>
        <select
          id="to-currency"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency.abbreviation} value={currency.abbreviation}>
              {currency.name} ({currency.abbreviation})
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <div>
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </div>
    </div>
  );
};

export default App;
