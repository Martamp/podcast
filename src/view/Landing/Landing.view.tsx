import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card.tsx';
import { LoadingStyled, TitleStyled, CounterStyled, HeaderStyled, SectionStyled, ListStyled } from './Landing.styled.ts';
import { UseAsyncInformation } from '../../hooks/useAsyncInformation.ts';

function App() {
  const { data, getPodcastList, loading } = UseAsyncInformation();
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    getPodcastList();
  }, []);

  const handleFilter = (ev) => {
    const matchedData = data?.filter((entry) => {
      const title = entry.title.toLowerCase();
      const description = entry.author.toLowerCase();
      const inputValue = ev.target.value.toLowerCase();

      return title.includes(inputValue) | description.includes(inputValue);
    });

    setFilteredData(matchedData);
  };
  const podcasts = filteredData?.length > 0 ? filteredData : data;

  return (
    <div className="App">
      <HeaderStyled>
        <TitleStyled>Podcaster</TitleStyled>
        {loading && <LoadingStyled />}
      </HeaderStyled>
      <main>
        <SectionStyled>
          <CounterStyled>{data?.length}</CounterStyled>
          <input type="text" placeholder="Filter podcasts..." onChange={handleFilter} />
        </SectionStyled>
        <ListStyled>
          {podcasts?.map((item) => (
            <Card entry={item} />
          ))}
        </ListStyled>
      </main>
    </div>
  );
}

export default App;
