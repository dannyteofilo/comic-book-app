import { imageInterface } from "./Image";
import { volumeInterface } from "./Volume";
export interface itemComicInterface {
  aliases: string;
  api_detail_url: string;
  cover_date: string;
  date_added: string;
  date_last_updated: string;
  deck: string;
  description: string;
  has_staff_review: false;
  id: number;
  image: imageInterface;
  issue_number: string;
  name: string;
  site_detail_url: string;
  store_date: string;
  volume: volumeInterface;
}
