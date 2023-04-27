import React, { useEffect, useState, useContext } from 'react';
import PodcastContext from '../../context/Podcast.context.tsx';
import { Card } from '../../components/Card/Card.tsx';
import { CounterStyled, SectionStyled, ListStyled, InputStyled } from './Landing.styled.ts';
import { UseAsyncInformation } from '../../hooks/useAsyncInformation.ts';

function App() {
  const { getPodcastList } = UseAsyncInformation();
  const { data } = useContext(PodcastContext);
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
    <div>
      <main>
        <SectionStyled>
          <CounterStyled>{podcasts?.length}</CounterStyled>
          <InputStyled type="text" placeholder="Filter podcasts..." onChange={handleFilter} />
        </SectionStyled>
        <ListStyled>
          {podcasts?.map((item, i) => (
            <Card entry={item} key={i} />
          ))}
        </ListStyled>
      </main>
    </div>
  );
}

export default App;
