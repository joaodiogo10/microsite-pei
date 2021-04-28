import { Row } from "antd";
import { lazy } from "react";
import ReactPlayer from 'react-player'

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  const videos = [
    { title: "test", url: "video/test.mp4", key: 1 },
    { title: "test", url: "video/test.mp4", key: 1 },
    { title: "test", url: "video/test.mp4", key: 1 },
    { title: "test", url: "video/test.mp4", key: 1 },
  ];
  return (
    <Container>
      <ScrollToTop />
      {videos.map((video) => {
        return (
            <Container style={styles.centeredDiv} >
              <Row style={styles.centeredDiv}>
                <h1>{video.title}</h1>
              </Row>
              <Row style={styles.centeredDiv}>
                <ReactPlayer url={video.url} controls={true} />
              </Row>
          </Container>
        )
      })}
    </Container>
  );
};

const styles = {
  centeredDiv: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"

  }
};

export default Home;
