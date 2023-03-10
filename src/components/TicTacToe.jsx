import React, {useState} from "react";
import Square from "./Square";
import "./TicTacToe.css";

const TicTacToeBoard = () => {
    const [state, setState] = useState(Array(9).fill(null))
    const [isOTurn, setIsOTurn] = useState(true);

    const checkWinner = () =>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        winnerLogic.forEach((logic)=>{
            const [a, b, c] = logic;
            if(state[a] === state[b] && state[b] === state[c] && state[a] !== null && state[b] !== null){
                alert(`${state[a]} is the winner`)
                setState(Array(9).fill(null))
            }
        })
    }

    const clickHandler = ( index) =>{
        const stateArray = [...state];
        stateArray[index] = isOTurn ? "0" : "X";
        setState(stateArray)
        checkWinner();
        setIsOTurn(!isOTurn)
    }
  return (
    <div className="board-container">
      <div className="board">
        <Square onClick={()=>clickHandler(0)} value={state[0]}/>
        <Square onClick={()=>clickHandler(1)} value={state[1]}/>
        <Square onClick={()=>clickHandler(2)} value={state[2]}/>
      </div>
      <div className="board">
        <Square onClick={()=>clickHandler(3)} value={state[3]}/>
        <Square onClick={()=>clickHandler(4)} value={state[4]}/>
        <Square onClick={()=>clickHandler(5)} value={state[5]}/>
      </div>
      <div className="board">
        <Square onClick={()=>clickHandler(6)} value={state[6]}/>
        <Square onClick={()=>clickHandler(7)} value={state[7]}/>
        <Square onClick={()=>clickHandler(8)} value={state[8]}/>
      </div>
    </div>
  );
};

export default TicTacToeBoard;
