<template>
  <div class="container-fluid vw-100 vh-100" style="position: relative">
    <div class="backgroundlgn">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>
    <form @submit.prevent="register" class="FormRegist">
      <div class="p-9 py-20">
        <h4>SIGN UP!</h4>

        <div class="row mt-2">
          <div class="col-md-6">
            <label class="labels">Nama Depan</label>
            <input type="text" placeholder="Nama Depan" id="NamaDepan" v-model="registerUser.firstName" required />
          </div>
          <div class="col-md-6">
            <label class="labels">Nama Belakang</label>
            <input type="text" placeholder="Nama Belakang" id="NamaBelakang" v-model="registerUser.lastName" required />
          </div>
        </div>
        <div class="row mt-30">
          <div class="col-md-12">
            <label class="labels">Alamat</label>
            <input type="text" placeholder="Alamat" id="Alamat" v-model="registerUser.address" required />
          </div>
          <div class="col-md-12">
            <label class="labels">Email</label><input type="text" placeholder="Email" id="Email"
              v-model="registerUser.email" required />
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-md-6">
            <label class="labels">Password</label>
            <input type="password" placeholder="Password" id="Password" required v-model="registerUser.password" />
          </div>
          <div class="col-md-6">
            <label class="labels">Ulangi Password</label>
            <input type="password" placeholder="Ulangi Password" id="ulang" required
              v-model="registerUser.confirmPassword" />
          </div>
        </div>
        <div>
          <div class="btn-container">
            <button class="btn">Sign Up</button>
          </div>

          <div class="center">
            <p>Already have account? <NuxtLink to="/login">Login</NuxtLink>
            </p>
          </div>
          <div class="center">
            <p>Register as tourguide? <NuxtLink to="/tourguide-signup">Click here!</NuxtLink>
            </p>
          </div>
        </div>
      </div>

    </form>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "clear",
});
</script>
<style media="screen">
body {
  background-image: url("~/assets/img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

form {
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 5px 35px;
  justify-content: center;
}

form * {
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h4 {
  font-size: 30px;
  font-weight: 500;
  line-height: 50px;
  text-align: center;
}

label {
  display: block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 19px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: #e5e5e5;
}

button {
  margin-top: 25px;
  width: 100%;
  background-color: #ffffff !important;
  color: #080710 !important;
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

<script lang="ts">
import { ref } from 'vue';
import Swal from 'sweetalert2';
import axios from 'axios';

const registerUser = ref({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  confirmPassword: "",

});

const validateRegistration = () => {
  // Check if required fields are filled
  if (
    !registerUser.value.email ||
    !registerUser.value.password ||
    !registerUser.value.firstName ||
    !registerUser.value.lastName ||
    !registerUser.value.confirmPassword
  ) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all required fields!',
    });
    return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(registerUser.value.email)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid email format!',
    });
    return false;
  }

  // Validate the password confirmation
  if (registerUser.value.password !== registerUser.value.confirmPassword) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password and Confirm Password do not match!',
    });
    return false;
  }

  return true;
};

const register = async () => {
  // Ask for confirmation
  const confirmationResult = await Swal.fire({
    icon: 'question',
    title: 'Confirmation',
    text: 'Are you sure you want to register as user?',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  });

  // Check if the user clicked "Yes"
  if (!confirmationResult.isConfirmed) {
    // User canceled registration
    return;
  }

  // Validate registration
  if (!validateRegistration()) {
    // Validation failed
    return;
  }

  // Construct the user object
  const user = {
    email: registerUser.value.email,
    password: registerUser.value.password,
    name: registerUser.value.firstName + ' ' + registerUser.value.lastName,
    address: registerUser.value.address,
    confirmPassword: registerUser.value.confirmPassword,
    role: 'user'
  };

  try {
    // Make the API request
    const response = await axios.post('http://127.0.0.1:8000/api/register', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);


    if (response.data.success) {

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: response.data.message,
      }).then((result) => {
        const router = useRouter();
        router.push("/login")
      });
      // You can handle success behavior here
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: response.data.message,
      });
      // You can handle failure behavior here
    }
  } catch (error) {
    console.error("Error during registration:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error during registration. Please try again later!',
    });
    // You can handle error behavior here
  }
};


export { registerUser, register };

</script>
