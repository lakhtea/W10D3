import React from "react";
import Board from "./board";
import {
  Board as MinesweeperBoard,
  Tile as MinesweeperTile,
} from "../minesweeper";
import Modal from "./modal"

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new MinesweeperBoard(9, 1),
    };
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tile, boolean) {
    if (boolean) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  restartGame() {
    this.setState({
      board: new MinesweeperBoard(9, 1),
    })
  }

  render() {
    if (this.state.board.won()) {
      return (<div>
        <Modal status={true} restart={this.restartGame}/>
      </div>)
    } else if (this.state.board.lost()) {
      return (<div>
              <Modal status={false} restart={this.restartGame}/>
            </div>)
    } else {
        return (
          <div>
            <p id="solbass">This is better than "Salmon's" Minesweeper</p>
            <Board board={this.state.board.grid} update={this.updateGame} />
         </div>
      );
    }
  }
}

export default Game;
