import React, { Component } from "react"; //importing React Component from react module

//defining new component Counter
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //this method is called after the state is updated  this is the part of hooks life cycle "update phase"
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      //if preProps.counter.value is different from this.props.counter.value then we will do ajax call
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    //  this method is called just before the a component is removed from the dom
    console.log("COunter - Unmount");
  }
  render() {
    console.log("Counters-Rendered");
    return (
      <div>
        {/* here we are calling a function formateCount and use span  */}
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //it access the props counter object by counters component by counter variable
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} // it access the props counter id by  counters component by key variable
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  //"This is the 2nd method"
  // creating a method called as getBadgeClasses it will check that if counter value is zero
  // returns button in yellow color by warning property and if their is value then blue color by primary
  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //m-2 for margin
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // "This is first method create in the application"
  // defining a new function which checks  current states of component then return a output
  // if the value will be zero then it returns "zero" otherwise it returns value
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter; //Define a class Counter above and now exporting it here
