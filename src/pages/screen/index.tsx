import Head from 'next/head';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import CameraIcon from '@/assets/icons/CameraIcon.svg';
import SettingIcon from '@/assets/icons/SettingIcon.svg';
import HandIcon from '@/assets/icons/HandIcon.svg';
import XIcon from '@/assets/icons/XIcon.svg';
import UpperArrowIcon from '@/assets/icons/UpperArrowIcon.svg';
import SoundIcon from '@/assets/icons/SoundIcon.svg';
import TranslateIcon from '@/assets/icons/TranslateIcon.svg';
import USAIcon from '@/assets/icons/USAIcon.svg';

const Main = styled.main`
  background-color: ${(p) => p.theme.colors.black100};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 9;
  gap: 1vh;
`;

const FriendScreenContainer = styled.div`
  border-radius: 3vh;
  background-color: ${(p) => p.theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex: 10;
`;

const SubtitleContainer = styled.div`
  border-radius: 5vh;
  display: flex;
  background-color: ${(p) => p.theme.colors.grey};
  justify-content: flex-end;
  align-items: center;
  padding: 0 2vw;
  flex: 1;
`;

const MyScreenContainer = styled.div`
  flex: 9;
  display: flex;
  gap: 1vh;
`;

const CamContainer = styled.div`
  border-radius: 3vh;
  background-color: ${(p) => p.theme.colors.grey};
  flex: 1;
  overflow: hidden;
  display: flex;

  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SignScreenContainer = styled.div`
  border-radius: 3vh;
  background-color: ${(p) => p.theme.colors.grey};
  flex: 1;
`;

const ToolbarContainer = styled.div`
  display: flex;
  background-color: transparent;
  flex: 1;
  gap: 3vw;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0;
  flex: 1;
  aspect-ratio: 1;
  background-color: ${(p) => p.theme.colors.grey};
`;

const NextBtn = styled(Btn)`
  background-color: #6bd05b;
`;

const EndBtn = styled(Btn)`
  background-color: #ff6868;
`;

const UpperRightContainer = styled.div`
  position: absolute;
  top: 5vh;
  right: 7vw;
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const CircleBtn = styled.button`
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  height: 25vh;
`;

const TitleText = styled.h1`
  color: ${(p) => p.theme.colors.green};
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Aldrich;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
`;

const SubtitleText = styled.h2`
  color: ${(p) => p.theme.colors.white};
  font-family: Aldrich;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  text-align: center;
`;

const NameContainer = styled.div`
  position: absolute;
  top: 5vh;
  left: 7vw;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 3vw;

  color: ${(p) => p.theme.colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3vh;
`;

const MyNameContainer = styled(NameContainer)`
  top: 52vh;

  min-width: 0;
  min-height: 4vh;
`;

const CamText = styled(SubtitleText)`
  font-size: 20px;
`;

const MyLangContainer = styled(UpperRightContainer)`
  top: 52vh;
`;

const DisableCamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const router = useRouter();
  const [disabled, setDisabled] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const enableCamera = async () => {
    try {
      setDisabled(false);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setDisabled(true);
    }
  };

  const disableCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
    setDisabled(true);
  };

  useEffect(() => {
    enableCamera();
  }, []);

  const toggleCamera = () => {
    if (disabled) {
      enableCamera();
    } else {
      disableCamera();
    }
  };

  return (
    <Layout>
      <Head>
        <title>SignSee</title>
        <meta name="description" content="" />
        <meta property="og:title" content="SignSee" />
        <meta property="og:description" content="SignSee" />
      </Head>
      <Main>
        <ScreenContainer>
          <FriendScreenContainer>
            <NameContainer></NameContainer>
            <UpperRightContainer>
              <CircleBtn></CircleBtn>
              <CircleBtn>
                <Image src={SoundIcon} alt="" />
              </CircleBtn>
            </UpperRightContainer>
            <TitleContainer>
              <TitleText>Scroll!</TitleText>
              <SubtitleText>
                and
                <br />
                Meet your global friends
              </SubtitleText>
            </TitleContainer>
          </FriendScreenContainer>
          <SubtitleContainer>
            <Image src={TranslateIcon} alt="" />
          </SubtitleContainer>
          <MyScreenContainer>
            <CamContainer>
              <MyNameContainer>Name</MyNameContainer>
              {disabled ? (
                <CamText>Enable camera</CamText>
              ) : (
                <video ref={videoRef} autoPlay playsInline />
              )}
            </CamContainer>
            <SignScreenContainer>
              <MyLangContainer>
                <CircleBtn>
                  <Image src={USAIcon} alt="" />
                </CircleBtn>
              </MyLangContainer>
            </SignScreenContainer>
          </MyScreenContainer>
        </ScreenContainer>
        <ToolbarContainer>
          <Btn onClick={toggleCamera}>
            <Image src={CameraIcon} alt="" />
          </Btn>
          <Btn>
            <Image src={SettingIcon} alt="" />
          </Btn>
          <NextBtn>
            <Image src={UpperArrowIcon} alt="" />
          </NextBtn>
          <Btn>
            <Image src={HandIcon} alt="" />
          </Btn>
          <EndBtn onClick={() => router.push('/')}>
            <Image src={XIcon} alt="" />
          </EndBtn>
        </ToolbarContainer>
      </Main>
    </Layout>
  );
}
