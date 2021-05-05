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
    console.log("yooooooo this on parks", this.props.parks);
    // name={this.props.parks[0].name}
    //           nativeLand={this.props.parks[0].native_land}
    //           city={this.props.parks[0].city}
    //           fullAddy={this.props.parks[0].full_address}
    //           diff={this.props.parks[0].difficulty}
    //           custLevel={this.props.parks[0].crust_level}
    //           diy={this.props.parks[0].diy}
    //           rain={this.props.parks[0].rain_cover}
    //           bathRoom={this.props.parks[0].public_bathroom}
    //           light={this.props.parks[0].night_light}
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
            <Modal.Title>{this.props.parks[0].name} Park</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img></Card.Img>
            <Card.Body>
              <Card.Title>
                <b>Native Lands: </b>
                {this.props.parks[0].native_land}{" "}
              </Card.Title>

              <Card.Text>
                <b>City: </b> {this.props.parks[0].city}{" "}
              </Card.Text>
              <Card.Text>
                <b>Full Address : </b> {this.props.parks[0].full_address}{" "}
              </Card.Text>
              <Card.Text>
                <b>Difficulty : </b> {this.props.parks[0].difficulty}{" "}
              </Card.Text>
              <Card.Text>
                <b>Crust Level : </b> {this.props.parks[0].crust_level}{" "}
              </Card.Text>
              <Card.Text>
                <b>DIY : </b> {this.props.parks[0].diy ? "🛠️" : "🚫"}{" "} 
              </Card.Text>
              <Card.Text>
                <b>Public Bathrooms : </b> {this.props.parks[0].public_bathroom ? "🚻" : "🚫"}{" "}
              </Card.Text>
              <Card.Text>
                <b>Night Lights : </b> {this.props.parks[0].night_light ? "💡" : "🚫"}{" "}
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
