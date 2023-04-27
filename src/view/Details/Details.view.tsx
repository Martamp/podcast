import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UseAsyncInformation } from '../../hooks/useAsyncInformation.ts';
import PodcastContext from '../../context/Podcast.context.tsx';
import { PodcastDetail } from '../../components/PodcastDetail/PodcastDetail.tsx';
import { TrackList } from '../../components/TrackList/TrackList.tsx';
import { OverviewStyled } from './Details.styled.ts';
import { TrackDetail } from '../../components/TrackDetail/TrackDetail.tsx';

export const DetailsView = () => {
  const { id } = useParams();
  const { getPodcastDetail } = UseAsyncInformation();
  const { currentPodcast, podcastDetail, currentTrack } = useContext(PodcastContext);

  useEffect(() => {
    if (id !== podcastDetail?.id) {
      getPodcastDetail(id);
    }
  }, [id]);

  return (
    <>
      {podcastDetail && (
        <OverviewStyled>
          <PodcastDetail currentPodcast={currentPodcast} />
          {currentTrack ? <TrackDetail currentTrack={currentTrack} /> : <TrackList trackList={podcastDetail} id={id} />}
        </OverviewStyled>
      )}
    </>
  );
};
