import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PodcastContext from '../../context/Podcast.context.tsx';

import { LoadingStyled, TitleStyled, HeaderStyled } from './Header.styled.ts';

export const Header = () => {
  const { loading } = useContext(PodcastContext);

  return (
    <div>
      <HeaderStyled>
        <Link to={`/`}>
          <TitleStyled>Podcaster</TitleStyled>
        </Link>
        {loading && <LoadingStyled />}
      </HeaderStyled>
    </div>
  );
};
