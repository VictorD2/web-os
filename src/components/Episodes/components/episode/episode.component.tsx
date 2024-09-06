import MediaOverlay from "@enact/sandstone/MediaOverlay";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../../../router/paths/path.routes";

export const Episode = ({ index }: { index: number }) => {
  const navigate = useNavigate();
  const [imageOverlay, setImageOverlay] = useState(
    "https://random.imagecdn.app/500/150"
  );

  const handleGoToPlayer = () => {
    navigate(Paths.PLAYER);
  };

  return (
    <MediaOverlay
      key={index}
      onClick={handleGoToPlayer}
      muted
      imageOverlay={imageOverlay}
      noAutoPlay={Boolean(imageOverlay)}
      showProgress
      caption={`title ${index + 1}`}
      subtitle={`title ${index + 1}`}
    >
      <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" />
    </MediaOverlay>
  );
};
