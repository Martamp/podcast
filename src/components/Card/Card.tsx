import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PodcastContext from '../../context/Podcast.context.tsx';
import { ImageStyled, CardWrapper, CardText, TextStyled } from './Card.styled.ts';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};

export const Card = ({ entry }: EntryType) => {
  const { setCurrentPodcast } = useContext(PodcastContext);
  return (
    <CardWrapper key={entry.id}>
      <Link to={`/podcast/${entry.id}`} onClick={setCurrentPodcast(entry)}>
        <CardText>
          <ImageStyled src={entry.image} alt={entry.title} />
          <TextStyled> {entry.title} </TextStyled>
          <TextStyled> {entry.author} </TextStyled>
        </CardText>
      </Link>
    </CardWrapper>
  );
};
