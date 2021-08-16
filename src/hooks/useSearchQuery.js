import { useEffect, useState } from 'react';
import { buildQueryParams, buildQuery } from './utils';

const useSearchQuery = ({ text, relatedToVideoId, typeResult }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryParams = buildQueryParams({
    part: 'snippet',
    maxResults: 20,
    ...(text && { q: text }),
    type: typeResult || 'video',
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    ...(relatedToVideoId && { relatedToVideoId }),
  });

  const YOUTUBE_API_URL = buildQuery('search', queryParams);
  useEffect(() => {
    setLoading(true);
    fetch(YOUTUBE_API_URL)
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.error) {
          throw new Error(jsonData);
        }
        setData(jsonData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [text, YOUTUBE_API_URL]);

  return [data, loading, error];
};

export default useSearchQuery;
