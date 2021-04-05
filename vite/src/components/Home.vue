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
      <h4>This week:</h4>
      <div class="card-deck">
        <div class="ui centered cards">
          <div
            class="ui card"
            style="min-width: 15rem; max-width: 15rem"
            v-for="(picture, index) in Gallery"
            :key="index"
          >
            <div class="image">
              <img :src="'' + picture.url" />
            </div>
            <div class="content">
              <p class="header">{{ picture.artname }}</p>
              <div class="meta">
                {{ picture.owner }}
              </div>
              <div class="description">{{ picture.description }}</div>
            </div>
            <!-- sent ID in order to bid -->
            <div class="card-footer">
              <p class="card-text">
                <router-link
                  :to="{ path: 'bid', name: 'Bid', params: { picID: picture.id } }"
                  append
                >
                  <button class="btn btn-xs btn-dark">Bid now</button>&nbsp;
                </router-link>

                <br />
                <small class="text-muted">Close : {{ picture.timeclose }}</small>
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
      Gallery: [],
    };
  },
  mounted() {
    const db = firebase.firestore();

    db.collection("auction")
      .get()
      .then((snap) => {
        const collections = [];
        snap.forEach((doc) => {
          collections.push({ id: doc.id, ...doc.data() });
        });
        this.Gallery = collections;
        console.log(collections);
      });
  },
};
</script>

<style lang=""></style>
