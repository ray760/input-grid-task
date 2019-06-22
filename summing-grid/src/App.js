import React, { Component } from "react";
import "./styles.css";

import NumbersInputComponent from "./Components/NumbersInputComponent";
import TotalComponent from "./Components/TotalComponent";

class App extends Component {
  state = {
    inputs: [
      { error: false, value: 0 },
      { error: false, value: 0 },
      { error: false, value: 0 }
    ],
    total: 0
  };

  updateTotal = (i, value) => {
    const newArr = [...this.state.inputs];
    newArr[i] = { error: false, value: parseFloat(value) };

    this.setState({
      inputs: newArr,
      total: newArr.reduce((total, num) => {
        return total + num.value;
      }, 0)
    });
  };

  handleError = (i, err) => {
    const newArr = [...this.state.inputs];
    newArr[i].error = err;

    this.setState({
      inputs: newArr,
      total: newArr.reduce((total, num) => {
        return total + num.value;
      }, 0)
    });
  };

  render() {
    return (
      <div className="App">
        <NumbersInputComponent
          state={this.state}
          updateTotal={this.updateTotal}
          handleError={this.handleError}
        />

        <TotalComponent total={this.state.total} />
      </div>
    );
  }
}

export default App;
