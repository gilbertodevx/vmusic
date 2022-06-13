import React, { useState } from 'react';
import styles from './SearchForm.module.css';

import { MdSearch } from 'react-icons/md';

const SearchForm = (props: any) => {
  // const inputTermSearchHandler = (event: any) => {
  //   // console.log(event.target.value);
  //   props.onSaveTermSearch(event.target.value);
  // };
  const [enteredTerm, setEnteredTerm] = useState('');
  const [isValid, setIsValid] = useState(true);

  const termChangeHandler = (event: any) => {
    if (enteredTerm.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTerm(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    if (enteredTerm.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const termData = {
      term: enteredTerm,
    };
    props.onSaveTermSearch(termData);
  };
  return (
    <form onSubmit={submitHandler} className={styles.search_form} role='search'>
      <input
        className={!isValid ? styles.empty : styles.search_bar}
        id='search'
        type='search'
        value={props.inputTermSearch}
        onChange={termChangeHandler}
      />
      <div className={styles.button}>
        <button type='submit'>
          <MdSearch className={styles.button_icon} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
