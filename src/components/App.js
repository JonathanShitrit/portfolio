import React, { Component } from "react";
import Projects from "./Projects";
import Social from "./Social";
import Title from "./Title";
import profile from "../assets/profile.png";


class App extends Component {
  state = { displayBio: false };

  // constructor() {
  //   super();
  //   this.state = { displayBio: false };

  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  // }

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>

        <img src={profile} alt="profile" className="profile" />
        <h1>Hello!</h1>
        <p>My name is Jonathan Shitrit</p>
        <Title />

        {this.state.displayBio ? (
          <div>
            <p>I live in New York and code every day</p>
            <p>My favorite framework is React.js</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )}
        <hr />
        <Projects />
        <hr />
        <Social />
      </div>
    );
  }
}

export default App;
