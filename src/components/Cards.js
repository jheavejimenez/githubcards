import React, {Component} from "react";

class Cards extends Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" alt={"profile-pic"}/>
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Company here...</div>
                </div>
            </div>
        );
    }

}

export default Cards;
