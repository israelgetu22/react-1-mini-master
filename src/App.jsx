import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: "",
      name: "",
    };
  }

  updatePicture(value) {
    this.setState({ picture: value });
  }

  updateName(value) {
    this.setState({ name: value });
  }

  addFriend() {
    const { friends, picture, name } = this.state;

    let newFriends = friends.slice();
    newFriends.push({ picture, name });
    //console.log(newFriends);

    this.setState({
      friends: newFriends,
      name: "",
      picture: "",
    });
  }

  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`}>
        <img width="100px" src={friend.picture} />
        <span>{friend.name}</span>
      </div>
    ));

    return (
      <div>
        <div>
          <span>Picture:</span>
          <input
            type="url"
            placeholder="URL"
            onChange={(e) => this.updatePicture(e.target.value)}
            value={this.state.picture}
          />
        </div>
        <br />
        <div>
          <span>Full Name: </span>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => this.updateName(e.target.value)}
            //onChange={(e) => console.log(e.target.value)}
            value={this.state.name}
          />
        </div>
        <br />
        <button onClick={() => this.addFriend()}>Add Friend</button>
      </div>
    );
  }
}
