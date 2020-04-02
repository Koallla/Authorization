import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from './appBar.module.css';

const AppBar = () => {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  );
};

export default AppBar;
