import video1 from "./assets/account-owners.mov";
import * as S from "./home.styles";
import Media from "@enact/ui/Media";
import { MediaControls } from "@enact/sandstone/MediaPlayer";
import VideoPlayer from "@enact/sandstone/VideoPlayer";
import { VideoPlayerBase } from "@enact/sandstone/VideoPlayer";

import Button from "@enact/ui/Button";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../router/paths/path.routes";

export const Home = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(Paths.SEARCH);
  };

  return (
    <S.HomeContainer>
      {/* <video controls src="http://media.w3.org/2010/05/sintel/trailer.mp4"></video> */}
      {/* <MediaControls
        mediaComponent="video"
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
        alt="Example"
        controls
      /> */}
      {/* <VideoPlayer title="MB Demo" src="http://media.w3.org/2010/05/sintel/trailer.mp4"></VideoPlayer> */}
      {/* <VideoPlayerBase
        title="Title Example"
        onBack={handleGoBack}
        src="http://media.w3.org/2010/05/sintel/trailer.mp4"
      ></VideoPlayerBase> */}
    </S.HomeContainer>
  );
};
