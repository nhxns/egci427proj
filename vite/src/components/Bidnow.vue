<template>
  <div class="container mt-5">
    <div class="pb-2">
      <router-link to="/">
        <button class="btn btn-xs btn-dark">Back</button>
      </router-link>
    </div>
    <!-- overall detail of the picture -->
    <div class="row featurette">
      <div class="col-md-5">
        <svg
          class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: 500x500"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#eee"></rect>
          <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
        </svg>
      </div>

      <div class="col-md-7">
        <h1 class="featurette-heading">
          *Picture name* <br /><span class="text-muted">By *artistname*</span>
        </h1>
        <p class="lead">*detail*</p>
      </div>
    </div>
    <hr class="featurette-divider" />
    <!-- show current bid -->
    <div>
      <h6>current price: *current*</h6>
      by : *username*
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
export default {
  name: "Bid",
  components: {},
  data() {
    return {};
  },
};
</script>
