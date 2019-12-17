import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function NodeSquareA(props) {
  return(
      <button className="node-square" onClick={props.onClick}>
        {props.value}
        A
      </button>
  );
}
function NodeSquareB(props) {
  return(
      <button className="node-square" onClick={props.onClick}>
        {props.value}
        B
      </button>
  );
}
function NodeSquareC(props) {
  return(
      <button className="node-square" onClick={props.onClick}>
        {props.value}
        C
      </button>
  );
}
function NodeSquareD(props) {
  return(
      <button className="node-square" onClick={props.onClick}>
        {props.value}
        D
      </button>
  );
}
function NodeSquareE(props) {
  return(
      <button className="node-square" onClick={props.onClick}>
        {props.value}
        E
      </button>
  );
}
function WaySquareRight(props) {
  return(
      <button className="way-square" onClick={props.onClick}>
        {props.value}
        <i className="material-icons">arrow_forward</i>
      </button>

  );
}
function WaySquareDown(props) {
  return(
      <button className="way-square" onClick={props.onClick}>
        {props.value}
        <i className="material-icons">arrow_downward</i>
      </button>

  );
}
function WaySquareUp(props) {
  return(
      <button className="way-square" onClick={props.onClick}>
        {props.value}
        <i className="material-icons">arrow_upward</i>
      </button>

  );
}



class Board extends React.Component {

  renderSquare(i) {
    if(i == 0 || i == 6 || i == 8 || i == 10) {
      return (
          <WaySquareRight
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
          />
      );
    }
    if (i == 2){
        return (
            <WaySquareDown
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
    if (i == 12){
      return (
          <WaySquareUp
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
          />
      );
    }switch (i) {
      case 1:
        return (
            <NodeSquareB
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
      case 5:
        return (
            <NodeSquareA
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
      case 7:
        return (
            <NodeSquareD
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
      case 9:
        return (
            <NodeSquareE
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
      case 11:
        return (
            <NodeSquareC
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }
  }
  render() {    
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-row">
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
        </div>
        <div className="board-row">

          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      history: [{
        squares: Array(11).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleeClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
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

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}> {desc} </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;      
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleeClick(i)}
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
      return squares[a];
    }
  }
  return null;
}

function calculatorBestTime(squares){
  const lines = [
      []
  ]
}