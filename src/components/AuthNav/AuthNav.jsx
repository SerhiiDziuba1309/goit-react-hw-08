import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <nav className={styles.authNav}>
    <NavLink
      to="/register"
      className={({ isActive }) =>
        isActive ? `${styles.authLink} ${styles.active}` : styles.authLink
      }
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) =>
        isActive ? `${styles.authLink} ${styles.active}` : styles.authLink
      }
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;
