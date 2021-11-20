import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Profile from "./profile";

class App extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      show: true,
      count: 0,
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
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <button className="butt" onClick={() => this.ShowHide()}>
              Show/Hide
            </button>
            {this.state.show === true ? <Profile /> : null}
          </div>
        </div>
        <div>{setInterval(this.count + 1, 1000)}</div>
      </div>
    );
  }
}

export default App;
