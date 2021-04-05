<template>
  <div>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Art.Auction</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/buy">Buy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/sell">Sell</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/profile">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- show content from each page -->
    <div class="">
      <router-view></router-view>
    </div>
    <!-- footer -->
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container ma-5">
        <span class="text-muted">
          <h4>Art.Action</h4>
          By:
          <ul>
            <li>Phattharaporn Roekduangchan 6080727</li>
            <li>Prapakorn Kangwannarakul 6080684</li>
            <li>Santhisa Chen 6080779</li>
          </ul>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
