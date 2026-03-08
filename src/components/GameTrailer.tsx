import useTrailers from "@/hooks/useTrailers";
import useYouTubeTrailer from "@/hooks/useYouTubeTrailer";
import { AspectRatio } from "@chakra-ui/react";
import FadeIn from "./FadeIn";
import TrailerSkeleton from "./TrailerSkeleton";
import YouTubeTrailer from "./YouTubeTrailer";
import BlurredPoster from "./BlurredPoster";
import { useState } from "react";

interface Props {
  gameId: number;
  gameName: string;
}

const GameTrailer = ({ gameId, gameName }: Props) => {
  const { data: trailerData, isLoading: rawgLoading } = useTrailers(gameId);
  const { data: youtubeId, isLoading: ytLoading } = useYouTubeTrailer(gameName);

  const rawgTrailer = trailerData?.results?.[0];

  // ❗ Hook must be here, not inside the if()
  const [loaded, setLoaded] = useState(false);

  // RAWG loading → skeleton
  if (rawgLoading) return <TrailerSkeleton />;

  // RAWG trailer exists
  if (rawgTrailer) {
    return (
      <>
        {!loaded && <BlurredPoster poster={rawgTrailer.preview} />}

        <FadeIn>
          <AspectRatio
            ratio={16 / 9}
            width="100%"
            borderRadius="8px"
            overflow="hidden"
            style={{ display: loaded ? "block" : "none" }}
          >
            <video
              src={rawgTrailer.data.max}
              poster={rawgTrailer.preview}
              controls
              onLoadedData={() => setLoaded(true)}
              style={{ width: "100%", height: "100%" }}
            />
          </AspectRatio>
        </FadeIn>
      </>
    );
  }

  // RAWG missing → YouTube loading → skeleton
  if (ytLoading) return <TrailerSkeleton />;

  // YouTube trailer exists
  if (youtubeId) return <YouTubeTrailer videoId={youtubeId} />;

  // Nothing available
  return <p>Trailer not available</p>;
};

export default GameTrailer;
