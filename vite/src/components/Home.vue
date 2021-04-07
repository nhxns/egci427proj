<template>
  <div>
    <!-- carousel -->

    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/bg1.jpg" class="d-block w-100" style="height: 600px" alt="pic1" />
          <div class="carousel-caption d-none d-md-block">
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>A r t . A u c t i o n</h1>
                <p>w h e r e _ a r t _ c a n _ g r o w</p>
                <p><a class="btn btn-lg btn-light" href="/signin">Register now</a></p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item active">
          <img src="../assets/bg3.JPEG" class="d-block w-100" style="height: 600px" alt="pic2" />
          <div class="carousel-caption d-none d-md-block">
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>S e e _ o u r _ p r o d u c t s</h1>
                <p>A r t . A u c t i o n</p>
                <p><a class="btn btn-lg btn-light" href="/buy">Buy now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
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
      <div v-else class="card-deck">
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
</template>
<script>
import firebase from "firebase";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      loading: true,
      Gallery: [],
    };
  },

  //   create(){

  // const db = firebase.firestore();

  //   },

  mounted() {
    //get data from firestore collection("auction")
    const db = firebase.firestore();
    this.loading = true;

    db.collection("auction")
      .get()
      .then((snap) => {
        var collections = [];
        snap.forEach((doc) => {
          collections.push({ id: doc.id, ...doc.data() });
        });
        this.Gallery = collections;
        this.loading = false;
        console.log(this.Gallery);

        this.Gallery.forEach((picture) => {
          if (this.CompareDated(picture.timeclose.seconds * 1000)) {
            console.log(picture.id);
            this.checksold(picture.id);
          }
        });
      });
  },
  methods: {
    //calculate time left (until close auction)
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
    //this is to check which piece is over the set period of auction
    CompareDated(date) {
      const current = new Date().getTime();

      var diff = date - current;

      return diff < 0;
    },
    // command that chage the pieces to sold
    checksold(idin) {
      const db = firebase.firestore();

      db.collection("auction").doc(idin).update("status", "sold");
    },
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
