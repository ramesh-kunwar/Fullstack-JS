import React from "react";

interface Props {
  showAlert: Boolean;
  onClick: () => void;
}
const AlertMessage = ({ showAlert, onClick }: Props) => {
  if (showAlert) {
    return (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <h3>Alert Text</h3>
        <button
          onClick={onClick}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  } else {
    return <h1>No alert found</h1>;
  }
};

export default AlertMessage;
