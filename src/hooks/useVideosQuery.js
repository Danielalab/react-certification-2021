import { useEffect, useState } from 'react';
import { buildQueryParams, buildQuery } from './utils';

const useVideosQuery = ({ videoId }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryParams = buildQueryParams({
    part: 'snippet',
    id: videoId,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  });

  const YOUTUBE_API_URL = buildQuery('videos', queryParams);

  useEffect(() => {
    setLoading(true);
    fetch(YOUTUBE_API_URL)
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [videoId, YOUTUBE_API_URL]);

  return [data, loading, error];
};

export default useVideosQuery;
