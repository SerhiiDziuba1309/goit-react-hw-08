import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = useCallback(
    event => {
      dispatch(changeFilter(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={s.input}
          placeholder="Enter name..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
