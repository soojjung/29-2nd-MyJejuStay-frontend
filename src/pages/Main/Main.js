import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  // const [MainVideo, SetMainVideo] = useState([]);

  // useEffect(() => {
  //   fetch('http://10.58.2.82:8000/mainpage')
  //     .then(res => res.json())
  //     .then(data => SetMainVideo(data));
  // }, []);

  // console.log(MainVideo);

  // console.log(MainVideo.mainvideo);

  return (
    <MainSection>
      <MainVideo autoPlay muted loop>
        <source src="https://myjejustay.s3.ap-northeast-2.amazonaws.com/MyJejuStay.mp4" />
      </MainVideo>
      {/* <video width="100%" height="100%" autoPlay muted loop>
        <source src={MainVideo.mainvideo} />
      </video> */}

      <MainContents>
        <MainHeader>당신의 쉼은 어디에 있나요?</MainHeader>
        <MainContetsBox>
          <MainItem>
            <MainLink to="/Productlist?themaGroup=해변">
              <MainLinkTitle>Ocean</MainLinkTitle>
            </MainLink>
          </MainItem>
          <MainItem>
            <MainLink to="/Productlist?themaGroup=숲">
              <MainLinkTitle>Forest</MainLinkTitle>
            </MainLink>
          </MainItem>
          <MainItem>
            <MainLink to="/Productlist?themaGroup=도심">
              <MainLinkTitle>City</MainLinkTitle>
            </MainLink>
          </MainItem>
        </MainContetsBox>
      </MainContents>
    </MainSection>
  );
};

const MainSection = styled.section`
  width: 100%;
  height: 100%;
`;

const MainVideo = styled.video`
  margin-top: 60px;
  width: 100%;
  height: 100%;
`;

const MainContents = styled.div`
  display: flex;
  position: absolute;
  bottom: 30%;
  left: 25%;
  /* background-color: orange; */
  display: flex;
  text-align: center;
  align-content: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  width: 50%;
  height: 20%;
`;

const MainHeader = styled.h1`
  color: white;
  font-family: 'IBM Plex Sans KR', sans-serif;
  font-size: 50px;
  font-weight: 200;
  text-align: center;
  &:hover {
    font-weight: 300;
  }
`;

const MainContetsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  justify-content: space-around;
`;

const MainItem = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  margin: 20px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid white;
  align-items: center;
  justify-content: space-around;
  &:hover {
    background-color: white;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const MainLink = styled(Link)`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

const MainLinkTitle = styled.div`
  font-size: 30px;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  align-items: center;
  color: white;
  &:hover {
    font-weight: 400;
  }
`;

export default Main;
