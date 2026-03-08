// Here we create a custom hook to fetch the YouTube trailer for a given game name using the YouTube Data API v3. We use React Query to manage the data fetching and caching, and Axios to make the HTTP request. The hook takes a game name as input and returns the video ID of the official trailer, or null if not found.
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
if (!YOUTUBE_API_KEY) {
  throw new Error("Missing VITE_YOUTUBE_API_KEY");
}

interface YouTubeSearchItem {
  id: {
    videoId?: string;
  };
}

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
}

const useYouTubeTrailer = (gameName: string | undefined) => {
  return useQuery({
    queryKey: ["youtubeTrailer", gameName],
    enabled: !!gameName,
    queryFn: async () => {
      const res = await axios.get<YouTubeSearchResponse>(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: YOUTUBE_API_KEY,
            part: "snippet",
            q: `${gameName} official trailer`,
            type: "video",
            maxResults: 1,
          },
        },
      );

      const videoId = res.data.items?.[0]?.id?.videoId;
      return videoId || null;
    },
  });
};

export default useYouTubeTrailer;

