"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from '../../styles/Layout.module.css';

const MathGame = () => {
  const [numbers, setNumbers] = useState([]);
  const [operation, setOperation] = useState('add');
  const [answer, setAnswer] = useState('');
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchNumbers = () => {
    fetch('http://localhost:5005/api/random-numbers')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data);
        setNumbers(data);
      })
      .catch((error) => console.error('Error fetching numbers:', error));
  };

  useEffect(() => {
    fetchNumbers();
  }, []);

  const calculateAnswer = () => {
    switch (operation) {
      case 'add':
        return numbers.reduce((a, b) => a + b, 0);
      case 'subtract':
        return numbers.reduce((a, b) => a - b);
      case 'multiply':
        return numbers.reduce((a, b) => a * b, 1);
      default:
        return 0;
    }
  };

  const handleSubmit = () => {
    const correctAnswer = calculateAnswer();
    if (parseInt(answer, 10) === correctAnswer) {
      setCounter(counter + 1);
      setError('');
    } else {
      setCounter(0);
      setError('Wrong answer, counter reset to 0');
    }
    setAnswer('');
    fetchNumbers();
  };

  return (
    <div className={styles.container}>
      <h1>Math Game</h1>
      <p>Add, Substract, or Multiply The Numbers Correctly In Order To Gain Points</p>
      <div>
        <h2>Numbers: {numbers.join(', ')}</h2>
        <select onChange={(e) => setOperation(e.target.value)} value={operation}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your Answer"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>Score: {counter}</h3>
      <button onClick={() => router.push('/')}>Exit Game</button>
    </div>
  );
};

export default MathGame;