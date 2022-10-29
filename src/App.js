import './App.css';
import React, { useEffect } from 'react';
import Board from './components/Board';
import { useState } from 'react';
import Result from './components/Result';
import { useCallback } from 'react';

function App() {
  const [showResult, setShowResult] = useState(false);
  const [resultImage, setResultImage] = useState('');
  const [filledSquares, setFilledSquares] = useState([]);
  // const[allSquares,setCopySquare]=useState([]);
  const [allSquares, setAllSquares] = useState([
    {
      id: 1,
      image: 'blank.png'
    },
    {
      id: 2,
      image: 'blank.png'
    },
    {
      id: 3,
      image: 'blank.png'
    },
    {
      id: 4,
      image: 'blank.png'
    },
    {
      id: 5,
      image: 'blank.png'
    },
    {
      id: 6,
      image: 'blank.png'
    },
    {
      id: 7,
      image: 'blank.png'
    },
    {
      id: 8,
      image: 'blank.png'
    },
    {
      id: 9,
      image: 'blank.png'
    }
  ])
  const EmptySquares = useCallback(() => {
    console.log("empty array")
    setAllSquares(allSquares.map(obj => {

      return { ...obj, image: 'blank.png' }
    }))
    setShowResult(false);
    setFilledSquares([]);
  }, [allSquares]);

  useEffect(() => {
    const combinations = [
      [0, 1, 2], [0, 4, 8], [0, 3, 6],
      [1, 4, 7], [3, 4, 5], [6, 7, 8],
      [2, 4, 6], [2, 5, 8]
    ]
    let val = false
    for (let comb of combinations) {
      const [a, b, c] = comb;
      if (allSquares[a].image !== 'blank.png' && allSquares[a].image === allSquares[b].image && allSquares[a].image === allSquares[c].image) {
        if (allSquares[a].image === 'cross.png') {
          setResultImage('winner.gif');
          val = true
          setShowResult(true);
          break;
        }
        else if (allSquares[a].image === 'zero.png') {
          setResultImage('looser.gif');
          val =true
          setShowResult(true);
          break;
        }
      }
     
    }
     if (filledSquares.length > 8 && !val)   {
      console.log({ filledSquares, allSquares })
      alert('Match Tie');
      EmptySquares();
    }
  }, [EmptySquares, allSquares, filledSquares.length])
  const handleUserClick = (id) => {
    if (filledSquares.includes(id)) {
      alert("Do Not Click The filled Square");
    }
    else {
      let computerTurn = Math.floor(Math.random() * 9) + 1;
      if (filledSquares.length < 7) {
        while (filledSquares.includes(computerTurn) || computerTurn === id) {
          computerTurn = Math.floor(Math.random() * 9) + 1;
        }
      }
      if (filledSquares.length > 7) {
        setFilledSquares([...filledSquares, id])
      }
      else {
        setFilledSquares([...filledSquares, computerTurn, id])
      }
      setAllSquares(allSquares.map(obj => {
        if (obj.id === id) {
          return { ...obj, image: 'cross.png' }
        }
        else if (obj.id === computerTurn) {
          return { ...obj, image: 'zero.png' }
        } else {
          return obj
        }
      }
      ))
    }

  }
  return (
    <>
      <Board allSquares={allSquares} handleUserClick={handleUserClick} />
      {(showResult) ?
        <>
          <Result resultImage={resultImage} />
          <button onClick={() => EmptySquares()} className='resultButton'>Play Again</button></>
        : null}
    </>
  );
}

export default App;
