import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? s.active : s.inactive)}
    >
      Home
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) => (isActive ? s.active : s.inactive)}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;