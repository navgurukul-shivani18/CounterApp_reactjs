import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters-Rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props; //object destructuring is used to make objects into a bunch of variables
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(
          //map function takes an array and a function,Applies the function to every element in the array.
          //Keeps track of the results of each successive function call,Returns a new array containing these results.
          counter => (
            <Counter
              key={counter.id} // taking a key which included counter id
              onDelete={onDelete} //Create a onDelete event in the Counter component
              onIncrement={onIncrement}
              counter={counter} //passing {counter} object contain all the data about counter
            />
          ) // React.createElement('Counters')
        )}
      </div>
    );
  }
}

export default Counters;
