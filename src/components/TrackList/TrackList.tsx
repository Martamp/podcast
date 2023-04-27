import React, { useContext } from 'react';
import { TitleStyled, TitleWrapper, TrackListStyled, TableWrapper, TrackElementStyled, TableColumnTitleStyled, TableContent, LinkStyled } from './TrackList.styled.ts';
import { formatDate, formatDuration, capitalizeText } from '../../utils/Podcast.utils.tsx';
import { PodcastContext } from '../../context/Podcast.context.tsx';

type PropsType = {
  trackList: [{ title: string; summary: string; author: string; id: string; releaseDate: string; time: string }];
  id: string;
};

export const TrackList = ({ trackList, id }: PropsType) => {
  const { setCurrentTrack } = useContext(PodcastContext);

  const handleNavigation = (id, track) => {
    setCurrentTrack(track);
    window.history.pushState({}, null, `/podcast/${id}/episode/${track.id}`);
  };

  return (
    <TrackListStyled>
      <TitleWrapper>
        <TitleStyled>Episodes: {trackList.length} </TitleStyled>
      </TitleWrapper>
      <TableContent>
        <TableWrapper>
          <thead>
            <TableColumnTitleStyled>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </TableColumnTitleStyled>
          </thead>
          <tbody>
            {trackList?.map((track, i) => (
              <tr key={i}>
                <TrackElementStyled>
                  <LinkStyled onClick={() => handleNavigation(id, track)}>{capitalizeText(track.title)}</LinkStyled>
                </TrackElementStyled>
                <TrackElementStyled>{formatDate(track.releaseDate)}</TrackElementStyled>
                <TrackElementStyled>{formatDuration(track.time)}</TrackElementStyled>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </TableContent>
    </TrackListStyled>
  );
};
