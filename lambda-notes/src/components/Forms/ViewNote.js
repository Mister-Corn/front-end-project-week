// Dependencies
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// Components
import { deleteNote } from '../Actions';
import { Button } from '../Button';

const cssMakesMeCry = {
  color: "black",
  fontFamily: `'Roboto', sans-serif`,
  textDecoration: "underline",
};


class ViewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      go: false,
    }
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteMethod = (e) => {
    e.preventDefault();
    this.props.deleteNote(this.props.id);
    this.setState({
      modal: false,
      go: true,
    })
    
  }

  render() {
    if (this.state.go === true) return <Redirect to="/" />;
    const note = this.props.notes.filter(note => note.id === this.props.id)[0];
    const { title, text } = note; 
    return (
      <div style={{background: "var(--color-bg--main)", height: "100%"}} className="pr-3">
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <h5 className="text-center">Are you sure you want to delete this?</h5>
          </ModalBody>
          <ModalFooter>
            <Button delete onClick={this.deleteMethod}>Delete</Button>{' '}
            <Button onClick={this.toggle}>No</Button>
          </ModalFooter>
        </Modal>
        <div className="actions d-flex pt-3 justify-content-end">
          <Link style={cssMakesMeCry} to={`/edit/${this.props.id}`} className="mx-2">edit</Link>
          <a style={cssMakesMeCry} href="" onClick={this.toggle} className="mx-2">delete</a>
        </div>
        <div className="view-note p-4">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    notes: state.notes,
  };
};

export default withRouter(connect(mapDispatchToProps, { deleteNote })(ViewNote));