import React, { useState } from 'react';


const Searchpubkey = () => {
  const [pubkey, setPubkey] = useState('');
  const [balance, setBalance] = useState('');
  const [message, setMessage] = useState('');
  const [latestbalance, setLatestbalance] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pubkey: pubkey }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      setBalance(result.balance);
      setMessage(result.balanceChanged ? 'Balance has changed!' : 'Balance is the same.');
      setLatestbalance(result.latestbalance);

    } catch (error) {
      console.log('Error occurred:', error);
      setMessage('Error BANG data');
    }
  };
  return (
    <div>
      <input 
        type="text" 
        value={pubkey} 
        onChange={(e) => setPubkey(e.target.value)} 
        placeholder="Enter Pubkey" 
      />
      <button onClick={handleSearch}>Search</button>
      {balance && <div>Balance: {balance}</div>}
      {message && <div>{message}</div>}
      {latestbalance && <div> Latest balance :{latestbalance}</div>}
    </div>
  );
};

export default Searchpubkey;
