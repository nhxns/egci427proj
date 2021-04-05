<template>
  <div>
    <div class="card" style="width: 18rem;" v-for="products in art_products" :key="products.id">
      <img class="card-img-top" src="../assets/12180.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{products.title}}</h5>
        <p class="card-text">{{ products.content }}</p>
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
