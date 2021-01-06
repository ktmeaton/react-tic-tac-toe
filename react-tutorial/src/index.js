import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {

  const prevMoveStyle = {
    backgroundColor: '#DCDCDC',
  };
  const winningLineStyle = {
    backgroundColor: '#00FF00'      
  }
  // If the winning move has been found
  if (props.winningLine) {
    return(
      <button className="square" 
        onClick={props.onClick} 
        style={props.winningLine.includes(props.i) ? winningLineStyle : null } 
      >
        {props.value}
      </button>
    );
  } else {
    return (
      <button className="square" onClick={props.onClick} style={props.prevMove ? prevMoveStyle : null} >
        {props.value}
      </button>
    );
  }
}

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        prevMove={(i === this.props.prevMove) ? true : false}
        winningLine={this.props.winningLine}
        i={i}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          history: [
            {
              squares: Array(9).fill(null),
           }
          ],
          stepNumber: 0,
          xIsNext: true,
          prevMove: null,
          winningLine: null,
      };
  }

  handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i] || this.state.stepNumber >= 9) {
          return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
          history: history.concat([{
              squares: squares,
          }]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext,
          prevMove: i,
      });
  }

  jumpTo(step) {
      this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
      });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    var winningLine = null;

    const moves = history.map((step, move) => {
        const desc = move ? 
            'Go to move #' + move : 
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    // If a winner has been found
    if (winner) {
        status = 'Winner: ' + winner[0];
        winningLine = winner[1];
    } 
    // If it's a draw
    else if (this.state.stepNumber >= 9){
        status = 'Draw!';
    }
    // Otherwise, play on!
    else {
        status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            stepNumber={this.state.stepNumber}
            prevMove={this.state.prevMove}
            winningLine={winningLine}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

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
      return [squares[a], lines[i]];
    }
  }
  return null;
}
