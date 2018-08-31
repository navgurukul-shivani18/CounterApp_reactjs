import React, { Component } from "react";
//defining new component Counter
class Counter extends Component {
  //setting up state of Counter(component)
  // state = {
  //   value: this.props.counter.value
  //   //imageUrl: "https:/picsum.photos/200"
  //   //rendring jsx code
  //   //tags: []
  // };

  //we can accesss handleincrement with the help of constructor
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>There are no tags</p>;
  //   } //If the length of tag is 0 then it prints "There are no tags""
  //   else {
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}> {tag} </li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value != this.props.counter.value) {
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("COunter - Unmount");
  }
  render() {
    console.log("Counters-Rendered");
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="demo" /> */}
        {/* here we are calling a function formateCount and use span  */}
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "please create a new tag!"} */}
        {/* first value is boolean and another is different then first check the
        boolean if it is true then swicth to another condition and print it */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; //m-2 for margin
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //defining a new function which checks  current states of component then return a output
  formateCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
