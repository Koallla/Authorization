import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";
import styled from "styled-components";
import * as sessionSelectors from "../redux/session/sessionSelectors";
import * as sessionOperations from "../redux/session/sessionOperations";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  justify-content: space-between;
`;

const AppBar = ({ authetication, user, onLogOut }) => {
  return (
    <StyledHeader>
      <Navigation authetication={authetication} />
      {authetication && <UserProfile user={user} onLogOut={onLogOut} />}
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  user: sessionSelectors.getUser(state),
  authetication: sessionSelectors.getIsAuthenticated(state)
});

const mapDispatchToProps = {
  onLogOut: sessionOperations.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
