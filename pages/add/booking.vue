<template>
  <div>
    <div class="" style="position: absolute;">
      <div class="bg"></div>
    </div>
    <div class="container-pemesanan">
      <div
        class="pemesanan"
        style="padding-top: 1%; padding-bottom: 0%; border-bottom: 0cap"
      >
        <h2 style="color: aliceblue; font-size: 30px">Form Pemesanan</h2>
      </div>
      <form class="bookForm" @submit.prevent="onSubmit">
        <label for="name" style="color: aliceblue">Nama:</label>
        <input
          type="text"
          id="nama"
          name="nama"
          v-model="form.nama"
          style="
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
          "
        />
        <br />
        <label for="phone" style="color: aliceblue">Nomor Telepon:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          v-model="form.phone"
          style="
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
          "
        />
        <br />
        <label for="destination" style="color: aliceblue">Kota Tujuan:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          v-model="form.destination"
          style="
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
          "
        />
        <br />
        <label for="pickupDate" style="color: aliceblue"
          >Tanggal Perjalanan:</label
        >
        <input
          type="date"
          id="pickupDate"
          name="pickupDate"
          v-model="form.pickupDate"
          style="
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
          "
        />
        <br />
        <label for="pickupHour" style="color: aliceblue">Jumlah Hari:</label>
        <input
          type="number"
          id="pickupHour"
          name="pickupHour"
          min="1"
          max="12"
          v-model="form.pickupHour"
          style="
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
          "
        />
        <br />
        <label for="email" style="color: aliceblue">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="form.email"
          style="
            background-color: rgba(255, 255, 255, 0.07);
            border-radius: 3px;
          "
        />
        <br />
        <div class="btn-container">
          <button type="submit">Pesan TourGuide</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        nama: "",
        phone: "",
        destination: "",
        pickupDate: "",
        pickupHour: "",
        email: "",
      },
      token: useCookie("token"),
    };
  },
  methods: {
    async onSubmit() {
      const formSubmit = {
        destination_id: null,
        destination_name: null,
        end_date: this.form.pickupDate,
        guide_id: null,
      
        price_rate: 0,
        rating: 0,
        start_date: this.form.pickupDate,
        updated_at: null,
        user_id: useCookie("user").value.id,
        user_name: useCookie("user").value.name,
      };
      const isConfirmed = await Swal.fire({
        title: "Konfirmasi Pemesanan",
        text: "Apakah anda yakin ingin memesan tour guide ini?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, pesan!",
      });

      if (isConfirmed.isConfirmed) {
        try {
          const response = await axios.post(
            "http://localhost:9090/transaction/save",
            formSubmit,
            {
              headers: {
                Authorization: `Bearer ${this.token}`,
              },
            }
          );
          console.log("respon", response);
          if (response.data) {
            Swal.fire("Berhasil!", "Transaction Successfully Saved", "success");
            this.$router.push("/home");
          } else {
            Swal.fire("Gagal!", "Transaction Failed to Save", "error");
          }
        } catch (error) {
          console.log(error);
          Swal.fire("Error!", "An error occurred", "error");
        }
      }
    },
  },
};
</script>
