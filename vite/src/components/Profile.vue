<template>
  <div>
    <!-- if data is loading then show the spinner -->
    <div class="container py-3">
      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" style="width: 8rem; height: 8rem" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>

      <!-- show Profile after data is loaded -->
      <div v-else class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">P r o f i l e</h1>

          <div class="row align-items-start">
            <div class="col-4 col-sm-3"><h6>Username :</h6></div>
            <div class="col-4 col-sm-3">{{ UserInfo.username }}</div>
          </div>
          <div class="row align-items-start">
            <div class="col-4 col-sm-3"><h6>Firstname :</h6></div>
            <div class="col-4 col-sm-3">{{ UserInfo.firstname }}</div>
          </div>

          <div class="row align-items-start">
            <div class="col-4 col-sm-3"><h6>Email :</h6></div>
            <div class="col-4 col-sm-3">{{ UserInfo.email }}</div>
          </div>
          <div class="row align-items-start">
            <div class="col-4 col-sm-3"><h6>Coin :</h6></div>
            <div class="col-4 col-sm-3">{{ UserInfo.coin }}</div>
          </div>
        </div>
      </div>
      <hr class="featurette-divider" />

      <!-- add coins -->
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Coin</h1>
        <p class="fs-5 text-muted">
          Exchange money to coins. Coins can be used to purchase or bid art pieces.
        </p>
      </div>

      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Silver</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  800<small class="text-muted fw-light"> Coins</small>
                </h1>
                <button
                  type="button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  class="w-100 btn btn-lg btn-outline-success"
                  @click="getCoin(800)"
                >
                  THB 349
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Gold</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  1600<small class="text-muted fw-light"> Coins</small>
                </h1>

                <button
                  type="button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  class="w-100 btn btn-lg btn-outline-success"
                  @click="getCoin(1600)"
                >
                  THB 699
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">Platinum</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  3300<small class="text-muted fw-light"> Coins</small>
                </h1>

                <button
                  type="button"
                  data-toggle="modal"
                  data-target=".bd-example-modal-sm"
                  class="w-100 btn btn-lg btn-outline-success"
                  @click="getCoin(3300)"
                >
                  THB 1,459
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
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
          <div class="modal-body">Are you sure you want to pay for {{ coin }} coins?</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/profile">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                @click="updateCoin()"
              >
                Yes
              </button>
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
  name: "Home",
  components: {},
  data() {
    return {
      UserInfo: [],
      coin: 0,
      loading: true,
    };
  },
  mounted() {
    const db = firebase.firestore();
    (this.loading = true),
      db
        .collection("user")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snap) => {
          const UserInfo = snap.data();
          this.UserInfo = UserInfo;
          this.loading = false;
          console.log(UserInfo);
        });
  },
  methods: {
    getCoin(val) {
      this.coin = val;
    },
    updateCoin() {
      const db = firebase.firestore();

      db.collection("user")
        .doc(firebase.auth().currentUser.uid)
        .update("coin", firebase.firestore.FieldValue.increment(this.coin))
        .then(() => {
          window.location.reload();
        });
    },
  },
};
</script>
