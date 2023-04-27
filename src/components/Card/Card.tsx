import React, { useContext } from 'react';
import PodcastContext from '../../context/Podcast.context.tsx';
import { ImageStyled, CardWrapper, CardText, TextStyled, LinkStyled, AuthorStyled } from './Card.styled.ts';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};

export const Card = ({ entry }: EntryType) => {
  const { setCurrentPodcast, currentPodcast } = useContext(PodcastContext);
  const handlePodcastId = () => entry.id !== currentPodcast && setCurrentPodcast(entry);

  return (
    <CardWrapper key={entry.id}>
      <LinkStyled to={`/podcast/${entry.id}`} onClick={handlePodcastId}>
        <CardText>
          <ImageStyled src={entry.image} alt={entry.title} />
          <TextStyled> {entry.title.toUpperCase()} </TextStyled>
          <AuthorStyled> {entry.author} </AuthorStyled>
        </CardText>
      </LinkStyled>
    </CardWrapper>
  );
};
