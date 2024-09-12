import { VideoPlayerBase } from "@enact/sandstone/VideoPlayer";
import { useNavigate } from "react-router-dom";
import Hls from "hls.js";
import dashjs from "dashjs";

import { useEffect } from "react";

export const Player = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // const src =
  //   "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
  const src =
    "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";

  // useEffect(() => {
  //   const videoRef: HTMLElement | null =
  //     document.getElementById("video-player");
  //   const videoElement = videoRef as HTMLVideoElement;
  //   if (videoElement) {
  //     // Verificar si el navegador soporta HLS
  //     if (Hls.isSupported()) {
  //       const hls = new Hls();
  //       hls.loadSource(src);
  //       hls.attachMedia(videoElement);
  //       hls.on(Hls.Events.MANIFEST_PARSED, () => {
  //         videoElement.play();
  //       });

  //       return () => {
  //         hls.destroy(); // Limpiar el HLS al desmontar el componente
  //       };
  //     } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
  //       // Fallback para navegadores con soporte nativo de HLS (ej. Safari)
  //       videoElement.src = src;
  //       videoElement.addEventListener("loadedmetadata", () => {
  //         videoElement.play();
  //       });
  //     }
  //   }
  // }, [src]);

  useEffect(() => {
    const videoRef: HTMLElement | null =
      document.getElementById("video-player");
    const videoElement = videoRef as HTMLVideoElement;
    const player = dashjs.MediaPlayer().create();
    player.initialize(videoElement, src, true);

    // Limpiar el player cuando el componente se desmonte
    return () => {
      player.reset();
    };
  }, [src]);

  return (
    <VideoPlayerBase
      id="video-player"
      // src="https://nmcdn-lds.msvdn.net/icecastRelay/101156/GvaVK70/icecast?rnd=637109878513586401" //Audio
      // src="https://media2.ldscdn.org/assets/music/the-power-of-sacred-music/2020-01-0050-sacred-music-videos-my-redeemer-lives-720p-eng.mp4" //Video
      title="Title Example"
      onBack={handleGoBack}
    ></VideoPlayerBase>
  );
};
