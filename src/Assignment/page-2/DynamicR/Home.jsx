import React, { useState } from 'react';

const Home = () => {
  const [fetchData1, setFetchData1] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const fetchData = () => {
    if (!isDataFetched) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setFetchData1(data);
          setIsDataFetched(true);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  };

  return (
    <div className='mt-2'>
        <h1 className='text-center'>Users Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <div className="Tcard mt-5">
        {fetchData1.map(item => (
          <div key={item.id} className='card'>
             {item.name}   
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
