import React, { useState } from 'react';

function App() {
  const [coinResult, setCoinResult] = useState('Heads');
  const [diceResult, setDiceResult] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  const flipCoin = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const outcomes = ['Heads', 'Tails'];
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setCoinResult(randomOutcome);
      setIsFlipping(false);
    }, 600); // Animation delay
  };

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDiceResult(randomNum);
      setIsRolling(false);
    }, 600); // Animation delay
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>🎲 Flip & Roll Simulator 🪙</h1>
      <p style={{ color: '#666' }}>A simple interactive tool built with React.</p>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        {/* Coin Section */}
        <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '12px', width: '40%', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3>Coin Flipper</h3>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: coinResult === 'Heads' ? '#ffcc00' : '#c0c0c0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px auto',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)',
            transform: isFlipping ? 'rotateY(720deg)' : 'none',
            transition: 'transform 0.6s ease-out'
          }}>
            {coinResult}
          </div>
          <button onClick={flipCoin} disabled={isFlipping} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '6px', border: 'none', backgroundColor: '#007bff', color: 'white' }}>
            {isFlipping ? 'Flipping...' : 'Flip Coin'}
          </button>
        </div>

        {/* Dice Section */}
        <div style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '12px', width: '40%', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3>Dice Roller</h3>
          <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#fff',
            border: '2px solid #333',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px auto',
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#333',
            transform: isRolling ? 'rotate(360deg) scale(0.8)' : 'none',
            transition: 'transform 0.6s ease-out'
          }}>
            {diceResult}
          </div>
          <button onClick={rollDice} disabled={isRolling} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '6px', border: 'none', backgroundColor: '#28a745', color: 'white' }}>
            {isRolling ? 'Rolling...' : 'Roll Dice'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;