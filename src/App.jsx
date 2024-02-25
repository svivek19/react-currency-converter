import React from 'react';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg sm:w-1/2 md:w-1/3">
        <div className='flex justify-center'>
          <img src="https://ofpfunding-1fcf3.kxcdn.com/wp-content/uploads/2023/12/Currency-Converter-2.png" alt="image" className='w-1/2'/>
        </div>
        <h1 className="text-3xl md:text-4xl text-violet-950 text-center border-dashed border-t-2 border-b-2 border-purple-400 font-bold mb-4">Currency Converter</h1>
        <div className="mb-4">
          <label htmlFor="amount" className='font-semibold'>Amount: </label>
          <input type="number" id="amount" className="block w-full font-semibold p-2 border border-gray-300 rounded-md focus:ring-violet-700 outline-none focus:border-violet-700" />
        </div>
        <div className="mb-4">
          <label htmlFor="fromCurrency" className='font-semibold'>From Currency: </label>
          <select id="fromCurrency" className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 outline-none focus:border-indigo-500 font-medium p-2 border">
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
          <label htmlFor="toCurrency" className='font-semibold'>To Currency: </label>
          <select id="toCurrency" className="block w-full border-gray-300 rounded-md focus:ring-indigo-500 outline-none focus:border-indigo-500 font-medium p-2 border">
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
        <div className='border text-center rounded-lg mt-8 border-violet-500 font-bold text-violet-500 border-dashed p-2'>
          <p>1 INR is equal to 83.25 USD</p>
        </div>
      </div>
    </div>
  );
};

export default App;
