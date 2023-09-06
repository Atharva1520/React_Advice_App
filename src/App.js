import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [advice, setadvice] = useState('');
  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setadvice(advice);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='app'>
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className='button' onClick={fetchAdvice}>
          <span>
            Give Me Advice!
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
