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
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = id => {
    setContactToDelete(id);
    setModalOpen(true);
  };

  const confirmDelete = async () => {
    setIsDeleting(true);
    try {
      await dispatch(deleteContact(contactToDelete)).unwrap();
      setModalOpen(false);
    } catch (error) {
      console.error('Failed to delete contact:', error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const cancelDelete = () => {
    setModalOpen(false);
    setContactToDelete(null);
  };

  if (contacts.length === 0) {
    return <p className={s.noContacts}>No contacts found.</p>;
  }

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <p className={s.contactInfo}>
              {name}: <span className={s.contactNumber}>{number}</span>
            </p>
            <button
              className={s.button}
              onClick={() => handleDeleteClick(id)}
              disabled={isDeleting && contactToDelete === id}
            >
              {isDeleting && contactToDelete === id ? 'Deleting...' : 'Delete'}
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
    </>
  );
};

export default ContactList;
