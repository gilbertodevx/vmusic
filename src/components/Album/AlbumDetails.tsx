import React from 'react';
import styles from './AlbumDetails.module.css';

const AlbumDetails = (props: any) => {
  return (
    <div className={styles.song_container}>
      <ul className={styles.songs_list}>
        {props.data.album.songs.map((song: any) => (
          <li> {song.title}</li>
        ))}
      </ul>
      <button
        className={styles.close_button}
        type='button'
        onClick={props.onCancel}
      >
        X
      </button>
    </div>
  );
};

export default AlbumDetails;
