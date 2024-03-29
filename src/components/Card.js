import React, {Component} from "react";


class Card extends Component {
    render() {
        return (
            <div className="github-profile">
                <img src={this.props.avatar_url} alt={"profile-pic"}/>
                <div className="info">
                    <div className="name">{this.props.name}</div>
                    <div className="company">{this.props.company}</div>
                </div>
            </div>
        );
    }

}

export default Card;
