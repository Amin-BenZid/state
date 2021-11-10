import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Profile from "./profile";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      show: true,
    };
  }
  ShowHide() {
    this.setState({
      show: !this.state.show,
    });
  }
  componentDidMount() {}

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <div className="time">
            {new Date().toLocaleString().substring(11) + ""}
          </div>
          <button className="butt" onClick={() => this.ShowHide()}>
            Show/Hide
          </button>
          {this.state.show === true ? <Profile /> : null}
        </div>
      </div>
    );
  }
}

export default App;
