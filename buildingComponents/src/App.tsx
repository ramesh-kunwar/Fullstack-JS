import React, { useState } from "react";
import Button from "./components/Button";
import AlertMessage from "./components/AlertMessage";

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="m-5">
      <AlertMessage showAlert={showAlert} onClick={() => setShowAlert(false)} />
      <Button onClick={() => setShowAlert(true)}> Show Alert </Button>
    </div>
  );
};

export default App;
