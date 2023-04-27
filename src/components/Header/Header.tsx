import React, { useContext } from 'react';
import PodcastContext from '../../context/Podcast.context.tsx';

import { LoadingStyled, TitleStyled, HeaderStyled } from './Header.styled.ts';

export const Header = () => {
  const { loading } = useContext(PodcastContext);

  return (
    <div>
      <HeaderStyled>
        <TitleStyled>Podcaster</TitleStyled>
        {loading && <LoadingStyled />}
      </HeaderStyled>
    </div>
  );
};
