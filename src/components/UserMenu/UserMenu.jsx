import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <p className={s.userName}>Welcome, {user.name}</p>
      <button
        type="button"
        className={s.logoutButton}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
