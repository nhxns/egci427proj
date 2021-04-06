<template>
  <div class="container py-5">
    <div class="card-deck">
        <div class="ui cards">
          <div
            class="ui card"
            style="min-width: 15rem; max-width: 40rem"
            v-for="product in art_products"
            :key="product.id"
          >
            <div class="image">
              <img :src="'' + product.url"  />
            </div>
            <div class="content">
              <a class="header">{{ product.artname }}</a>
              <div class="description"><b>Description:</b> {{ product.description }}</div>
              <div class="artist"><b>Artist:</b> {{ product.artist}}</div>
            </div>
            <!-- sent ID in order to bid -->
            <div class="card-footer">
              <p class="card-text">
                <button class="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-sm" @click="Buy(product.id)" v-if="product.status=='available'">Buy</button>
                <button class="btn btn-dark" v-else-if="product.status=='sold'" disabled>Sold!</button>
                <br/>
              </p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase"
export default {
  name: "Home",
  components: {},
  data() {
    return {
      art_products:[]
    };
  },
  mounted(){
    const db = firebase.firestore();

    db.collection("product")
      .get()
      .then((snap) => {
        const collections = [];
        snap.forEach((doc) => {
          collections.push({ id: doc.id, ...doc.data() });
        });
        this.art_products = collections;
        console.log(collections);
      });
  }
};
</script>

<style>

</style>