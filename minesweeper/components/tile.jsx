import React from "react";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let boolean = false;
    if (e.altKey) {
      boolean = true;
    }
    this.props.update(this.props.tile, boolean);
  }

  render() {
    if (this.props.tile.explored && this.props.tile.bombed) {
      // alert("sorry we are closed!");
      return <div className="tile bombed"></div>;
    } else if (this.props.tile.explored) {
      return (
        <div className="tile revealed">
          {this.props.tile.adjacentBombCount()}
        </div>
      );
    } else if (this.props.tile.flagged) {
      return (
        <div onClick={this.handleClick} className="tile flagged">
          ⚑
        </div>
      );
    } else
      return (
        <div onClick={this.handleClick} className="tile"></div>
      );
  }
}

export default Tile;

// 💣
