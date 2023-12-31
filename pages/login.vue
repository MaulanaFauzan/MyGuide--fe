<style media="screen">
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-image: url("~/assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.background {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

form {
  height: 520px;
  width: 430px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: #e5e5e5;
}

button {
  margin-top: 50px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.social {
  margin-top: 30px;
  display: flex;
}

.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}

.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
  margin-left: 25px;
}

.social i {
  margin-right: 4px;
}
</style>
<template>
  <div class="container-scroller">
    <div class="background">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form @submit.prevent="login">
      <h3>Login Here</h3>

      <label for="username">Email</label>
      <input type="text" placeholder="Email" id="Email" v-model="user.email" />

      <label for="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        v-model="user.password"
        id="password"
      />
      <div>
        <button>Log In</button>
        <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        >
        </GoogleSignInButton>
      </div>
      <div class="social">
        <!-- <button id="cobabutton"></button>
          <div class="go" id="googleButton" type="button"><i class="fab fa-google"></i> Google</div>
          <div class="fb"><i class="fab fa-facebook"></i> Facebook</div> -->
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>

/// <reference types='google.accounts' />
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
import Swal from "sweetalert2";

definePageMeta({
  layout: "noauth",
});

const { authenticateUser } = useAuthStore(); // use auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  email: "",
  password: "",
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  // redirect to homepage if user is authenticated
  console.log("auth", authenticated.value);
  if (authenticated.value) {
    Swal.fire({
      title: "Success",
      text: "Login Success!",
      icon: "success",
      confirmButtonText: "OK",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Swal.fire("Saved!", "", "success");
        router.push("/home");
      }
    });
  } else if (!authenticated.value) {
    Swal.fire({
      title: "Error!",
      text: "Login Error, Please Try Again!",
      icon: "error",
      confirmButtonText: "Try Again!",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Swal.fire("Saved!", "", "success");
        router.push("/login");
      }
    });
  }
};

import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
