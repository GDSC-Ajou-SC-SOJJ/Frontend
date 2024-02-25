import Head from 'next/head';
import Layout from '@/components/Layout';
import styled from '@emotion/styled';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LoginBGImage from '@/assets/image/LoginBGImage.svg';

const Main = styled.main`
  background-color: #0b0b10;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10vh;
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

const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const InputContainer = styled.input`
  background-color: rgba(255, 255, 255, 0.11);
  height: 6vh;
  border-radius: 3vh;
  padding: 0 5vw;
  border: 0;

  color: rgba(255, 255, 255, 0.6);
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LoginBtn = styled.button`
  background-color: ${(p) => p.theme.colors.green};
  height: 6vh;
  border-radius: 3vh;
  border: 0;
  margin: 0 2vw;

  color: ${(p) => p.theme.colors.black};
  font-family: Nunito;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
        <HeaderContainer>
          <TitleContainer>
            <TitleText>SignSee</TitleText>
            <SubtitleText>Login</SubtitleText>
          </TitleContainer>
          <Image src={LoginBGImage} alt="" />
        </HeaderContainer>
        <BottomContainer>
          <InputContainer placeholder={'Email'} />
          <InputContainer placeholder={'Password'} />
          <LoginBtn onClick={() => router.push('/screen')}>Login</LoginBtn>
        </BottomContainer>
      </Main>
    </Layout>
  );
}
