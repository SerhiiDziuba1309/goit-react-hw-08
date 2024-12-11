import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteClick = id => {
    setContactToDelete(id);
    setModalOpen(true);
  };

  const confirmDelete = () => {
    dispatch(deleteContact(contactToDelete));
    setModalOpen(false);
    setContactToDelete(null);
  };

  const cancelDelete = () => {
    setModalOpen(false);
    setContactToDelete(null);
  };

  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <div>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={s.deleteButton}
              onClick={() => handleDeleteClick(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ConfirmModal
        isOpen={modalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this contact?"
      />
    </div>
  );
};

export default ContactList;
