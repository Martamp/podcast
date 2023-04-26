import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PodcastContext from '../../context/Podcast.context.tsx';
import { ImageStyled, CardWrapper, CardText, TextStyled } from './Card.styled.ts';
import { PodcastDetail } from '../PodcastDetail/PodcastDetail.js';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};

export const Card = ({ entry }: EntryType) => {
  const { setCurrentPodcast, currentPodcast } = useContext(PodcastContext);
  const handlePodcastId = () => entry.id !== currentPodcast && setCurrentPodcast(entry);

  return (
    <CardWrapper key={entry.id}>
      <Link to={`/podcast/${entry.id}`} onClick={handlePodcastId}>
        <CardText>
          <ImageStyled src={entry.image} alt={entry.title} />
          <TextStyled> {entry.title} </TextStyled>
          <TextStyled> {entry.author} </TextStyled>
        </CardText>
      </Link>
    </CardWrapper>
  );
};
