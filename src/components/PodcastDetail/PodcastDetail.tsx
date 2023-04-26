import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ImageStyled, TextStyled } from './PodcastDetail.styled.ts';
import { UseAsyncInformation } from '../../hooks/useAsyncInformation.ts';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};

export const PodcastDetail = ({ entry }: EntryType) => {
  const { id } = useParams();
  const { getPodcastDetail, podcastDetail, loading, data } = UseAsyncInformation();

  useEffect(() => {
    if (id !== podcastDetail?.id) {
      getPodcastDetail(id);
    }
  }, [id, podcastDetail]);
  console.log(data);
  return (
    podcastDetail && (
      <div>
        <ImageStyled />
        <div>
          <TextStyled>{podcastDetail[0]?.title}</TextStyled>
          <TextStyled>Aut</TextStyled>
        </div>
        <p>Descrip</p>
      </div>
    )
  );
};
