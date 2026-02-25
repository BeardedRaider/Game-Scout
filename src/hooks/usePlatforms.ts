import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import platformsData from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: string | null;
    year_start: number | null;
    year_end: number | null;
  }[];
}

const usePlatforms = () =>
  useQuery<Platform[]>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Platform[]>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: platformsData, 
  });

export default usePlatforms;
