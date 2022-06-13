import { Album } from './Album';

export interface Discography {
  disco_id: number;
  artist_name: string;
  albuns: Array<Album>;
}
