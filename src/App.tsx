import React from "react";
import "./App.css";
import Greeter from "./components/Greeter";

import "bootstrap/dist/css/bootstrap.css";

const App: React.FC = () => {
  return (
    <main className="container">
      <Greeter
        logo="https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/BusinessAnalyst.png"
        companyName="Esri"
      />
      <hr />
    </main>
  );
};

export default App;
