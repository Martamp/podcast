import React from 'react';

import { ImageStyled, TextStyled, PodcastWrapper, SubtitleStyled, InformationWrapper, DescriptionStyled, LinkStyled } from './PodcastDetail.styled.ts';
import { FunctionType } from '../../context/Podcast.context.js';
import { CurrentPodcastType } from '../../types/types.ts';

type EntryType = {
  currentPodcast: CurrentPodcastType;
  setCurrentTrack: FunctionType;
};

export const PodcastDetail = ({ currentPodcast, setCurrentTrack }: EntryType): JSX.Element => (
  <PodcastWrapper>
    <LinkStyled to={`/podcast/${currentPodcast.id}`} onClick={() => setCurrentTrack(null)}>
      <ImageStyled src={currentPodcast.image} alt={currentPodcast.title} />
      <InformationWrapper>
        <TextStyled>{currentPodcast.title}</TextStyled>
        <em>by {currentPodcast.author}</em>
      </InformationWrapper>
    </LinkStyled>
    <SubtitleStyled>Description:</SubtitleStyled>
    <DescriptionStyled>
      <em>{currentPodcast.summary}</em>
    </DescriptionStyled>
  </PodcastWrapper>
);
