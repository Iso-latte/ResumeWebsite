import React from "react";
import NavBar from "./componets/NavBar";
import ConnectForm from "./componets/ConnectForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App(): React.ReactElement {
  return <div>
          <NavBar/>
          <ConnectForm/>
        </div>
}

export default App;
