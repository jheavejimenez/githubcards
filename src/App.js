import React, {Component} from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";

class App extends Component {
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
