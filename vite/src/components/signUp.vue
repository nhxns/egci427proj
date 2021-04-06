<template>
  <div>
  <!-- left side navbar -->
    <div class="sidenav">
      <div class="login-main-text">
        <h2>Art Augtion</h2>
        <p>Register</p>
      </div>
    </div>
    <!-- form for user to fill in the information in order to register -->
    <div class="main">
      <div class="col-md-6 col-sm-12">
        <div class="login-form">
          <form>
            <div class="form-group">
              <label>Email</label>
              <input type="text" class="form-control" placeholder="Email" v-model="formData.email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="formData.password"
              />
            </div>
            <div class="form-group">
              <label>Username</label>
              <input type="text" class="form-control" placeholder="Username" v-model="formData.username"/>
            </div>
            <div class="form-group">
              <label>First name</label>
              <input type="text" class="form-control" placeholder="First name" v-model="formData.firstname"/>
            </div>
            <button type="submit" class="btn btn-signup" @click.prevent="register()">
              Register
            </button>
            <button type="submit" class="btn btn-signup" @click.prevent="backToSignIn()">Back</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "SignIn",
  data() {
    return {
      formData:{
        password: "",
        email: "",
        firstname: "",
        coin:"",
      }
    };
  },
  methods: {
    // function to create the new user in firebase authentication
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password,
        )
        .then(async(res) => {
          const data = {
            email: res.user.email,
            username: this.formData.username,
            firstname: this.formData.firstname,
            coin: 0
          }
          const db = firebase.firestore()
          await db.collection('user').doc(res.user.uid).set(data)
            .catch((err) =>{
              console.log(err)
            })
          this.$router.replace("/home")
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    // relocation to sign in page
    backToSignIn(){
      window.location.href = "/signin"
    }
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #000;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
  }

  .login-form {
    margin-top: 80%;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}

.btn-signup {
  background-color: black;
  color: #fff;
}
</style>
