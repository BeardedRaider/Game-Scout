import { axiosInstance, type FetchResponse } from "@/services/api-client";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import type { Platform } from "../entities/Platform";
const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      axiosInstance
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: ms("24h"), // 24 hr time to keep data fresh
    initialData: platforms,
  });

export default usePlatforms;

