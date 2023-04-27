import React from 'react';

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
    releaseDate: entry.releaseDate,
  }));
};

export const formatDate = (value: string) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${day}/${month}/${year}`;
};

export const formatDuration = (duration) => {
  const secs = Math.floor(duration / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const remainingMinutes = mins % 60;
  const remainingSeconds = secs % 60;
  const hasSeconds = remainingSeconds.toString().padStart(2, '0');

  const hasHours = hours ? `${hours}:` : '';
  const formattedtime = `${hasHours}${remainingMinutes}:${hasSeconds}`;

  return formattedtime;
};

export const capitalizeText = (text: string) => text.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());

export const renderTextWithLinks = (text) => {
  const regex = /https?:\/\/\S+/g;
  const hasLinks = text.match(regex);

  if (!hasLinks) {
    return text;
  }

  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.match(regex)) {
      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
          {part}
        </a>
      );
    }
    return part;
  });
};
