import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <span>Picture:</span>
          <input />
        </div>
        <br />
        <div>
          <span>Full Name: </span>
          <input />
        </div>
        <br />
        <button>Add Friend</button>
      </div>
    );
  }
}
