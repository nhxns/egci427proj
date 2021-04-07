<template>
  <!-- link to the buy page -->
  <div class="container mt-5">
    <div class="pb-2">
      <router-link to="/buy">
        <a class="dark"> &lt;&lt; Others Artwork</a>
      </router-link>
    </div>
    <!-- overall detail of the artwork -->
    <div class="row featurette">
      <div class="col-md-5">
        <img :src="'' + this.art_product.url" style="width: 380px" />
      </div>

      <div class="col-md-7">
        <h1 class="featurette-heading">
          {{ this.art_product.artname }} <br /><span class="text-muted"
            >Artist: {{ this.art_product.artist }}</span
          >
        </h1>
        <p>By: {{ this.art_product.username }}</p>

        <p class="lead">{{ this.art_product.description }}</p>

        <h2>
          <span class="text-muted">Price: {{ this.art_product.price }} coins</span>
        </h2>
        <!-- user detail, button to buy(if the product is available) and current user coin -->

        <div class="d-flex align-items-end flex-column py-5" style="">
          <div class="">{{ UserInfo.username }}</div>
          <div class="d-flex justify-content-end">
            <div
              v-if="this.art_product.status != 'sold'"
              class="btn btn-dark"
              data-toggle="modal"
              data-target=".bd-example-modal-sm"
            >
              Buy
            </div>
            <!-- show "sold" when the product is sold -->
            <button class="btn btn-dark" v-else disabled>Sold!</button>
          </div>
          <div class="">My coin : {{ UserInfo.coin }}</div>
        </div>
      </div>
    </div>
    <hr class="featurette-divider" />

    <!-- confirmation part before the user buys the artwork -->
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
            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Are you sure you want to buy {{ this.art_product.artname }} for
            {{ this.art_product.price }} coins?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              @click.prevent="updateCoin(this.art_product.price), updateArtwork()"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Product",
  components: {},
  data() {
    return {
      art_product: [],
      UserInfo: [],
      coin: 0,
    };
  },
  mounted() {
    this.getUserInfo();
    this.getProductData();
  },
  methods: {
    // function to get the current user
    getUserInfo() {
      const db = firebase.firestore();
      db.collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snap) => {
          const UserInfo = snap.data();
          this.UserInfo = UserInfo;

          console.log(UserInfo);
        });
    },
    // function to get the selected artwork
    getProductData() {
      const db = firebase.firestore();
      console.log(this.$route.params.productId);
      db.collection("product")
        .doc(this.$route.params.productId)
        .get()
        .then((snap) => {
          const collections = snap.data();
          this.art_product = collections;
          console.log(collections);
        });
    },
    // function to update the coin of each user after they buy an artwork
    updateCoin(price) {
      const db = firebase.firestore();
      db.collection("user")
        .doc(firebase.auth().currentUser.uid)
        .update("coin", firebase.firestore.FieldValue.increment(-price))
        .then(() => {
          window.location.href = "/buy";
        });
    },
    // function to update the artwork to be sold after user buy it already
    updateArtwork() {
      const db = firebase.firestore();
      db.collection("product")
        .doc(this.$route.params.productId)
        .update("status", "sold")
        .then(() => {
          window.location.href = "/buy";
        });
    },
  },
};
</script>
