import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './store/ObjectList';

// const graph = {
const nodes = {
        a:{name: 'A',},
        b:{name: 'B',},
        c:{name: 'C',},
        d:{name: 'D',},
        e:{name: 'E',},
    }
const ways = {
        ab:{name: 'AB', from: nodes.a, to: nodes.b, distance: 3, time: 2,},
        ac:{name: 'AC', from: nodes.a, to: nodes.c, distance: 4, time: 2,},
        ad:{name: 'AD', from: nodes.a, to: nodes.d, distance: 13, time: 15,},
        bd:{name: 'BD', from: nodes.b, to: nodes.d, distance: 12, time: 8,},
        cd:{name: 'CD', from: nodes.c, to: nodes.d, distance: 15, time: 21,},
        de:{name: 'DE', from: nodes.d, to: nodes.e, distance: 5, time: 3,},
    }
// }

function NodeSquare(props) {
  return(
      <button className="node-square" >
        {props.text}
      </button>
  );
}
function WaySquareRight(props) {
  return(
      <button className="way-square">
        <i className="material-icons">arrow_forward</i>
      </button>

  );
}
function WaySquareDown(props) {
  return(
      <button className="way-square">
        <i className="material-icons">arrow_downward</i>
      </button>

  );
}
function WaySquareUp(props) {
  return(
      <button className="way-square">
        <i className="material-icons">arrow_upward</i>
      </button>

  );
}



class Board extends React.Component {

    renderWaySquareRight(i) {
        return (
            <WaySquareRight/>
        );
    }
    renderWaySquareDown(i){
        return (
            <WaySquareDown/>
        );
    }
    renderWaySquareUp(i){
      return (
          <WaySquareUp/>
      );
    }
    renderNodeSquare(i){
        return (
            <NodeSquare text={i}/>
        );
    }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderWaySquareRight(ways.ab.name)}
          {this.renderNodeSquare(nodes.b.name)}
          {this.renderWaySquareDown(ways.bd.name)}
        </div>
        <div className="board-row">
          {this.renderNodeSquare(nodes.a.name)}
          {this.renderWaySquareRight(ways.ad.name)}
          {this.renderNodeSquare(nodes.d.name)}
          {this.renderWaySquareRight(ways.de.name)}
          {this.renderNodeSquare(nodes.e.name)}
        </div>
        <div className="board-row">

          {this.renderWaySquareRight(ways.ac.name)}
          {this.renderNodeSquare(nodes.c.name)}
          {this.renderWaySquareUp(ways.cd.name)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        squares: Array(11).fill(null),
    };
  }

  handleeClick(i){
    this.setState({

    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            // squares={current.squares}
            onClick={(i) => this.handleeClick(i)}
          />

        </div>
      </div>
    );
  }
}

ReactDOM.render(

    <Game  />,
    document.getElementById('root')
);
