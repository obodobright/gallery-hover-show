import React from "react";
import styled from "styled-components";
import video from "./vid.mp4";

const VideoPage = () => {
  return (
    <Container id="videopage">
      <WrapperVideo src={video} controls autoplay loop></WrapperVideo>
    </Container>
  );
};
export default VideoPage;

const Container = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
const WrapperVideo = styled.video`
  width: 90%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  border: 6px solid #00008b;
  border-radius: 5px;
`;
