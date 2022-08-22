import React, {Component} from "react";
import Card from "./Card";

class CardList extends Component {
    render() {
        return (
            <div>
                {this.testData.map((profile, index) => <Card key={index} {...profile}/>)}
            </div>

        )
    }
}

export default CardList;
