import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
import { login } from "../actions/userActions";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const redirect = location.search
    ? location.search.split("=")[1]
    : "/artistList";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
      console.log(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      <h1>Sign In</h1>
      {/* {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label className="text-light">Email Address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Sign In
        </Button>
      </Form>
    </>
  );
};

export default LoginScreen;
