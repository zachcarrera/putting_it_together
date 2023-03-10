import React, { Component } from "react";

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.person.age || 0,
        };
    }

    render() {
        const { firstName, lastName, hairColor } = this.props.person;
        const { age } = this.state;

        return (
            <div>
                <h1>
                    {lastName}, {firstName}
                </h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={() => this.setState({ age: age + 1 })}>
                    Birthday Button for {firstName} {lastName}
                </button>
            </div>
        );
    }
}

export default PersonCard;
