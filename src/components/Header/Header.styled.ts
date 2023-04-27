import styled from 'styled-components';

const titleColor = '#347d96';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 2rem;
  border: 1px solid #f4f4f4;
  border-width: 0 0 1px 0;
`;

export const TitleStyled = styled.h1`
  color: ${titleColor};
  font-weight: 600;
`;

export const LoadingStyled = styled.div`
  background-color: ${titleColor};
  border: 0.25rem solid #add8e6;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
`;
