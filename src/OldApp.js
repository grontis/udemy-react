import React, {Component} from 'react';
import './App.css';
import Person from "./Person";

class App extends Component{
    state = {
        persons: [
            {name: 'Grant', age: 27},
            {name: 'Gimli', age: 262},
            {name: 'Jeef', age: 48}
        ]
    }

    switchNameHandler = (newName) => {
        this.setState({persons: [
            {name: newName, age: 27},
            {name: 'Gimli', age: 262},
            {name: 'Jeef', age: 48}
        ]
        })
    }

    nameChangedHandler = (event) => {
                this.setState({persons: [
            {name: 'Grant', age: 27},
            {name: event.target.value, age: 262},
            {name: 'Jeef', age: 48}
        ]
        });
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
                <h1>Hello, world. REACT</h1>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Grontis')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Grant')}>
                    My hobby is programming
                </Person>

                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedHandler}>
                    My hobby is killin orcs!
                </Person>

                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}>
                    My hobby is eating with forks!
                </Person>

            </div>
        );
    }
}

export default App;
