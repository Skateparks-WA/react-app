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
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img ></Card.Img>
            <Card.Body>
              <Card.Title> </Card.Title>

              <Card.Text></Card.Text>

              <Card.Text></Card.Text>
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