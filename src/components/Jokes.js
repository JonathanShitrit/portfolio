import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline } }) => (
    <p style={{ margin: 20 }}> {setup} <em> {punchline}</em></p>
)

// class Jokes extends Component {
//     state = { jokes: [{}] };

//     componentDidMount() {
//         // Best practice to place fetches and other asynchronous code in ComponentDidMount hook
//         this.getTenMoreJokes();

//     };

//     getTenMoreJokes = () => {
//         fetch("https://official-joke-api.appspot.com/random_ten")
//             .then(response => response.json())
//             .then(json => this.setState({ jokes: json }));
//     };

//     render() {
//         const { jokesArray } = this.state.jokes;

//         return (
//             <div>
//                 <h2>Highlighted Joke</h2>
//                 <button onClick={this.getTenMoreJokes}>Get 10 more jokes!</button>
//                 {this.state.jokes.map(joke => {
//                     return <p key={joke.id}> {joke.setup} <em key={joke.id}> {joke.punchline}</em></p>;
//                 })}
//             </div>
//         )
//     };
// }

class Jokes extends Component {
    state = { jokes: [], joke: {}, };

    componentDidMount() {
        // Best practice to place fetches and other asynchronous code in ComponentDidMount hook
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    };

    // Class property syntax
    getTenMoreJokes = () => {
        fetch("https://official-joke-api.appspot.com/random_ten")
            .then(response => response.json())
            .then(json => this.setState({ jokes: json }))
            .catch(error => alert(error.message));;
    };

    render() {
        const { setup, punchline } = this.state.joke;

        return (
            <div>
                <h2>Highlighted Joke</h2>
                {/* <p> {setup} <em> {punchline}</em></p> */}
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want ten new jokes?</h3>
                <button onClick={this.getTenMoreJokes}>Get 10 more jokes!</button>
                {
                    this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))
                    // return <p key={id}> {setup} <em> {punchline}</em></p>;
                }
            </div>
        )
    };
}

export default Jokes;