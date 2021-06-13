<template>
  <div id="app">
    <PosterBG :poster="posterBG" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MoviesList from '@/components/MoviesList';
import PosterBG from '@/components/PosterBG';

export default {
  name: 'App',
  components: {
    MoviesList,
    PosterBG,
  },
  data: () => ({
    posterBG: '',
  }),
  computed: {
    ...mapGetters('movies', ['moviesList']),
  },
  methods: {
    ...mapActions('movies', ['fetchMovies']),
    onChangePoster(poster) {
      this.posterBG = poster;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
</style>
