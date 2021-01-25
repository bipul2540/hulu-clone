const API_KEY = "0a9f35c23e3bfdeb27a7011df29d671c";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomaceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchMystery: `/discover/movie?api_Key=${API_KEY}&with_genres=53`,
  fetchTv: `/discover/movie?api_Key=${API_KEY}&with_genres=10770`,
};


