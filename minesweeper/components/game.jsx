import React from "react";
import Board from "./board";
import {
  Board as MinesweeperBoard,
  Tile as MinesweeperTile,
} from "../minesweeper";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new MinesweeperBoard(9, 20),
    };
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, boolean) {
    if (boolean) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  render() {
    return (
      <div>
        <Board board={this.state.board.grid} update={this.updateGame} />
      </div>
    );
  }
}

export default Game;
