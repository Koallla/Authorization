import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

const color = 'black';
const decor = 'underline';

const Navigation = () => {
  return (
    <>
      {/* <StyledList> */}
      <a href="/">
        <div className={styles.logo}></div>
      </a>
      {/* <StyledItem> */}
      <NavLink
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: `${color}`,
          textDecoration: `${decor}`,
        }}
        to="/"
      >
        Home
      </NavLink>
      {/* </StyledItem> */}

      {/* <StyledItem> */}
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: `${color}`,
          textDecoration: `${decor}`,
        }}
        to="/about"
      >
        About us
      </NavLink>
      {/* </StyledItem> */}

      {/* <StyledItem> */}
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: `${color}`,
          textDecoration: `${decor}`,
        }}
        to="/gallery"
      >
        Gallery
      </NavLink>
      {/* </StyledItem> */}

      {/* <StyledItem> */}
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: `${color}`,
          textDecoration: `${decor}`,
        }}
        to="/account"
      >
        Account
      </NavLink>
      {/* </StyledItem> */}

      {/* <StyledItem> */}
      <NavLink
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: `${color}`,
          textDecoration: `${decor}`,
        }}
        to="/login"
      >
        Login
      </NavLink>
      {/* </StyledItem> */}

      {/* {<StyledItemwhite */}
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: `${color}`,
          textDecoration: `${decor}`,
        }}
        to="/signup"
      >
        SignUp
      </NavLink>
      {/* </StyledItem> */}
      {/* </StyledList> */}
    </>
  );
};

export default Navigation;
