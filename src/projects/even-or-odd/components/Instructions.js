import React from 'react';
import { connect } from "react-redux";
import { expandInstructions, collapseInstructions } from "../actions/settings";

const Instructions = props => {
    const { instructionsExpanded, expandInstructions, collapseInstructions } = props;

    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to even or odd. The game goes like this</p>
                <p>The deck is shuffled. Then choose: will the next card be even or odd?</p>
                <p>Make a choice on every draw, and see how many you can get right in a row!</p>
                <br />
                <button onClick={collapseInstructions}>Show Less</button>
            </div>
        )
    }

    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to even or odd. The game goes like this...</p>
            <button onClick={expandInstructions}>Read More</button>
        </div>
    )

}

const mapStateToProps = state => {
    return { instructionsExpanded: state.settings.instructionsExpanded }
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions()),
    }
}

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(Instructions);


// Shorter version

// const componentConnector = connect(
//     state => ({ instructionsExpanded: state.instructionsExpanded }),
//     { expandInstructions, collapseInstructions }
// )

// export default componentConnector(Instructions);
