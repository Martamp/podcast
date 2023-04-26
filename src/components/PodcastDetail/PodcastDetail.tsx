import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ImageStyled, TextStyled, PodcastWrapper, SubtitleStyled, InformationWrapper, DescriptionStyled } from './PodcastDetail.styled.ts';
import { UseAsyncInformation } from '../../hooks/useAsyncInformation.ts';
import PodcastContext from '../../context/Podcast.context.tsx';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};

export const PodcastDetail = ({ entry }: EntryType) => {
  const { id } = useParams();
  const { getPodcastDetail } = UseAsyncInformation();
  const { currentPodcast, podcastDetail } = useContext(PodcastContext);

  useEffect(() => {
    if (id !== podcastDetail?.id) {
      getPodcastDetail(id);
    }
  }, [id, podcastDetail]);
  console.log(currentPodcast, podcastDetail);
  return (
    podcastDetail && (
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
    )
  );
};
