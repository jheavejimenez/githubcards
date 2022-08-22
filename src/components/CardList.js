import React, {Component} from "react";
import Card from "./Card";

class CardList extends Component {
    render() {
        return (
            <div>
                {this.props.profiles.map((profile) => <Card key={profile.id} {...profile}/>)}
            </div>
        )
    }
}

export default CardList;
