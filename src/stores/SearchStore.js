import { defineStore } from "pinia";
const url =
  "https:api.themoviedb.org/3/search/movie?api_key=75b04b029189fe405cf16561bd9d8327&query=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
  },
});
