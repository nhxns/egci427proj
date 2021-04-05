<template>
  <div class="container">
    <div class="ui segment">
      <div class="ui form">
        <div class="two fields">
          <div class="field">
            <label>Artwork name</label>
            <input placeholder="Artwork name" type="text">
          </div>
          <div class="field">
            <label>Desciption</label>
            <textarea placeholder="Description"></textarea>
          </div>
          <div class="field">
            <label>Artist</label>
            <input type="text" placeholder="Artist name"/>
          </div>
          <div class="field">
            <label>Price</label>
            <input type="text" placeholder="Price">
          </div>
        </div>
        <div class="ui submit button">Submit</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
};
</script>
