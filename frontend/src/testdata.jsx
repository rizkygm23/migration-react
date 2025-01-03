import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: items, error } = await supabase
        .from('validator')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(items);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        {data.map((item) => (
          <li key={item.pubkey}>{item.pubkey}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
