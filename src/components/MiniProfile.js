import React from "react";
import { DropdownButton, Dropdown} from "react-bootstrap";
import Logout from "./Logout.js"

export default class MiniProfile extends React.Component {
  render() {
    return (
      <>
        <DropdownButton
          style={{marginRight:"30px"}}
          eventKey={3}
          title={
            <img
            style={{ borderRadius: "50%", height: "75px" }}
            src={this.props.auth0.user.picture}
            alt=""
            />
          }
        >
          <Dropdown.Item eventKey="1" href="#profile">
            Profile
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" href="/favorites">
            Favorite Parks
          </Dropdown.Item>
          {/* <Dropdown.Item eventKey="3">
            Settings
          </Dropdown.Item> */}
          <Dropdown.Item eventKey="4">
            <Logout />
          </Dropdown.Item>
        </DropdownButton>
      </>
    );
  }
}

