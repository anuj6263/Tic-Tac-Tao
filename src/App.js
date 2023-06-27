import { useState } from 'react';
import './App.css';

function Square({value , onSquareClick}){
  return(
    <button className='board-row' onClick={onSquareClick}> {value} </button>
  )
}

export default function Board(){

  const [isNext, setisNext] = useState(true)
  const [arr, setarr] = useState(Array(9).fill(null))

  function handleClick(i){
    if(arr[i] || calculateWinner(arr)){
      return;
    }
    const newarr = arr.slice()
    if(isNext){
      newarr[i] = 'X'
    }
    else{
      newarr[i] = 'O'
    }
    setarr(newarr)
    setisNext(!isNext)
  }

  const winner = calculateWinner(arr)
  let status
  if(winner){
    status = 'Winner is :' + winner
  }

  else(
    status = 'Next player : ' + (isNext? 'X':'O')
  )

  return(
    <>
    <div>{status}</div>
    <div className='board'>
      <Square value={arr[0]} onSquareClick={()=>handleClick(0)}></Square>
      <Square value={arr[1]} onSquareClick={()=>handleClick(1)}></Square>
      <Square value={arr[2]} onSquareClick={()=>handleClick(2)}></Square>
      <Square value={arr[3]} onSquareClick={()=>handleClick(3)}></Square>
      <Square value={arr[4]} onSquareClick={()=>handleClick(4)}></Square>
      <Square value={arr[5]} onSquareClick={()=>handleClick(5)}></Square>
      <Square value={arr[6]} onSquareClick={()=>handleClick(6)}></Square>
      <Square value={arr[7]} onSquareClick={()=>handleClick(7)}></Square>
      <Square value={arr[8]} onSquareClick={()=>handleClick(8)}></Square>

    </div>
    </>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}