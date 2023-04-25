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
