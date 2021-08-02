export const buildQueryParams = (params) => {
  return Object.entries(params)
    .map(([paramName, paramValue]) => `${paramName}=${encodeURI(paramValue)}`)
    .join('&');
};

export const buildQuery = (query, params) =>
  `https://youtube.googleapis.com/youtube/v3/${query}?${params}`;

export default {
  buildQueryParams,
  buildQuery,
};
