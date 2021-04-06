<template>
  <div class="container mt-5">
    <div class="pb-2">
      <router-link to="/">
        <a class=""> &lt;&lt; Back to Home</a>
      </router-link>
    </div>
    <!-- overall detail of the picture -->
    <div class="row featurette">
      <div class="col-md-5">
        <img :src="'' + this.Gallery.url" style="width: 380px" />
      </div>

      <div class="col-md-7">
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
      <h6>Current price: THB {{ this.Gallery.price }}</h6>
      [ Bid by : {{ this.Gallery.bidder }} ]
    </div>
    <!-- show available coin & input amount of coin to bid -->
    <div class="d-flex align-items-end flex-column py-5" style="">
      <div class="">*my username*</div>
      <div class="d-flex justify-content-end">
        <input type="email" class="form-control" id="bid" />
        <div class="btn btn-dark" data-toggle="modal" data-target=".bd-example-modal-sm">
          Bid now
        </div>
      </div>
      <div class="">My coin : *coin*</div>
    </div>

    <!-- confirmation -->
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
          <div class="modal-body">Are you sure you want to delete this item?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/">
              <button type="button" class="btn btn-danger" @click="delUser(uid)">Delete</button>
            </router-link>
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
          const UserInfo = [];
          snap.forEach((doc) => {
            UserInfo.push({ id: doc.id, ...doc.data() });
          });
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
  },
};
</script>
