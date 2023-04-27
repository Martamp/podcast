import { useContext } from 'react';
import { parsedData, mapPodcastDetail } from '../utils/Podcast.utils.tsx';
import PodcastContext from '../context/Podcast.context.tsx';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../utils/LocalStorage.utils.tsx';

export const UseAsyncInformation = () => {
  const { setData, setPodcastDetail, setError } = useContext(PodcastContext);

  const getPodcastList = async () => {
    const cachedData = getDataFromLocalStorage('podcastList', 24);
    if (cachedData) {
      setData(cachedData);
      return;
    }

    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then((response) => response.json())
      .then((data) => {
        setData(parsedData(data.feed.entry));
        saveDataToLocalStorage('podcastList', parsedData(data.feed.entry));
      })
      .catch((err: any) => {
        setError(err);
        console.log('Ha habido un error: ', err);
      });
  };

  const getPodcastDetail = async (id: string) => {
    const cachedData = getDataFromLocalStorage(`podcastDetail-${id}`, 24);
    if (cachedData) {
      setPodcastDetail(cachedData);
      return;
    }

    await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=20`)}`)
      .then((response) => response?.json())
      .then((data) => {
        const mappedData = mapPodcastDetail(data);
        setPodcastDetail(mappedData);
        saveDataToLocalStorage(`podcastDetail-${id}`, mappedData);
      })
      .catch((error) => console.error(error));
  };

  return {
    getPodcastList,
    getPodcastDetail,
  };
};
