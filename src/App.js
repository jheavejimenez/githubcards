import React, {Component, useState} from "react";
import CardList from "./components/CardList";
import Form from "./components/Form";

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             profileData: []
//         }
//     }
//     addProfileCardData = (profile) => {
//         this.setState(prevState => {
//             return {
//                 profileData: [...prevState.profileData, profile]
//             }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <div className="header">{this.props.title}</div>
//                 <Form addCard={this.addProfileCardData}/>
//                 <CardList profiles={this.state.profileData}/>
//             </div>
//         );
//     }
//
// }
function App(props) {
    const [profileData, setProfileData] = useState([])
    const addProfileCardData = (profile) => {
        setProfileData(prevState => {
            return [...prevState, profile]
        })
    }
    return(
        <div>
            <div className={"header"}>{props.title}</div>
            <Form addCard={addProfileCardData}/>
            <CardList profiles={profileData}/>
        </div>

    )

}

export default App;
