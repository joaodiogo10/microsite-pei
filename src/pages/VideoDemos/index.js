import { lazy } from "react";
import ReactPlayer from 'react-player'

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const videos = [
    { title: "Uma DENM a aparecer (iPhone)", url: "video/iphone-denm-appearing.mp4" },
    { title: "Auto-estrada com DENM (iPhone)", url: "video/iphone-highway-with-denm.mp4" },
    { title: "Alterar o idioma (iPhone)", url: "video/iphone-laguage-switching.mp4" },
    { title: "Enviar DENM (iPhone)", url: "video/iphone-send-denm.mp4" },
    { title: "DENM enviada por um iPhone (Browser)", url: "video/browser-iphone-recv-denm.mp4" },
    { title: "Enviar DENM (Browser)", url: "video/browser-send-denm.mp4" },
  ];
  return (
    <>
      <div id="intro"></div>
      <ScrollToTop />
      <div style={{ display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
        {videos.map((item, index) => {
          return (
            <div key={index} style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <h1 style={{ paddingTop: 100, textAlign: "center", paddingLeft: 5, paddingRight: 5 }}>{item.title}</h1>
              <ReactPlayer url={item.url} controls={true} style={{ paddingBottom: 40, maxHeight: 750 }} width="75%" height="100%" />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Home;
