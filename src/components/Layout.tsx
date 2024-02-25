import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import MaxWidth from './MaxWidth';

const StyledLayout = styled(MaxWidth)`
  position: relative;
  margin: auto auto;
  background-color: ${(p) => p.theme.colors.black100};
  height: 100vh;
  max-width: 768px;
  padding: 20px 20px;

  & > section {
    overflow-x: hidden;
  }
`;

interface Props {
  children: ReactNode;
}

type Lang = 'en' | 'ko';

export default function Layout({ children }: Props) {
  return <StyledLayout>{children}</StyledLayout>;
}
