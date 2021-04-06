<template>
  <div class="container py-5">
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
          v-for="product in art_products"
          :key="product.id"
        >
          <div class="image">
            <div class="full-img">
              <img :src="'' + product.url" />
            </div>
          </div>
          <div class="content">
            <a class="header">{{ product.artname }}</a>
            <div class="description"><b>Description:</b> {{ product.description }}</div>
            <div class="artist"><b>Artist:</b> {{ product.artist }}</div>
            <div class="price"><b>Price:</b> {{product.price}}</div>
          </div>
          <!-- sent ID in order to bid -->
          <div class="card-footer">
            <p class="card-text">
              <router-link :to="{path: 'product', name: 'Product', params: {productId: product.id} }">
                <button
                  class="btn btn-dark"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  v-if="product.status == 'available'"
                >
                  {{ product.price }} coins
                </button>
                <button class="btn btn-dark" v-else-if="product.status == 'sold'" disabled>
                  Sold!
                </button>
              </router-link>
              <br />
            </p>
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
      art_products: [],
    };
  },
  mounted() {
    const db = firebase.firestore();
    this.loading = true;

    db.collection("product")
      .get()
      .then((snap) => {
        const collections = [];
        snap.forEach((doc) => {
          collections.push({ id: doc.id, ...doc.data() });
        });
        this.art_products = collections;
        this.loading = false;
        console.log(collections);
      });
  },
  methods:{

  }
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
