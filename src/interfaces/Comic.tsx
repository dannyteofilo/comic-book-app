import { itemComicInterface } from "./ItemComic";
export interface comicInterface {
  error: string;
  limit: number;
  offset: number;
  number_of_page_results: number;
  number_of_total_results: number;
  status_code: number;
  results: Array<itemComicInterface>;
  version: string;
}
