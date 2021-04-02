<template>
  <div>
    <!-- carousel -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://picsum.photos/700/250/?random=1" class="d-block w-100" alt="pic1" />
          <div class="carousel-caption d-none d-md-block">
            <h3 class="display-4">Welcome</h3>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/700/250/?random=2" class="d-block w-100" alt="pic2" />
          <div class="carousel-caption d-none d-md-block">
            <h3 class="display-4">Welcome</h3>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    <br />
    <!-- card (show images & details) -->
    <div class="ml">
      <h4>This week:</h4>
      <div class="ui card">
        <div class="image">
          <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" />
        </div>
        <div class="content">
          <a class="header">Kristy</a>
          <div class="meta">
            <span class="date">Joined in 2013</span>
          </div>
          <div class="description">Kristy is an art director living in New York.</div>
        </div>
        <div class="extra content">
          <a>
            <i class="user icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="">
.ml {
  margin-left: 15px;
}
</style>
