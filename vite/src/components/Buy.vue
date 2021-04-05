<template>
  <div class="container py-5">
    <div class="card-deck">
        <div class="ui centered cards">
          <div
            class="ui card"
            style="min-width: 15rem; max-width: 40rem"
            v-for="product in art_products"
            :key="product.id"
          >
            <div class="image">
              <img src="../assets/12180.jpg">
            </div>
            <div class="content">
              <a class="header">{{ product.title }}</a>
              <div class="meta">
                {{ product.content }}
              </div>
              <div class="description">{{ product.content }}</div>
            </div>
            <!-- sent ID in order to bid -->
            <div class="card-footer">
              <p class="card-text">
                <a href="/" class="btn btn-dark">test</a>
                <br />
              </p>
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
      art_products:[
        {
          id: "1",
          title: "art no 1",
          content: "monkey"
        },
        {
          id: "2",
          title: "art no 2",
          content: "tiger"
        },
        {
          id: "3",
          title: "art no 3",
          content: "donkey"
        }
      ]
    };
  },
};
</script>
