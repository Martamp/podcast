import React from 'react';

import { ImageStyled, TextStyled, PodcastWrapper, SubtitleStyled, InformationWrapper, DescriptionStyled, LinkStyled } from './PodcastDetail.styled.ts';
import { FunctionType } from '../../context/Podcast.context.js';

type EntryType = {
  currentPodcast: { image: string; title: string; summary: string; author: string; id: string };
  setCurrentTrack: FunctionType;
};

export const PodcastDetail = ({ currentPodcast, setCurrentTrack }: EntryType) => (
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
