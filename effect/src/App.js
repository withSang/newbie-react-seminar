import React, { useState, useEffect } from 'react';
import './App.css';
import Feed from './Feed';

// call `await api()` to get data
import api from './api';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    api()
      .then((value) => {
        setFeeds(value);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Feed</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        feeds.map(({ title, content, id }) => <Feed key={id} title={title} content={content} />)
      )}
    </div>
  );
};

export default App;
