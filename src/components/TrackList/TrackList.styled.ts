import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: inline-block;
`;

export const TitleStyled = styled.h2`
  display: inline-block;
  padding-left: 20px;
`;

export const TitleWrapper = styled.div`
  box-shadow: 0 0 10px 5px #d5d5d5;
  margin-bottom: 20px;
`;

export const TrackListStyled = styled.div`
  width: 70%;
  margin-left: 20px;
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 0 20px;

  th:nth-child(1) {
    width: 70%;
  }

  td:nth-child(2),
  td:nth-child(3) {
    width: 15%;
  }

  tr:nth-of-type(even) {
    background: #f4f4f4;
    border: 1px solid #f4f4f4;
    border-width: 1px 0 1px;
  }
`;

export const TableContent = styled.table`
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 10px 5px #d5d5d5;
`;

export const TrackElementStyled = styled.td`
  padding: 10px 0;

  td:nth-child(1) {
    padding: 10px;
  }
`;

export const TableColumnTitleStyled = styled.tr`
  text-align: left;
  background-color: white;
`;
