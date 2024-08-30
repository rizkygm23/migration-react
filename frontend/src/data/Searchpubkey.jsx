import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
const supabase = createClient("https://mnjnwyuqdxmxrafaaljl.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uam53eXVxZHhteHJhZmFhbGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTI2MzAsImV4cCI6MjAzOTc4ODYzMH0.DO5dtieKKPZxhc6TQ-aGZdIzWBr48vR_ONUTAnHPJ-g");
const Searchpubkey = () => {
  const [pubkey, setPubkey] = useState('');
  const [balance, setBalance] = useState('');
  const [latestBalance, setLatestBalance] = useState('');
  const [message, setMessage] = useState('');
  // useEffect(() => {
  //   
  // }, []);
  async function getBalance() {
    
    const  { data } = await supabase.from('data_validator').select('pubkey'==pubkey);
    console.log(data[0].balance);
    setBalance(data[0].balance).text();
    setLatestBalance(data[0].latest_balance);
    
  }

  const handleSearch = async () => {
    getBalance();
    
    console.log('Button clicked');
    

    

  };

  return (
    <div className='absolute grid grid-cols-1 mt-40'>
      <h1>Search Validator</h1>
      <input 
        type="text" 
        value={pubkey} 
        onChange={(e) => setPubkey(e.target.value)} 
        placeholder="Enter Pubkey" 
      />
      <button onClick={handleSearch}>Search</button>
      { data[0].map((bal) => <h1 key={bal.pubkey}>{bal.balance}</h1>)}
      {balance && <div>Balance: {balance}</div>}
      {latestBalance && <div>Latest Balance: {latestBalance}</div>}
      {message && <div>{message}</div>}
    </div>
  );
};

export default Searchpubkey;
