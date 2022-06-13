import { Song } from './Song';

export interface Album {
  id: number;
  name: string;
  source_image: string;
  // artist: string;
  year: number;
  songs: Array<Song>;
}
