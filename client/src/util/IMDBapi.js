import LocalStorageCacheApi from "localstorage-cache-api";

const top250MoviesCache = new LocalStorageCacheApi({
  url: "https://imdb-api.com/en/API/Top250Movies/k_ws4zcg2h",
  key: "top250movies",
  // 1 day
  expiration: 24 * 60 * 60 * 1000,
});

export const top250Movies = async () => {
  return top250MoviesCache.getData();
};
