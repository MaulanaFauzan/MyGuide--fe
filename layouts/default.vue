<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" style="padding-left: 1%">GAMA</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar" style="padding-right: 1%">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/home/"> Home</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/home/maps"> Maps</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/home/profile">
                  Profile</NuxtLink
                >
              </li>
              <li v-if="user.role == 'tourguide' || user.role == 'admin'">
                <NuxtLink class="nav-link" to="/add/destinasi">
                  Tambahkan Destinasi</NuxtLink
                >
              </li>
              <li v-if="user.role == 'user' || user.role == 'admin'">
                <NuxtLink class="nav-link" to="/add/booking"> Booking</NuxtLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
const user = useCookie("user");

const logout = () => {
  logUserOut();
};
</script>
