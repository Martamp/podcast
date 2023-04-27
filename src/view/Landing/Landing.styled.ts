import styled from 'styled-components';

const titleColor = '#347d96';

export const CounterStyled = styled.p`
  display: inline;
  background-color: ${titleColor};
  padding: 0.25rem;
  font-weight: bold;
  color: white;
  border-radius: 15%;
`;

export const SectionStyled = styled.section`
  text-align: right;
  padding-right: 1.25rem;
`;

export const ListStyled = styled.ul`
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #f4f4f4;
  margin-left: 10px;
`;
