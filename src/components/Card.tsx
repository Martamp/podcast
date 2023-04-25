import React from 'react';
import { Link } from 'react-router-dom';
import { ImageStyled, CardWrapper, CardText, TextStyled } from './Card.styled.ts';

type EntryType = {
  entry: { image: string; title: string; summary: string; author: string; id: string };
};

export const Card = ({ entry }: EntryType) => (
  <CardWrapper key={entry.id}>
    <Link to={`/podcast/${entry.id}`}>
      <CardText>
        <ImageStyled src={entry.image} alt={entry.title} />
        <TextStyled> {entry.title} </TextStyled>
        <TextStyled> {entry.author} </TextStyled>
      </CardText>
    </Link>
  </CardWrapper>
);
