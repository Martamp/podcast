export const parsedData = (data) =>
  data.map((entry) => {
    return {
      id: entry.id.attributes['im:id'],
      title: entry.title.label,
      author: entry['im:artist'].label,
      image: entry['im:image'][2].label,
      summary: entry.summary.label,
    };
  });

export const mapPodcastDetail = (data) => {
  const parsedData = JSON.parse(data.contents).results.slice(1);

  return parsedData.map((entry) => ({
    id: entry.trackId,
    title: entry.trackName,
    time: entry.trackTimeMillis,
    summary: entry.description,
    track: entry.episodeUrl,
  }));
};
