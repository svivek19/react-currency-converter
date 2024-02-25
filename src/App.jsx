import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        const res = await axios.get(url);

        setExchangeRate(res.data.rates[toCurrency]);

      } catch (err) {
        console.log(err);
      }
    };
    getExchangeRate()
  }, [fromCurrency, toCurrency]);

  useEffect(()=>{
    if(exchangeRate !== null){
      setConvertedAmount((amount*exchangeRate).toFixed(2))
    }
  },[amount,exchangeRate])

  const handleAmountChange = (e) => {
    let newValue = e.target.value;

    newValue = newValue.replace(/^0+/, '');

    const value = parseFloat(newValue);

    setAmount(isNaN(value) ? '' : value);
}


  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value)
  }

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-transparent backdrop-blur-2xl p-8 rounded-lg sm:w-1/2 md:w-1/3">
        <div className='flex justify-center'>
          <img src="https://ofpfunding-1fcf3.kxcdn.com/wp-content/uploads/2023/12/Currency-Converter-2.png" alt="image" className='w-1/2' />
        </div>
        <h1 className="text-3xl md:text-4xl text-violet-100 text-center border-dashed border-t-2 border-b-2 border-purple-400 font-bold mb-4">Currency Converter</h1>
        <div className="mb-4">
          <label htmlFor="amount" className='font-semibold text-violet-100'>Amount: </label>
          <input type="number" id="amount" className="block w-full font-semibold p-2 border border-gray-300 rounded-md focus:ring-violet-700 outline-none bg-violet-300 focus:border-violet-700" min={0} value={amount} onChange={handleAmountChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="fromCurrency" className='font-semibold text-violet-100'>From Currency: </label>
          <select id="fromCurrency" className="block w-full bg-violet-300 border-gray-300 rounded-md focus:ring-indigo-500 outline-none focus:border-indigo-500 font-medium p-2 border" value={fromCurrency} onChange={handleFromCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="toCurrency" className='font-semibold text-violet-100'>To Currency: </label>
          <select id="toCurrency" className="block w-full bg-violet-300 border-gray-300 rounded-md focus:ring-indigo-500 outline-none focus:border-indigo-500 font-medium p-2 border" value={toCurrency} onChange={handleToCurrencyChange}>
            <option value="USD">USD - United States Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound Sterling</option>
            <option value="JPY">JPY - Japanese Yen</option>
            <option value="AUD">AUD - Australian Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CNY">CNY - Chinese Yuan</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="BRL">BRL - Brazilian Real</option>
            <option value="ZAR">ZAR - South African Rand</option>
          </select>
        </div>
        <div className='border text-center rounded-lg mt-8 border-violet-300 font-bold text-violet-300 border-dashed p-2'>
          <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
