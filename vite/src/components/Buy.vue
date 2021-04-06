<template>
  <div class="container py-5">
    <div v-if="loading" class="d-flex justify-content-center">
      <div class="spinner-border" style="width: 8rem; height: 8rem" role="status">
        <span class="visually-hidden"></span>
      </div>
    </div>
    <div v-else class="card-deck">
      <div class="ui cards">
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
          </div>
          <!-- sent ID in order to bid -->
          <div class="card-footer">
            <p class="card-text">
              <button
                class="btn btn-dark"
                data-toggle="modal"
                data-target=".bd-example-modal-sm"
                @click="BuyCheck(product.id)"
                v-if="product.status == 'available'"
              >
                Buy
              </button>
              <button class="btn btn-dark" v-else-if="product.status == 'sold'" disabled>
                Sold!
              </button>
              <br />
            </p>
          </div>
          <div
            class="modal fade bd-example-modal-sm"
            id="myModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title" id="exampleModalLabel">{{ product.artname }}</h1>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">Are you sure to buy this Artwork ?</div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="button" class="btn btn-dark" @click="buy(product.id)">Buy</button>
                </div>
              </div>
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
