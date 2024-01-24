import React from "react";
import * as components from "./components/index"

const App = () => {
  return (
    <div>
      <components.Navbar />
      <components.Hero />
      <components.Booking />
      <components.Gallery />
      <components.Footer />
    </div>
  );
};

export default App;
