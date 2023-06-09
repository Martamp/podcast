import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageStyled = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  justify-self: center;
  align-self: center;
`;

export const TextStyled = styled.h3`
  margin: 0;
`;
export const SubtitleStyled = styled.h4`
  margin: 0;
`;

export const InformationWrapper = styled.p`
  margin: 20px 0;
  text-align: left;
  border: 1px solid grey;
  border-width: 1px 0 1px;
  padding: 20px 0;
  width: 100%;
`;

export const PodcastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  height: fit-content;
  padding: 20px;
  box-shadow: 0 0 10px 5px #d5d5d5;
  border-radius: 8px;
  flex-grow: 1;
`;

export const DescriptionStyled = styled.p`
  word-wrap: break-word;
  margin: 8px 0 0;
`;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
`;
