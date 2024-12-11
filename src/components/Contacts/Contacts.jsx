import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './Contacts.module.css';

const Contacts = () => (
  <div className={s.contacts}>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default Contacts;
