<template>
  <div class="film">
    <div v-if="currentfilm && cast && trailers">
      <div class="film__poster-container"
      >
        <img
          v-if="currentfilm.backdrop_path"
          class="film__poster"
          :src="`${globalImgAddress}1280${currentfilm.backdrop_path}`"
        />
      </div>
      <div class="film__container">
        <div>Genres: {{ genres }}</div>
        <div v-if="currentfilm.overview">
          <div>SUMMARY</div>
          <div>{{ currentfilm.overview }}</div>
        </div>
        <div v-if="cast.length">
          <FilmActorsSlickTemplate :cast="cast" />
        </div>
        <div v-if="trailers.length">
          <FilmTrailersSlickTemplate :trailers="trailers" />
        </div>
        <div class="film__title" v-if="reviews && reviews.length">
          REVIEWS
        </div>
        <div v-for="(review, index) in reviews" :key="review.id">
          <FilmReviewTemplate :review="review" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilmActorsSlickTemplate from "../components/FilmActorsSlickTemplate.vue";
import FilmTrailersSlickTemplate from "../components/FilmTrailersSlickTemplate.vue";
import FilmReviewTemplate from "../components/FilmReviewTemplate.vue";
export default {
  data() {
    return {
      genres: null,
      currentfilm: null,
      cast: null,
      trailers: null,
      reviews: null,
      isvisible: true,
    };
  },
  components: {
    FilmActorsSlickTemplate,
    FilmTrailersSlickTemplate,
    FilmReviewTemplate,
  },
  props: ["filmID", "filmType"],
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/${this.filmType}/${this.filmID}?api_key=f943d3d10cc39fd734122d69efabbacb`
      )
      .then((response) => {
        this.currentfilm = response.data;
        this.genres = this.currentfilm.genres.map((el) => el.name).join("/");
      });
    axios
      .get(
        `https://api.themoviedb.org/3/${this.filmType}/${this.filmID}/credits?api_key=f943d3d10cc39fd734122d69efabbacb`
      )
      .then((response) => {
        this.cast = response.data.cast;
        for (let i = 0; i < this.cast.length; i++) {
          axios
            .get(
              `https://api.themoviedb.org/3/person/${this.cast[i].id}?api_key=f943d3d10cc39fd734122d69efabbacb`
            )
            .then((response) => {
              this.cast[i].bio = response.data.biography;
            });
        }
      });
    axios
      .get(
        `https://api.themoviedb.org/3/${this.filmType}/${this.filmID}/videos?api_key=f943d3d10cc39fd734122d69efabbacb`
      )
      .then((response) => {
        this.trailers = response.data.results;
      });
    axios
      .get(
        `https://api.themoviedb.org/3/${this.filmType}/${this.filmID}/reviews?api_key=f943d3d10cc39fd734122d69efabbacb&language=en-US`
      )
      .then((response) => {
        this.reviews = response.data.results;
      });
  },
};
</script>

<style scoped>
.film {
  background: -webkit-linear-gradient(285deg, #251431 0%, #161130 22%);
  background: -o-linear-gradient(285deg, #251431 0%, #161130 22%);
  background: linear-gradient(165deg, #251431 0%, #161130 22%);
  color: #fff;
}
.film__poster-container {
  overflow: hidden;
  max-height: calc(100vh - 80px);
  max-width: 100vw;
}
.film__poster {
  height: 100%;
  width: 100%;
}
.film__container {
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 80%;
}
@media (max-width: 479px) {
  .film__container {
    max-width: 90%;
  }
}
.film__title {
  margin-top: 50px;
  text-transform: uppercase;
}
@media (max-width: 539px) {
  .film__title {
    text-align: center;
  }
}
</style>
