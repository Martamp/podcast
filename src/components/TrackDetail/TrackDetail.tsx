import React from 'react';

import { TrackWrapper, DescriptionStyled } from './TrackDetail.styled.ts';
import { renderTextWithLinks } from '../../utils/Podcast.utils.tsx';

export const TrackDetail = ({ currentTrack }) => {
  return (
    <TrackWrapper>
      <h2>{currentTrack.title}</h2>
      <DescriptionStyled>
        <em>{renderTextWithLinks(currentTrack.summary)}</em>
      </DescriptionStyled>
      <audio src={currentTrack.track} controls={true} />
    </TrackWrapper>
  );
};
