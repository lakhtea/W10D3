import React from "react";
import Tile from "./tile";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board">
        {this.props.board.map((row, idx) => {
          return (
            <div className="tile" key={idx}>
              {row.map((tile, i) => (
                <Tile
                  tile={tile}
                  update={this.props.update}
                  key={i}
                  pos={[idx, i]}
                />
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
