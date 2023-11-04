import React, { useState } from "react";
import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import { removeCookie, setCookie } from "../../utils/CookieUtil";
import "./Login.css";
import LoginKey from "../../constants/LoginKey";

const MOCK_USERS = [
  {
    email: "thiennguyen.kt@gmail.com",
    password: "123456789x@X",
    role: "ADMIN",
  },
  {
    email: "kellytran@lifung.com",
    password: "123456789x@X",
    role: "GUEST",
  },
];

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { history } = props;

  document.title = `Login`;

  const checkLogin = () => {
    const mockUser = MOCK_USERS.find(
      (x) => x.email === email && x.password === password
    );
    if (mockUser) {
      setCookie(LoginKey.AUTHENTICATED, true);
      setCookie(LoginKey.AUTHORITY, mockUser.role);
      history.push({
        pathname: "/",
      });
    } else {
      console.error("--- Error when tried to authenticated user ---");
      history.push({
        pathname: "/404",
      });
      removeCookie(LoginKey.AUTHENTICATED);
      removeCookie(LoginKey.AUTHORITY);
    }
  };

  return (
    <Container className="login__container">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <Grid container className="login__grid">
          <Paper elevation={6} className="login__form">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                style={{
                  marginBottom: "0.5rem",
                }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                style={{
                  marginBottom: "0.5rem",
                }}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button variant="outlined" onClick={checkLogin}>
                Login
              </Button>
            </div>
          </Paper>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
