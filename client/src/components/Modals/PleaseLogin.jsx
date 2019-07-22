import Modal from "react-modal";
import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function PleaseLoginModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
      >
        <span onClick={props.closeModal}>
          <i
            className="fas fa-times"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "#009586",
              marginBottom: "8px",
            }}
          />
        </span>
        <div>
          <Link
            to="/login"
            onClick={e => {
              e.preventDefault();
              props.history.push({
                pathname: "/login",
                from: `${props.match.url}`,
              });
            }}
          >
            <h6>Please Sign In to Continue</h6>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default withRouter(PleaseLoginModal);
