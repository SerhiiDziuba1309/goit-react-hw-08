import React from 'react';
import s from './HomePage.module.css';

const HomePage = () => (
  <div className={s.homePage}>
    <h1 className={s.head}>Welcome to the Phonebook App</h1>
    <p className={s.paragraf}>Manage your contacts with ease and security.</p>
  </div>
);

export default HomePage;
