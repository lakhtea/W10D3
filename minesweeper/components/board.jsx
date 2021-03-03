import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.board.map((row, idx) => { 
                    <div key={idx}>
                    {row.map((tile, i) => {
                        <Tile tile={tile} update={this.props.update} key={i} />
                    })}
                    </div>
                 })}
            </div>
        )
    }
}

export default Board;
