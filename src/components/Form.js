import React, {Component} from "react";
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ""
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.setState({userName: ""});
        this.props.addCard(response.data);
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
