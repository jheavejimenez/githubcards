import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.userName)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.userName}
                    onChange={(e) => this.setState({userName: e.target.value})}
                    type={"text"}
                    placeholder={"Github Username"}
                />
                <button>Add Card</button>
            </form>
        )
    }
}

export default Form;
