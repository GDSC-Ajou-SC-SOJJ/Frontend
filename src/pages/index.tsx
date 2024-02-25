import Head from 'next/head';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
import React from 'react';
import MainBG from '@/assets/main-bgimage.svg';
import GoogleIcon from '@/assets/icons/GoogleIcon.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MainFlagIcon from '@/assets/icons/MainFlagIcon.svg';

const Main = styled.main`
  background-color: #0b0b10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

const TitleText = styled.h1`
  color: ${(p) => p.theme.colors.green};
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Aldrich;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;

const SubtitleText = styled.h2`
  color: ${(p) => p.theme.colors.white};
  font-family: Nunito;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: left;
`;

const ButtonConainer = styled.div`
  display: flex;
  height: 6vh;
  gap: 3vw;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoogleBtn = styled.button`
  flex: 1;
  border-radius: 3vh;
  border: 0;
`;

const StartBtn = styled.button`
  flex: 4;
  border-radius: 3vh;
  border: 0;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>SignSee</title>
        <meta name="description" content="" />
        <meta property="og:title" content="SignSee" />
        <meta property="og:description" content="SignSee" />
      </Head>
      <Main>
        <TitleContainer>
          <TitleText>SignSee</TitleText>
          <SubtitleText>
            No language barrier
            <br />
            for everyone
          </SubtitleText>
        </TitleContainer>
        <FlagContainer>
          <Image src={MainFlagIcon} alt="" />
        </FlagContainer>
        <BottomContainer>
          <BackgroundWrapper>
            <Image src={MainBG} alt="bg" />
          </BackgroundWrapper>
          <ButtonConainer>
            <GoogleBtn>
              <Image src={GoogleIcon} alt="google" />
            </GoogleBtn>
            <StartBtn onClick={() => router.push('/login')}>
              Get Started
            </StartBtn>
          </ButtonConainer>
        </BottomContainer>
      </Main>
    </Layout>
  );
}
