import React, { useState } from 'react';

const currencies = ['USD', 'EUR', 'INR', 'JPY', 'GBP'];

const App = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);

  const handleConvert = () => {
    // Placeholder conversion logic (you can replace this with real API later)
    const rate = 80; // Just a dummy rate
    const result = parseFloat(amount) * rate;
    setConverted(result.toFixed(2));
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[90vw] max-w-[500px]">
        <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>

          <div className="w-1/2">
            <label className="block mb-1 font-medium">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 outline-none"
            >
              {currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Convert
        </button>

        {converted && (
          <div className="mt-4 text-center text-lg font-semibold text-green-700">
            Converted: {converted} {toCurrency}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
