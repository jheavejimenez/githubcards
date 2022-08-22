import React, {Component} from "react";
import Card from "./components/Cards";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Card/>
            </div>
        );
    }

}

export default App;
