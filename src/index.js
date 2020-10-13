import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./components/App";
import Jokes from "./components/Jokes";
import Header from "./components/Header";
import MusicMaster from "./projects/music-master";
import EvenOrOdd from "./projects/even-or-odd";
import "./index.css";


ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            {/* Collection of Route components */}
            <Route exact path="/" render={() => <Header><App /></Header>} />
            <Route path="/jokes" render={() => <Header><Jokes /></Header>} />
            <Route path="/music-master" render={() => <Header><MusicMaster /></Header>} />
            <Route path="/even-or-odd" render={() => <Header><EvenOrOdd /></Header>} />
        </Switch>
    </Router>,
    document.getElementById("root")
);


// Waits for resolve to be called after 2 sec, then ".then() runs"
// new Promise((resolve, reject) => {
//     return reject(new Error("no bears"));

//     setTimeout(() => {
//         resolve("Bears, Beets, Battlestar Galactica");
//     }, 2000);
// }).then(quote => {
//     console.log(quote);
// }).catch(error => {
//     console.log("error", error);
// }); 



