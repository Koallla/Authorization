import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;

const StyledItem = styled.li`
  padding: 8px 16px;
`;

const Navigation = ({ authetication }) => {
  console.log(authetication);
  return (
    <StyledList>
      <StyledItem>
        <NavLink
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "green"
          }}
          to="/"
        >
          Home
        </NavLink>
      </StyledItem>

      <StyledItem>
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "green"
          }}
          to="/about"
        >
          About
        </NavLink>
      </StyledItem>

      {authetication && (
        <>
          <StyledItem>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "green"
              }}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </StyledItem>
          <StyledItem>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "green"
              }}
              to="/account"
            >
              Account
            </NavLink>
          </StyledItem>
        </>
      )}

      {!authetication && (
        <>
          <StyledItem>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "green"
              }}
              to="/login"
            >
              Login
            </NavLink>
          </StyledItem>

          <StyledItem>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "green"
              }}
              to="/signup"
            >
              SignUp
            </NavLink>
          </StyledItem>
        </>
      )}
    </StyledList>
  );
};

export default Navigation;
