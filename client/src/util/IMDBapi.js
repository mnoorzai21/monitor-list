import LocalStorageCacheApi from "localstorage-cache-api";

const top250MoviesCache = new LocalStorageCacheApi({
  url: "https://imdb-api.com/en/API/Top250Movies/k_2zgimyw8",
  key: "top250movies",
  // 1 day
  expiration: 24 * 60 * 60 * 1000,
});

const top250TVsCache = new LocalStorageCacheApi({
  url: "https://imdb-api.com/en/API/Top250TVs/k_2zgimyw8",
  key: "top250tvs",
  // 1 day
  expiration: 24 * 60 * 60 * 1000,
});

export const top250Movies = async () => {
  return top250MoviesCache.getData();
};

export const top250TVs = async () => {
  return top250TVsCache.getData();
};

export const searchTitle = async (title) => {
  const titleCache = new LocalStorageCacheApi({
    url: `https://imdb-api.com/en/API/SearchTitle/k_2zgimyw8/${title}`,
    key: `title:${title}`,
    // 1 day
    expiration: 24 * 60 * 60 * 1000,
  });
  return titleCache.getData();
};
