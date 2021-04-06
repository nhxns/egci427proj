<template>
  <div>
    <!-- carousel -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/bg1.jpg" class="d-block w-100" style="height: 550px" alt="pic1" />
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>A r t . A u c t i o n</h1>
              <p>w h e r e _ a r t _ c a n _ g r o w</p>
              <p><a class="btn btn-lg btn-light" href="/signin">Register now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- card (show images & details) -->
    <div class="container py-5">
      <h4>Today:</h4>

      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 8rem; height: 8rem" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>

      <div class="card-deck">
        <div class="ui centered cards">
          <div
            class="ui card"
            style="min-width: 300px; max-width: 300px"
            v-for="(picture, index) in Gallery"
            :key="index"
          >
            <div class="image">
              <div class="full-img">
                <img :src="'' + picture.url" style="align: center" width="" />
              </div>
            </div>
            <div class="content">
              <p class="header">{{ picture.artname }}</p>
              <div class="meta">Artist: {{ picture.artist }}<br /></div>
              <div class="description">
                {{ picture.description }}
              </div>
            </div>
            <!-- sent ID in order to bid -->
            <div class="card-footer">
              <p class="card-text">
                <router-link
                  :to="{ path: 'bid', name: 'Bid', params: { picID: picture.id } }"
                  append
                >
                  <button class="btn btn-xs btn-dark" v-if="picture.status != 'sold'">
                    Bid now
                  </button>
                  <button class="btn btn-xs btn-dark" v-if="picture.status == 'sold'" disabled>
                    Bid now</button
                  >&nbsp;
                </router-link>

                <br />
                <small class="text-muted"
                  >{{ picture.status == "sold" ? "Sold Out" : "Day(s) until close bid:" }}

                  <!-- {{picture.timeclose.seconds}} -->

                  {{ CompareDate(picture.timeclose.seconds * 1000, picture.status) }}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Close in : {{ new Date(picture.timeclose.seconds * 1000).toLocaleString()
                  }}<br />
                  {{ new Date().toLocaleString() }}<br
                /> -->
</template>
<script>
import firebase from "firebase";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      Gallery: [],
      loading: true,
    };
  },
  mounted() {
    const db = firebase.firestore();
    this.loading = true;

    db.collection("auction")
      .get()
      .then((snap) => {
        const collections = [];
        snap.forEach((doc) => {
          collections.push({ id: doc.id, ...doc.data() });
        });
        this.Gallery = collections;
        this.loading = false;
        console.log(collections);
      });
  },
  methods: {
    CompareDate(date, status) {
      if (status != "sold") {
        const current = new Date();
        const closedate = new Date(date);

        var currentd = current.getDate();
        var currentH = current.getHours();
        var currentMin = current.getMinutes();

        var closed = closedate.getDate();
        var closeH = closedate.getHours();
        var closeMin = closedate.getMinutes();

        var remaind = closed - currentd;
        var remainH = closeH - currentH;
        var remainMin = closeMin - currentMin;
        if (remainMin < 0) {
          remainH = remainH - 1;
          remainMin = 60 + remainMin;
        }

        if (remainH < 0) {
          remaind = remaind - 1;
          remainH = 24 + remainH;
        }

        return remaind + " days " + remainH + " hours " + remainMin + " minutes";
        // return current + closedate
      }
    },

    // checksold(){

    //   const

    // }
  },
};
</script>

<style lang="">
.full-img {
  height: 180px;
  width: 300px;
  overflow: hidden;
}

.full-img img {
  display: block;
  width: 300px;
  margin-top: 30%;
  transform: translateY(-50%);
}
</style>
