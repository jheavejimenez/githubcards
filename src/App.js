import React, {Component} from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profileData: []
        }
    }
    addCard = (profile) => {
        this.setState(prevState => {
            return {
                profileData: [...prevState.profileData, profile]
            }
        })
    }
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form />
                <CardList/>
            </div>
        );
    }

}

export default App;
