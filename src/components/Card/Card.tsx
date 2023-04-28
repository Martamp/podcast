import React, { useContext } from 'react';
import PodcastContext from '../../context/Podcast.context.tsx';
import { ImageStyled, CardWrapper, CardText, TextStyled, LinkStyled, AuthorStyled } from './Card.styled.ts';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};
type HandlerType = () => void;

export const Card = ({ entry }: EntryType): JSX.Element => {
  const { setCurrentPodcast, currentPodcast } = useContext(PodcastContext);
  const handlePodcastId: HandlerType = () => entry.id !== currentPodcast && setCurrentPodcast(entry);

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
