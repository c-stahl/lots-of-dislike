import React, { useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  // Save search bar input
  const onInputChange = (e) => {
    setSearch(e.target.value);
  }

  // Run the search query
  const getData = async (searchString) => {
    const searchUrl = encodeURI(searchString)

    const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${searchUrl}&categories=parking`,
      {
        method: 'get', 
        headers: {
          'Authorization': 'Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx'
        }
      }
    );
    const dataReturned = await response.json();
    if(dataReturned.length > 0){
      setData(dataReturned);
      console.log(data);
    }
  };

  const doSearch = () => {
    getData(search);
  };

  // Main component
  return (
    <div className="App">
      <header>
        <h1>Lots of Dislike</h1>
      </header>
      <main>
        <div className="search-bar">
          <input value={search} onChange={onInputChange} type="search"></input>
          <button onClick={doSearch}>Search</button>
        </div>


      </main>
    </div>
  );
}

export default App;
