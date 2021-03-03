import React from "react";

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let message = "";
        if (this.props.status) {
            message = "Congratulations You have Won 10 cents !"
        } else {
            message = "Sorry we are closed ! Come again maybe?"
        }
        return (
        <div className="modal">
            <div className="modal-screen">
            <div className="modal-form">
                <div className="form">
                <p>{message}</p>
                <button onClick={this.props.restart} className="restart">Play Again !</button>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Modal;