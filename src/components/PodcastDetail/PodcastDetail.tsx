import React from 'react';

import { ImageStyled, TextStyled, PodcastWrapper, SubtitleStyled, InformationWrapper, DescriptionStyled } from './PodcastDetail.styled.ts';

type EntryType = {
  currentPodcast: { image: string; title: string; summary: string; author: string; id: string };
};

export const PodcastDetail = ({ currentPodcast }: EntryType) => (
  <PodcastWrapper>
    <ImageStyled src={currentPodcast.image} alt={currentPodcast.title} />
    <InformationWrapper>
      <TextStyled>{currentPodcast.title}</TextStyled>
      <em>by {currentPodcast.author}</em>
    </InformationWrapper>
    <SubtitleStyled>Description:</SubtitleStyled>
    <DescriptionStyled>
      <em>{currentPodcast.summary}</em>
    </DescriptionStyled>
  </PodcastWrapper>
);
