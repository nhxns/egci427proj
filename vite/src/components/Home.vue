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
    <div class="container pt-5">
      <h4>This week:</h4>
      <div class="card-deck">
        <div class="ui centered cards">
          <div
            class="ui card"
            style="min-width: 15rem; max-width: 15rem"
            v-for="(picture, index) in Gallery"
            :key="index"
          >
            <div class="image">
              <img :src="'' + picture.pictureURL" />
            </div>
            <div class="content">
              <a class="header">{{ picture.pictureName }}</a>
              <div class="meta">
                {{ picture.username }}
              </div>
              <div class="description">{{ picture.pictureDetail }}</div>
            </div>
            <div class="card-footer">
              <p class="card-text">
                <small class="text-muted">Close : {{ picture.closedate }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      Gallery: [
        {
          firstname: "Elyse",
          lastname: "Emma",
          username: "@handsomeelyse",
          pictureName: "",
          pictureURL: "https://semantic-ui.com/images/avatar2/large/elyse.png",
          pictureDetail: "I cut my hair 'cus you don't care my heart",
          startprice: 100,
          currentprice: 100,
          closedate: "01/01/2028, 16:00PM",
          status: "available",
        },
        {
          firstname: "Molly",
          lastname: "May",
          pictureName: "",
          username: "@longhairbutdontcare",
          pictureURL: "https://semantic-ui.com/images/avatar2/large/molly.png",
          pictureDetail: "please ignore my username",
          startprice: 100,
          currentprice: 100,
          closedate: "01/01/2028, 16:00PM",
          status: "available",
        },
        {
          firstname: "Matthew",
          lastname: "Brew",
          username: "@madmatthew",
          pictureName: "",
          pictureURL: "https://semantic-ui.com/images/avatar2/large/matthew.png",
          pictureDetail: "I'm not mad'",
          startprice: 100,
          currentprice: 100,
          closedate: "01/01/2028, 16:00PM",
          status: "available",
        },
        {
          firstname: "Kristy",
          lastname: "Cream",
          username: "@ilovedonut",
          pictureName: "",
          pictureURL: "https://semantic-ui.com/images/avatar2/large/kristy.png",
          pictureDetail: "not Krispy Kreme but Kristy Cream",
          startprice: 100,
          currentprice: 100,
          closedate: "01/01/2028, 16:00PM",
          status: "available",
        },
        {
          firstname: "XXX",
          lastname: "XXX",
          username: "@handsomeelyse",
          pictureName: "",
          pictureURL: "https://semantic-ui.com/images/avatar2/large/matthew.png",
          pictureDetail: "I cut my hair 'cus you don't care my heart",
          startprice: 100,
          currentprice: 100,
          closedate: "01/01/2028, 16:00PM",
          status: "available",
        },
        {
          firstname: "XXX",
          lastname: "XXX",
          username: "@handsomeelyse",
          pictureName: "",
          pictureURL: "https://semantic-ui.com/images/avatar2/large/kristy.png",
          pictureDetail: "I cut my hair 'cus you don't care my heart",
          startprice: 100,
          currentprice: 100,
          closedate: "01/01/2028, 16:00PM",
          status: "available",
        },
      ],
    };
  },
};
</script>

<style lang=""></style>
