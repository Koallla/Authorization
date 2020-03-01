import React, { Component } from "react";
import Form from "../components/shared/Form";
import { connect } from "react-redux";
import * as sessionOperations from "../redux/session/sessionOperations";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import Label from "../components/shared/Label";

class LoginForm extends Component {
  state = { email: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    console.log(this.state);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
        </Label>
        <Label>
          <Button label="Log In" type="submit" />
        </Label>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onLogin: sessionOperations.login
};

export default connect(null, mapDispatchToProps)(LoginForm);
