import React, { useState } from 'react';
import styles from './App.module.css';
import Disco from './components/Disco/Disco';
import Search from './components/Search/Search';
import { Discography } from './Discography';

import logo from './assets/img/logo.svg';

const App = () => {
  // const album: Album = { name: 'albumName' };
  const discos: Discography[] = [
    {
      disco_id: 11,
      artist_name: 'Linkin Park',
      albuns: [
        {
          id: 1,
          name: 'Hybrid Theory (20th Anniversary Edition)',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02f1a378f8bcaa4be358f02ca2',
          year: 2020,
          songs: [
            { title: 'Papercut' },
            { title: 'One Step Closer' },
            { title: 'Crawling' },
          ],
        },
        {
          id: 2,
          name: 'Meteora (Bonus Edition)',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e0289a8fab8bf8cd2b77da1fd17',
          year: 2003,
          songs: [
            { title: 'Somewhere I Belong' },
            { title: 'Hit the Floor' },
            { title: 'Breaking the Habit' },
            { title: 'Faint' },
          ],
        },
      ],
    },

    {
      disco_id: 22,
      artist_name: 'Muse',
      albuns: [
        {
          id: 1,
          name: 'Black Holes And Revelations',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e0228933b808bfb4cbbd0385400',
          year: 2016,
          songs: [
            { title: 'Take a Bow' },
            { title: 'Starlight' },
            { title: 'Map of the Problematique' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
        {
          id: 2,
          name: 'The Resistance',
          source_image:
            'https://i.scdn.co/image/ab67616d00001e02b6d4566db0d12894a1a3b7a2',
          year: 2009,
          songs: [
            { title: 'Uprising' },
            { title: 'MK Ultra' },
            { title: 'Guiding Light' },
            { title: 'Undisclosed Desires' },
          ],
        },
      ],
    },
  ];
  // console.log(discos.find((artist) => artist.artist === 'Muse'));

  const [filteredTerm, setFilteredTerm] = useState('');
  const saveTermHandler = (enteredTerm: string) => {
    setFilteredTerm((prevTerm: any) => enteredTerm);
    // console.log(filteredTerm);
  };

  return (
    <div className={styles.App}>
      <img className={styles.logo} src={logo} alt='Logo for Vmusic website' />
      <Search data={discos} onSaveTermData={saveTermHandler} />
      <Disco items={discos} onFilteredTerm={() => filteredTerm} />
    </div>
  );
};

export default App;
