import type Platform from "@/entities/Platform";
import type Genre from "./Genre";
import type Publisher from "./Publisher";

export default interface Game {
  background_image: string;
  
  id: number;
  name: string;
  slug: string;

  genres: Genre[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;

  description_raw: string;
  released: string;
  playtime: number;
  rating_top: number;
  reviews_count: number;
  
  publishers: Publisher[];
  developers: { id: number; name: string }[];
  
  esrb_rating: { id: number; name: string } | null;
}
