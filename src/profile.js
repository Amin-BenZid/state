import React from "react";
import "./App.css";
class Profile extends React.Component {
  constructor(state) {
    super(state);

    this.state = {
      fullName: "Amine Bz",
      bio: "bio test",
      imgSrc: "pic",
      profession: "my profession",
    };
  }
  render() {
    return (
      <div className="profile-comp">
        <div className="img">
          <h6>Pic = {this.state.imgSrc}</h6>
        </div>
        <h6> Full name = {this.state.fullName}</h6> <br />
        <h6>Bio = {this.state.bio}</h6> <br />
        <h6>Profession = {this.state.profession}</h6> <br />

      </div>
    );
  }
}
export default Profile;
