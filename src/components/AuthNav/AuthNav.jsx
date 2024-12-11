import React from 'react';
import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <nav className={s.authNav}>
    <NavLink to="/register" className={s.authNav_link}>
      Register
    </NavLink>
    <NavLink to="/login" className={s.authNav_link}>
      Login
    </NavLink>
  </nav>
);

export default AuthNav;
