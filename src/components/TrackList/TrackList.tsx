import React from 'react';
import { Link } from 'react-router-dom';
import { TitleStyled, TitleWrapper, TrackListStyled, TableWrapper, TrackElementStyled, TableColumnTitleStyled, TableContent } from './TrackList.styled.ts';
import { formatDate, formatDuration, capitalizeText } from '../../utils/Podcast.utils.ts';

type PropsType = {
  trackList: [{ title: string; summary: string; author: string; id: string; releaseDate: string; time: string }];
};

export const TrackList = ({ trackList }: PropsType) => {
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
            {trackList?.map((track) => (
              <tr>
                <TrackElementStyled>
                  <Link to="">{capitalizeText(track.title)}</Link>
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
