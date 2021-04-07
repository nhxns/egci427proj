<template>
  <div class="container py-5">
    <!-- input form -->
    <div class="ui segment">
      <div class="ui form">
        <div class="two fields">
          <div class="field">
            <label>Artwork name</label>
            <input placeholder="Artwork name" type="text" v-model="picData.artname" />
          </div>
          <div class="field">
            <label>Desciption</label>
            <textarea placeholder="Description" v-model="picData.description"></textarea>
          </div>
          <div class="field">
            <label>Artist</label>
            <input type="text" placeholder="Artist name" v-model="picData.artist" />
          </div>
          <div class="field">
            <label>Price</label>
            <input type="text" placeholder="Price" v-model="picData.price" />
          </div>
          <div class="field">
            <label>Image Url</label>
            <input type="text" placeholder="Image Url" v-model="picData.url" />
          </div>
        </div>
        <div class="ui submit button" @click="addtoFirestore()">Submit</div>
      </div>
      <div class="d-flex align-items-end flex-column" style="">*For sale only</div>
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
      picData: {
        artist: "",
        artname: "",
        description: "",
        price: "",
        url: "",
        owner: "",
        username: "",
      },
      UserInfo: [],
    };
  },
  mounted() {
    //get this user info from auth uid & keep the username,firstname
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
          this.picData.owner = this.UserInfo.firstname;
          this.picData.username = this.UserInfo.username;
          console.log(this.picData.username);
        });
  },
  methods: {
    //add to firestore collection ("product")
    addtoFirestore() {
      const db = firebase.firestore();
      db.collection("product")
        .add({
          artist: this.picData.artist,
          artname: this.picData.artname,
          description: this.picData.description,
          price: this.picData.price,
          url: this.picData.url,
          owner: this.picData.owner,
          username: this.picData.username,
          status: "available",
        })
        .then(() => {
          window.location.reload();
        });

      console.log(this.picData.price);
    },
  },
};
</script>
