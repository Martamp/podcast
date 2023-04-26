import styled from 'styled-components';

export const ImageStyled = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -75px;
`;
export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 5px #d5d5d5;
  width: 250px;
  gap: 20px;
  padding: 0 20px 20px;
  margin: 0 10px 10px;
`;

export const CardWrapper = styled.li`
  padding: 75px 0 20px;
  list-style: none;
`;

export const TextStyled = styled.p`
  margin: 0;
  text-align: center;
`;
