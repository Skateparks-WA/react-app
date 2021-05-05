import { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  closeModalHandler = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const index = this.props.index;
    return (
      <div>
        <Button
          variant="primary"
          onClick={() => this.setState({ showModal: true })}
        >
          More Details
        </Button>

        <Modal show={this.state.showModal} onClose={this.closeModalHandler}>
          <Modal.Header
            closeButton
            onClick={() => this.setState({ showModal: false })}
          >
            <Modal.Title>{this.props.parks.name} Park</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img></Card.Img>
            <Card.Body>
              <Card.Title>
                <b>Native Lands: </b>
                {this.props.parks.native_land}{" "}
              </Card.Title>

              <Card.Text>
                <b>City: </b> {this.props.parks.city}{" "}
              </Card.Text>
              <Card.Text>
                <b>Full Address : </b> {this.props.parks.full_address}{" "}
              </Card.Text>
              <Card.Text>
                <b>Difficulty : </b> {this.props.parks.difficulty}{" "}
              </Card.Text>
              <Card.Text>
                <b>Crust Level : </b> {this.props.parks.crust_level}{" "}
              </Card.Text>
              <Card.Text>
                <b>DIY : </b> {this.props.parks.diy ? "🛠️" : "🚫"}{" "}
              </Card.Text>
              <Card.Text>
                <b>Public Bathrooms : </b>{" "}
                {this.props.parks.public_bathroom ? "🚻" : "🚫"}{" "}
              </Card.Text>
              <Card.Text>
                <b>Night Lights : </b>{" "}
                {this.props.parks.night_light ? "💡" : "🚫"}{" "}
              </Card.Text>
            </Card.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ showModal: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
