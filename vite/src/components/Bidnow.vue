<template>
  <div class="container mt-5">
    <div class="pb-2">
      <router-link to="/">
        <a class=""> &lt;&lt; Back to Home</a>
      </router-link>
    </div>
    <!-- overall detail of the picture -->
    <div class="row featurette">
      <div class="col-6 col-sm-10 col-md-7" align="center">
        <img :src="'' + this.Gallery.url" style="width: 380px" />
      </div>

      <div class="col-8 col-sm-10 col-md-4">
        <h1 class="featurette-heading">
          {{ this.Gallery.artname }} <br /><span class="text-muted"
            >Artist: {{ this.Gallery.artist }}</span
          >
        </h1>
        <p>By: {{ this.Gallery.username }}</p>

        <p class="lead">{{ this.Gallery.description }}</p>
      </div>
    </div>
    <hr class="featurette-divider" />
    <!-- show current bid -->
    <div>
      <h6>Current bid: {{ this.Gallery.price }} coins</h6>
      [ Bid by : {{ this.Gallery.bidder }} ]
    </div>
    <!-- show available coin & input amount of coin to bid -->
    <div class="d-flex align-items-end flex-column py-5" style="">
      <div class="">{{ UserInfo.username }}</div>
      <div class="d-flex justify-content-end">
        <input type="number" :min="this.Gallery.price" v-model="bidprice" />
        <div
          class="btn btn-dark"
          data-toggle="modal"
          data-target=".bd-example-modal-sm"
          @click="bid(this.bidprice)"
        >
          Bid now
        </div>
      </div>
      <div class="">My coin : {{ UserInfo.coin }}</div>
    </div>

    <!-- confirmation -->
    <div
      v-if="this.bidprice > this.Gallery.price"
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
            Are you sure you want to bid this item for {{ this.bidprice }} coins?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/bid/:picID">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                @click.prevent="updateCoin(this.bidprice)"
              >
                Yes
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- if input bid less than current bid => show error -->
    <div
      v-else
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
            <h1 class="modal-title" id="exampleModalLabel">Error!</h1>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">You should bid more than {{ this.Gallery.price }} coins.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Bid",
  components: {},
  data() {
    return {
      Gallery: [],
      UserInfo: [],
      coin: 0,
      bidprice: 0,
    };
  },
  mounted() {
    this.getUserInfo();
    this.getPicData();
  },
  methods: {
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
    getPicData() {
      const db = firebase.firestore();
      console.log(this.$route.params.picID);
      db.collection("auction")
        .doc(this.$route.params.picID)
        .get()
        .then((snap) => {
          const collections = snap.data();
          this.Gallery = collections;
          console.log(collections);
        });
    },
    bid(val) {
      this.coin = val;
    },

    //this is the update of the values in firebase
    updateCoin(price) {
      const db = firebase.firestore();

      if (price < this.UserInfo.coin) {
        db.collection("auction")
          .doc(this.$route.params.picID)
          .update("price", this.coin)
          .then(() => {
            window.location.reload();
          });

        db.collection("auction")
          .doc(this.$route.params.picID)
          .update("bidder", this.UserInfo.username)
          .then(() => {
            window.location.reload();
          });

        db.collection("user")
          .doc(firebase.auth().currentUser.uid)
          .update("coin", firebase.firestore.FieldValue.increment(-price));
      } else {
        alert("Your coin is not enough for this amount of bid.\n Please buy more coin");
      }
    },
  },
};
</script>
