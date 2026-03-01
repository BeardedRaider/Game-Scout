// Define the Genre type based on RAWG's API response

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: { id: number; slug: string; name: string; added: number; }[];
}
