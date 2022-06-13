import React from 'react';
import AlbumList from '../Album/AlbumList';
import styles from './Disco.module.css';

const Disco = (props: any) => {
  const filteredDisco = props.items.filter((disco: any) => {
    return disco.artist_name === props.onFilteredTerm().term;
  });

  return props.onFilteredTerm()?.term && filteredDisco.length > 0 ? (
    <section>
      <div className={styles.results}>
        Results for: {props.onFilteredTerm().term}
      </div>

      <AlbumList items={filteredDisco} />
    </section>
  ) : (
    <div className={styles.results_notfound}>
      {'No found albums for: ' + props.onFilteredTerm().term}{' '}
    </div>
  );
};

export default Disco;
