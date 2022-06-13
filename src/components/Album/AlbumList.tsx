import React from 'react';
import { Album } from '../../Album';
import AlbumItem from './AlbumItem';
import styles from './AlbumList.module.css';

const AlbumList = (props: any) => {
  return (
    <div className={styles.album_list}>
      {/* {props.items.length === 0 && 'Not '} */}
      {props.items.length > 0 &&
        props.items.map((disco: any) => {
          return disco.albuns.map((album: Album, index: number) => {
            return (
              <div className={styles.item} key={index}>
                <AlbumItem data={{ disco, album }} />
              </div>
            );
          });
        })}
    </div>
  );
};

export default AlbumList;
