import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ImageStyled, TextStyled } from './PodcastDetail.styled.ts';
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
      <div>
        <ImageStyled />
        <div>
          <TextStyled>{currentPodcast.title}</TextStyled>
          <TextStyled>{currentPodcast.author}</TextStyled>
        </div>
        <p>{currentPodcast.summary}</p>
      </div>
    )
  );
};
