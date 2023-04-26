import React, { ReactNode, createContext, useContext, useState } from 'react';

export type FunctionType = (...args: Array<any>) => any;
export type PodcastContextType = {
  data: any;
  podcastDetail: [] | null;
  error: boolean;
  loading: boolean;
  setData: FunctionType;
  setError: FunctionType;
  setLoading: FunctionType;
  setPodcastDetail: FunctionType;
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

  return (
    <PodcastContext.Provider
      value={{
        data,
        podcastDetail,
        error,
        loading,
        setData,
        setError,
        setLoading,
        setPodcastDetail,
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
