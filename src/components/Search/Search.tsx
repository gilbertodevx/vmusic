import React, { useState } from 'react';
import SearchForm from './SearchForm';
import styles from './Search.module.css';

const Search = (props: any) => {
  // console.log('Search.tsx');
  // console.log(props.data);

  const [inputTermSearch, setInputTermSearch] = useState('');

  const saveTermSearch = (inputTermSearch: string) => {
    setInputTermSearch((prevState) => {
      return inputTermSearch;
    });

    props.onSaveTermData(inputTermSearch);
    // console.log(inputTermSearch);
  };
  return (
    <section className={styles.search}>
      <SearchForm value={inputTermSearch} onSaveTermSearch={saveTermSearch} />
      {/* {inputTermSearch.length > 0 && 'Existe termo de pesquisa!'} */}
    </section>
  );
};

export default Search;
