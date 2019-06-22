import React, { Component } from "react";

class NumbersInputComponent extends Component {
  handleOnChange = e => {
    const numChar = /^[0-9\b]+$/;
    const id = e.target.getAttribute("id");
    const value = e.target.value;

    if (!numChar.test(value)) {
      this.props.handleError(id, true);
      return;
    }

    this.props.updateTotal(id, value);
  };

  render() {
    const { inputs } = this.props.state;

    const inputList = inputs.map((input, index) => {
      return (
        <div className="num num-input" key={index}>
          <input
            placeholder="Enter only numbers"
            onChange={this.handleOnChange}
            type="text"
            className={inputs[index].error ? "error" : null}
            id={index}
          />
        </div>
      );
    });

    return <React.Fragment>{inputList}</React.Fragment>;
  }
}

export default NumbersInputComponent;
