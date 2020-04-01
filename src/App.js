import React from "react";

import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Debra Howard"
        avatar="https://randomuser.me/api/portraits/women/4.jpg"
        online
      />
      <Contact
        name="Francisco Gonzalez"
        avatar="https://randomuser.me/api/portraits/men/43.jpg"
        offline
      />
      <Contact
        name="Sophie Perez"
        avatar="https://randomuser.me/api/portraits/women/18.jpg"
        online
      />
    </div>
  );
}

export default App;
