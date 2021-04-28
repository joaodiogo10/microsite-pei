import { lazy } from "react";
import ReactPlayer from 'react-player'

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const videos = [
    { title: "test", url: "video/denm_appearing.mp4" },
    { title: "test", url: "video/highway_viith_denm.mp4" },
    { title: "test", url: "video/laguage_switching.mp4" },
    { title: "test", url: "video/send__denm_pc.mp4" },
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
              <h1>{item.title}</h1>
              <ReactPlayer url={item.url} controls={true} />
            </div>
          )
        })}
      </div>
    </>
  );
};

const styles = {
  centeredDiv: {
    display: "flex",
    justifyContent: "center"
  }
};

export default Home;
