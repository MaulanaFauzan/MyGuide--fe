<template>
  <div>
    <div class="main">
      <div class="container-alamat">
        <div class="map">
          <img
            width="1247"
            height="600"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Gedung_Sate_Bandung_Jawa_Barat.jpg/800px-Gedung_Sate_Bandung_Jawa_Barat.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="container container-info-budaya">
        <div class="info-budaya">
          <h2>{{ destination.name }}</h2>
          <p>Sebelum Berkunjung, Pahami Budaya Setempat Dulu Yuk</p>
        </div>
        <div class="des-info-budaya">
          <p>
            Ketika Berkunjung ke Bandung, Wisatawan akan
            <b>jarang mendengar bunyi klakson</b> dari kendaraan terutama ketika
            berada di Trafic Light
          </p>
          <p>
            Beberapa warga bandung masih menggunakan bahasa daerah untuk saling
            berkomunikasi. Berikut kosa kata yang mungkin wisatawan perlukan
            ketika berada di Kota bandung
          </p>
          <ol>
            <li>Terimakasih = Haturnuhun</li>
            <li>Makasih = Nuhun</li>
            <li>Sapaan Pria (sebaya) = Aa`</li>
            <li>Sapaan Wanita (sebaya) = Teteh</li>
            <li>Permisi = Punten</li>
            <li>Silahkan = Mangga</li>
          </ol>
          <p>
            Cara Berbicara warga bandung cenderung lambat dan lembut. Maka
            ketika sedang berbicara, jangan gunakan nada yang tinggi
          </p>
        </div>
      </div>
      <div class="container" style="padding-top: 50px; padding-bottom: 0%">
        <h2 style="text-align: center">TourGuide</h2>
        <div class="row w-100 justify-content-center gx-4">
          <div
            v-for="(user, index) in users"
            :key="index"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="item">
              <img
                :src="
                  user.pathFoto ||
                  'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
                "
                alt="Treble Bar"
                class="w-100"
                style="height: 250px"
              />
              <h2>{{ user.name || "Tour Guide" }}</h2>

              <p class="price">Rp.{{ user.price || "-" }} / day</p>
              <p>
                <i class="fas fa-map-marker-alt"></i> {{ user.dest.name }}
                <span></span>
              </p>
              <router-link
                :to="'/add/transaction?id=' + user.id"
                class="btn btn-success"
                >Order</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      destination: {},
      users: [],
    };
  },
  router: {
    middleware: "auth",
  },
  mounted() {
    this.getAllUsersByRole();
    this.getCurrentDestination();
  },
  methods: {
    async getCurrentDestination() {
      try {
        await axios
          .get("http://localhost:9090/destination/" + this.$route.query.id)
          .then((res) => {
            this.destination = res.data.data;
            console.log(this.destination);
          });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async getAllUsersByRole() {
      try {
        const response = await axios.get(
          "http://localhost:9090/user/getAllByRole",
          {
            params: {
              role: "tourguide",
              id_destination: this.$route.query.id,
            },
          }
        );
        this.users = response.data.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  },
};
</script>

