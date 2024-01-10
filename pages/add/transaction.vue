<template>
  <div class="container p-5 mt-5 bg-white">
    <form @submit.prevent="transaction">
      <div class="row">
        <div class="col-md-3">
          <img
            class="w-100"
            :src="tourguide.pathFoto"
            alt=""
            srcset=""
          />
        </div>
        <div class="col-md-9">
          <table class="table align-middle h-100">
            <tbody>
              <tr>
                <td>Nama Tourguide</td>
                <td>:</td>
                <td>{{ tourguide.name }}</td>
              </tr>
              <tr>
                <td>Rate Tourgouide</td>
                <td>:</td>
                <td>{{ $formatCurrency(tourguide.price) }}</td>
              </tr>
              <tr>
                <td>Destinasi</td>
                <td>:</td>
                <td>{{ tourguide.dest?.name }}</td>
              </tr>
              <tr>
                <td>Tanggal Trip</td>
                <td>:</td>
                <td>
                  <div v-if="!validDate" class="alert alert-danger w-100" role="alert">
                    Tanggal Tidak Valid
                  </div>
                  <div class="d-flex">
                    <input
                      @change="calculatePrice"
                      v-model="form.start_date"
                      class="form-control"
                      type="date"
                      required
                    />
                    <span class="mx-3"><b>Sampai</b></span>
                    <input
                      @change="calculatePrice"
                      v-model="form.end_date"
                      class="form-control"
                      type="date"
                      required
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Total Harga</td>
                <td>:</td>
                <td>
                  <b>{{ $formatCurrency(price) }}</b>
                </td>
              </tr>
              <tr>
                <td><button :disabled="!validDate" class="btn bg-success text-white">Book</button></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      tourguide: {},
      form: {
        start_date: "",
        end_date: "",
      },
      price: 0,
      validDate: true,
    };
  },
  mounted() {
    this.getTourguide();
  },
  methods: {
    calculatePrice() {
      if (this.form.start_date && this.form.end_date) {
        const distance = this.$calculateDayDistance(
          this.form.start_date,
          this.form.end_date
        );
        if (distance > 0) {
          this.price = distance * this.tourguide.price;
          this.validDate = true;
        }else{
            this.price = 0
            this.validDate=false
        }
      }
    },
    async getTourguide() {
      const response = await axios.get(
        "http://localhost:9090/user/detail/" + this.$route.query.id
      );
      this.tourguide = response.data.data;
    },
    async transaction() {
      const token = useCookie("token");
      const response = await axios.post(
        "http://localhost:9090/transaction/",
        {
          guide_id: this.$route.query.id,
          start_date: this.form.start_date,
          end_date: this.form.end_date,
          price_rate: this.tourguide.price
        },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
            "Content-Type": "application/json", // Adjust the content type based on your API requirements
          },
        }
      );
          Swal.fire("Success", "Order booking telah dibuat anda akan diarahkan ke halaman bukti transaksi!", "success").then(()=>{
            this.$router.push("/buktiPembayaran?id="+response.data.data.id);
          });
       
    },
  },
};
</script>