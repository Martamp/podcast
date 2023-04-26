import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { parsedData, mapPodcastDetail } from '../utils/Podcast.utils.ts';

export const UseAsyncInformation = () => {
  const [data, setData] = useState(null);
  const [podcastDetail, setPodcastDetail] = useState(null);
  const [error, setError] = useState(false);

  const getPodcastList = async () => {
    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit/=100/genre=1310/json')
      .then((response) => response.json())
      .then((data) => setData(parsedData(data.feed.entry)))
      .catch((err: any) => {
        setError(err);
        console.log('Ha habido un error: ', err);
      });
  };

  const getPodcastDetail = async (id: string) => {
    await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=20`)}`)
      .then((response) => response?.json())
      .then((data) => setPodcastDetail(mapPodcastDetail(data)))
      .catch((error) => console.error(error));
  };

  return {
    getPodcastList,
    getPodcastDetail,
    data,
    podcastDetail,
    loading: (data === null && !error) || (podcastDetail === null && !error),
  };
};
