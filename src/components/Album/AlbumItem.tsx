import React, { useState } from 'react';
import AlbumDetails from './AlbumDetails';
import styles from './AlbumItem.module.css';

const AlbumItem = (props: any) => {
  //   console.log(props.data);

  const [isClicked, setIsClicked] = useState(false);

  const openDetailsHandler = (event: any) => {
    event.preventDefault();

    setIsClicked(true);
  };

  const closeDetailsHandler = (event: any) => {
    event.preventDefault();

    setIsClicked(false);
  };

  return (
    <section className={styles.card}>
      <img src={props.data.album.source_image} alt='' />
      <div className={styles.title}>
        <h3>{props.data.album.name}</h3>
        <h4>{props.data.disco.artist_name}</h4>
      </div>

      {isClicked === false && (
        <button type='button' onClick={openDetailsHandler}>
          Show Songs
        </button>
      )}

      {isClicked === true && (
        <AlbumDetails data={props.data} onCancel={closeDetailsHandler} />
      )}
    </section>
  );
};

export default AlbumItem;
