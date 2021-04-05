<template>
  <div>
    <div class="container py-3">
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Profile</h1>
          <br />
          <div class="row align-items-start">
            <div class="col-3"><h6>Username :</h6></div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-start">
            <div class="col-3"><h6>Firstname :</h6></div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-start">
            <div class="col-3"><h6>Lastname :</h6></div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-start">
            <div class="col-3"><h6>Email :</h6></div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-start">
            <div class="col-3"><h6>Coin :</h6></div>
            <div class="col">One of three columns</div>
          </div>
        </div>
      </div>
      <hr class="featurette-divider" />
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
                <button type="button" class="w-100 btn btn-lg btn-outline-success">THB 349</button>
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

                <button type="button" class="w-100 btn btn-lg btn-outline-success">THB 699</button>
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

                <button type="button" class="w-100 btn btn-lg btn-outline-success">
                  THB 1,459
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ul>
        <li :key="item.key" v-for="item in collections">{{ item.id }}</li>
      </ul>
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
      collections: [],
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
        this.collections = collections;
        console.log(collections);
      });
  },
};
</script>
