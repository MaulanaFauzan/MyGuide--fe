<template>
  <div>
    <div class="container rounded bg-white mt-6 mb-6">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              :src="user.pathFoto??'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'"
            />
            <span class="font-weight-bold">Nama User</span>
            <span
              ><button
                type="button"
                class="btn btn-link"
                style="padding-top: 10%"
              >
                Ubah Foto
              </button></span
            >
          </div>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-12">
                <label class="labels">Nama</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Nama"
                  v-model="user.name"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Alamat</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Masukkan Alamat"
                  v-model="user.address"
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="enter email"
                  
                  v-model="user.email"
                />
              </div>
            </div>

            <div class="mt-5 text-center">
              <button
                class="btn btn-primary profile-button"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Save Profile
              </button>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style="z-index: 1055"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Simpan Perubahan ?</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      style="margin-bottom: 14px"
                    >
                      Close
                    </button>
                    <a href="index.html"
                      ><button type="button" class="btn btn-primary">
                        Save changes
                      </button></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swal, { SweetAlertResult } from "sweetalert2";
import axios from "axios";
export default {
  data() {
    return {
      user: {
        name: "",
        address: "",
        email: "",
      },
      loading: false,
    };
  },
  mounted() {
    // Call the method to fetch user data when the component is mounted
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        // Show loading indicator
        this.loading = true;
        Swal.fire({
          title: "Loading",
          html: "Fetching user data...",
          allowOutsideClick: false,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
        });
        // Retrieve the token from the cookie
        const token = useCookie("token");

        // Make API request to fetch user data with the token
        const response = await axios.get("http://localhost:9090/user/me", {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });
        
        this.user = response.data.data;

        this.loading = false;

        if (!this.loading) {
          Swal.close();
          Swal.fire({
          icon: "success",
          title: "Success",
          text: "Success fetching data.",
        });
        }

        // Update user data with the response


      } catch (error) {
        // Handle errors, e.g., show an error alert
        console.error("Error fetching user data:", error);

        // Hide loading indicator
        this.loading = false;

        // Show SweetAlert error message
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch user data. Please try again later.",
        });
      }
    },
  },
};
</script>
