// This component is responsible for rendering the YouTube trailer of a game. It takes a video ID as a prop and embeds the YouTube player using an iframe. The component is styled to be responsive and have rounded corners.
import { AspectRatio } from "@chakra-ui/react";
import FadeIn from "./FadeIn";

interface Props {
  videoId: string;
}

const YouTubeTrailer = ({ videoId }: Props) => {
  return (
    <FadeIn>
    <AspectRatio
      ratio={16 / 9}
      width="100%"
      borderRadius="8px"
      overflow="hidden"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: "none" }}
      />
    </AspectRatio>
    </FadeIn>
  );
};

export default YouTubeTrailer;

