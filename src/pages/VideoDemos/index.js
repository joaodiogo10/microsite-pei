import { lazy } from "react";
import ReactPlayer from 'react-player'

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const videos = [
    { title: "Mudança linguagem android", url: "android-language.mp4" },
    { title: "Enviar DENM android", url: "android-send-denm.mp4" },
    { title: "Enviar receber DENM android", url: "android-recv-denm.mp4" },
    { title: "Mudança linguagem iOS", url: "iphone-language.mp4" },
    { title: "Enviar receber DENM iOS", url: "iphone-recv-denm.mp4" },
    { title: "Enviar DENM iOS", url: "iphone-send-denm.mp4" },
    { title: "Enviar DENM web", url: "browser-send-denm.mp4" },
    { title: "Receber DENM web (android) ", url: "browser-android-recv-denm.mp4" },
    { title: "Receber DENM web (iOS) ", url: "browser-iphone-recv-denm.mp4" },
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
              width: "33%",
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
