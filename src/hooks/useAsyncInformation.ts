import { useContext } from 'react';
import { parsedData, mapPodcastDetail } from '../utils/Podcast.utils.tsx';
import PodcastContext from '../context/Podcast.context.tsx';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../utils/LocalStorage.utils.tsx';

export const UseAsyncInformation = () => {
  const { setData, setPodcastDetail, setError, loading, setLoading } = useContext(PodcastContext);

  const getPodcastList = async () => {
    const cachedData = getDataFromLocalStorage('podcastList', 24);

    if (cachedData) {
      setData(cachedData);
      setLoading(false);
    }
    setLoading(true);

    await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then((response) => response.json())
      .then((data) => {
        setData(parsedData(data.feed.entry));
        saveDataToLocalStorage('podcastList', parsedData(data.feed.entry));
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        setError(err);
        console.log('Ha habido un error: ', err);
      });
  };

  const getPodcastDetail = async (id: string) => {
    const cachedData = getDataFromLocalStorage(`podcastDetail-${id}`, 24);
    setLoading(true);

    if (cachedData) {
      setPodcastDetail(cachedData);
      setLoading(false);
    }

    await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=20`)}`)
      .then((response) => response?.json())
      .then((data) => {
        const mappedData = mapPodcastDetail(data);
        setPodcastDetail(mappedData);
        saveDataToLocalStorage(`podcastDetail-${id}`, mappedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return {
    getPodcastList,
    getPodcastDetail,
  };
};
