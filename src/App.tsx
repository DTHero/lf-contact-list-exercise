import { Button } from "@mui/material";
import React from "react";
import "./App.css";
import LoginKey from "./constants/LoginKey";
import ContactList from "./components/contact-list/ContactList";
import { removeCookie } from "./utils/CookieUtil";

function App() {
  const logout = () => {
    removeCookie(LoginKey.AUTHENTICATED);
    removeCookie(LoginKey.AUTHORITY);
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Simple Contact list UI</p>
        <Button
          variant="contained"
          style={{
            position: "absolute",
            right: "5%",
          }}
          onClick={logout}
        >
          Logout
        </Button>
      </header>
      <ContactList contacts={[]} />
    </div>
  );
}

export default App;
