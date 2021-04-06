<template>
  <div>
  <!-- left side navbar -->
    <div class="sidenav">
      <div class="login-main-text">
        <h2>Art Augtion</h2>
        <p>Login or register from here to access.</p>
      </div>
    </div>
    <!-- form for user to access the email and password -->
      <div class="main">
        <div class="col-md-6 col-sm-12">
          <div class="login-form">
            <form>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  v-model="formData.email"
                />
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
              <button type="submit" class="btn btn-login" @click.prevent="signIn()">Login</button>
              <button type="submit" class="btn btn-register" @click.prevent="signUp()">Register</button>
              <button type="submit" class="btn btn-register" @click.prevent="back()">Back</button>
              

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
        email: "",
        password: "",
      },
    };
  },
  methods: {
    // function that will check the existed user authentication in the firebase authentication
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
        .then(user => {
          this.$router.replace("/home")
        })
        .catch( error => {
          console.log(error.message)
        })
    },
    // function to redirect to the signup page
    signUp(){
      window.location.href = "/signup"
    },
    // function to redirect to the home page
    back(){
      window.location.href = "/home"
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
  background-image: url("../assets/12180.jpg");
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

.btn-login {
  background-color: black;
  color: white;
}

.btn-register {
  background-color: black;
  color: white;
}
</style>
