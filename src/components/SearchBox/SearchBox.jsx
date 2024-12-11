import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.container}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
