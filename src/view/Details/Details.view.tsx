import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UseAsyncInformation } from '../../hooks/useAsyncInformation.ts';
import PodcastContext from '../../context/Podcast.context.tsx';
import { PodcastDetail } from '../../components/PodcastDetail/PodcastDetail.tsx';
import { TrackList } from '../../components/TrackList/TrackList.tsx';
import { OverviewStyled } from './Details.styled.ts';
import { TrackDetail } from '../../components/TrackDetail/TrackDetail.tsx';

export const DetailsView = (): JSX.Element => {
  const { id } = useParams();
  const { getPodcastDetail } = UseAsyncInformation();
  const { currentPodcast, podcastDetail, currentTrack, setCurrentTrack, loading } = useContext(PodcastContext);

  useEffect(() => {
    if (id !== podcastDetail?.id) {
      getPodcastDetail(id);
    }
    setCurrentTrack(null);
  }, [id]);

  return (
    <>
      {podcastDetail && !loading && (
        <OverviewStyled>
          <PodcastDetail currentPodcast={currentPodcast} setCurrentTrack={setCurrentTrack} />
          {currentTrack ? <TrackDetail currentTrack={currentTrack} /> : <TrackList trackList={podcastDetail} id={id} />}
        </OverviewStyled>
      )}
    </>
  );
};
