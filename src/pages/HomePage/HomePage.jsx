import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.homePage}>
    <h1 className={s.title}>Welcome to Phonebook App</h1>
    <p className={s.description}>
      Manage your contacts efficiently and securely.
    </p>
  </div>
);

export default HomePage;
