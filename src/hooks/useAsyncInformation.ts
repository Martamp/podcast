import { useState } from 'react';
import { parsedData } from '../utils/Podcast.utils.ts';

export const UseAsyncInformation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const getApiData = () => {
    return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit/=100/genre=1310/json')
      .then((response) => response.json())
      .then((data) => setData(parsedData(data.feed.entry)))
      .catch((err: any) => {
        setError(err);
        console.log('Ha habido un error: ', err);
      });
  };

  return {
    call: getApiData,
    error,
    data,
    loading: data === null && !error,
  };
};
