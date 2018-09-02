import React, { Component } from "react";
import NavBar from "./components/navbar"; //importing NavBar Component from components/navbar
import Counters from "./components/counters"; //importing counters Components from components/counters
import "./App.css";

class App extends Component {
  state = {
    //state is an object which hold the counters array
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // Constructor is the part "mount phase" of life cycle of hooks
  constructor() {
    super(); //super will call the constructor of parent class
    // when instance of class is create then this constructor will call
    console.log("App-Constructor");
  }

  //"ComponentdidMount" is a 3rd life cycle of "mount phase" of hooks
  componentDidMount() {
    //Helpfull to  Ajax Call to get data from server
    console.log("App- Mounted");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //spread operatort allows an iterable to expand in places where 0+ arguments are expected.
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //Creating a method handleDelete
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    //when component is render all its children are rendered
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length} // counting the total counters which will be display on the navigation bar
          //if the value is greater than 0 then it will show total counters
        />
        <main className="container">
          <Counters //Counters component is controlled component it doesn't have any state it simply recieve data
            counters={this.state.counters} // simply recieves the data of counters
            onReset={this.handleReset} // Recieves methods to modify data by props
            onIncrement={this.handleIncrement} // Recieves methods to modify data by props
            onDelete={this.handleDelete} // Recieves methods to modify data by props
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
