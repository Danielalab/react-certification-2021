export const buildQueryParams = (params) => {
  return Object.entries(params)
    .map(([paramName, paramValue]) => `${paramName}=${encodeURI(paramValue)}`)
    .join('&');
};

export default {
  buildQueryParams,
};
