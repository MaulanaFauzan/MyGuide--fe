<template>
  <div>
    <div class="">
      <div class="bg"></div>
    </div>
    <div class="main">
      <div class="sambutan">
        <h1>SOLO TRAVELING BERSAMA TOUR GUIDE!</h1>
        <p>
          eksplor tempat wisata terbaik di indonesia bersama tour guide yang
          berpengalaman
        </p>
      </div>
      <div class="container-alamat">
        <div class="alamat">
          <div class="srch">
            <p style="margin-bottom: 0; font-size: 25px">Kota</p>
            <input type="text" name="" id="" style="margin-bottom: 0" />
          </div>
          <div class="srch" style="align-items: center">
            <p style="margin-bottom: 0; font-size: 25px">Destinasi</p>
            <input type="text" name="destinasi" id="destinasi" style="margin-bottom: 0" />
            <a href="Maps.html">
              <div class="btn-container">
                <button type="button" class="btn" style="margin-top: 18%">
                  Search
                </button>
              </div>
            </a>
          </div>
        </div>
        <div style="padding-top: 1%"></div>
      </div>

      <div class="container-fluid" id="TourGuideProfile">
        <div class="container" style="padding-top: 50px; padding-bottom: 0%">
          <h2 style="text-align: center">Best TourGuide</h2>
          <h6 style="text-align: center">TourGuide terbaik kami</h6>
          <div class="row w-100 justify-content-center gx-4">
            <div v-for="(user, index) in users" :key="index" class="col-12 col-md-6 col-lg-4">
              <div class="item">
                <img :src="user.pathFoto ||
              'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
              " alt="Treble Bar" class="w-100" style="height: 250px" />
                <h2>{{ user.name || "Tour Guide" }}</h2>

                <p class="price">Rp.{{ user.price || "-" }} / day</p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> {{ user.dest?.name }}
                  <span></span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container" style="padding-top: 5%" id="BestDestination">
          <h2 style="text-align: center">Best Destination</h2>
          <h6 style="text-align: center">Temukan destinasi Impianmu</h6>

          <div class="row gx-4 gy-4">
            <div v-for="(destination, index) in destinations" :key="index" class="col-12 col-md-6 col-lg-4">
              <div class="item">
                <img
                  :src="destination.pathFoto || 'https://images.unsplash.com/photo-1608814453525-d325f2ff6b1f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
                  alt="Tokojawa" class="w-100" style="height: 250px" obj />
                <h2>{{ destination.name }}</h2>
                <p>{{ destination.deskripsi }}</p>
                <p class="price">{{ destination.price }}</p>
                <div style="padding-top: 5%">
                  <router-link :to="'home/selengkapnya?id=' + destination.id" class="btn btn-primary text-white">
                    Selengkapnya
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- -------------modal---------------- -->
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <img
                src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                alt="Treble Bar" class="w-100 img-fluid" />
              <h2><b>Try Prasetyo</b></h2>
              <p class="rating">4.8</p>
              <p class="price">Rp.460k / day</p>
              <p>Bandung</p>
              <p>Bandung adalah tempat kita menemukan cinta</p>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary">
                  cari Lain
                </button>
                <a href="Maps.html"><button type="button" class="btn btn-primary">
                    Pilih
                  </button></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <footer>
        <p>footer</p>
      </footer> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

definePageMeta({
  // this should match the name of the file inside the middleware directory
  layout: "default",
});

export default {
  data() {
    return {
      users: [], // Store the retrieved users here,
      destinations: [],
    };
  },
  mounted() {
    // Fetch users when the component is mounted
    // this.getAllUsersByRole();
    // this.getAllDestination();
    this.me();
    navigator.geolocation.getCurrentPosition(this.showPosition);
  },
  methods: {
    showPosition(position) {
      console.log(position.coords);
    },
    async me() {
      try {
        const token = useCookie('token');

        const response = await axios.get('http://127.0.0.1:8000/api/me', {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        });

        this.users = response.data.data;
        console.log(this.users);
      } catch (error) {
        Swal.fire("error", error, "error");
      }
    },
    async getAllUsersByRole() {
      try {
        const response = await axios.get(
          "http://localhost:9090/user/getAllByRole",
          {
            params: {
              role: "tourguide",
              limit: "3",
            },
          }
        );
        this.users = response.data.data;
        console.log(this.users);
      } catch (error) {
        Swal.fire("error", error, "error");
      }
    },
    async getAllDestination() {
      try {
        const response = await axios.get("http://localhost:9090/destination/", {
          params: {
            limit: "9", // Specify the role you want to retrieve
          },
        });

        this.destinations = response.data.data;
      } catch (error) {
        Swal.fire("error", error, "error");
      }
    },
  },
};
</script>
