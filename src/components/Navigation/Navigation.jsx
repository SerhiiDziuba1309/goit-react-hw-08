import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav className={s.nav}>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? `${s.navLink} ${s.active}` : s.navLink
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/contacts"
      className={({ isActive }) =>
        isActive ? `${s.navLink} ${s.active}` : s.navLink
      }
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
