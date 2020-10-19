import React, {Component} from 'react';
import './App.css';
import Person from "./Person";
import UserInput from "./UserInput";
import UserOutput from "./UserOutput";

class App extends Component{
    state = {
        username: 'Grontis'
    }

    usernameChangeHandler = (event) => {
        this.setState(
            {username: event.target.value}
        )
    }

    render() {
        const style ={
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Assignment 1</h1>

                <UserOutput username={this.state.username}>This is a sample user:</UserOutput>



                <UserInput changed={this.usernameChangeHandler} username={this.state.username}/>


            </div>
        );
    }
}

export default App;
