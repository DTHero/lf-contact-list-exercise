import React from "react";
import "./App.css";
import ContactList from "./components/contact-list/ContactList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Simple Contact list UI</p>
      </header>
      <ContactList contacts={[]} />
    </div>
  );
}

export default App;
