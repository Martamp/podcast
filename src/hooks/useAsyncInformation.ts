import { useState, useContext } from 'react';
import { parsedData, mapPodcastDetail } from '../utils/Podcast.utils.tsx';
import PodcastContext from '../context/Podcast.context.tsx';

export const UseAsyncInformation = () => {
  const { setData, setPodcastDetail, setError } = useContext(PodcastContext);

  const getPodcastList = async () => {
    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
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
  };
};
