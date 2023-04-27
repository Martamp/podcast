import React, { ReactNode, createContext, useContext, useState } from 'react';

export type FunctionType = (...args: Array<any>) => any;
export type PodcastContextType = {
  currentPodcast: any;
  currentTrack: any;
  data: any;
  podcastDetail: [] | null;
  error: boolean;
  loading: boolean;
  setCurrentPodcast: FunctionType;
  setData: FunctionType;
  setError: FunctionType;
  setLoading: FunctionType;
  setPodcastDetail: FunctionType;
  setCurrentTrack: FunctionType;
};

type Props = {
  children: ReactNode;
};

export const PodcastContext = createContext<PodcastContextType>({});

export const PodcastProvider = ({ children }: Props): JSX.Element => {
  const [data, setData] = useState(null);
  const [podcastDetail, setPodcastDetail] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  return (
    <PodcastContext.Provider
      value={{
        currentPodcast,
        currentTrack,
        data,
        podcastDetail,
        error,
        loading,
        setCurrentPodcast,
        setData,
        setError,
        setLoading,
        setPodcastDetail,
        setCurrentTrack,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastProvider = () => useContext(PodcastContext);
export const podcastProvider =
  (Component: ReactNode): FunctionType =>
  (props: any) =>
    (
      <PodcastProvider>
        <Component {...props} />
      </PodcastProvider>
    );
export default PodcastContext;
