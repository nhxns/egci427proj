<template>
  <div>
    <!-- carousel -->
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/bg1.jpg" class="d-block w-100" style="height: 400px" alt="pic1" />
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>A r t . A u c t i o n</h1>
              <p>w h e r e _ a r t _ c a n _ g r o w</p>
              <p><a class="btn btn-lg btn-light" href="/signin">Register now</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <!-- card (show images & details) -->
    <div class="container py-5">
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
            <!-- sent ID in order to bid -->
            <div class="card-footer">
              <p class="card-text">
                <a href="/bid" class="btn btn-dark">Bid now</a>
                <br />
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
