<template>
  <div>
    <div class="container-fluid">
      <form @submit.prevent="save" style="padding-top: 5%; padding-left: 5%">
        <div class="form-group row">
          <label for="inputTourGuide" class="col-sm-2 col-form-label"
            >Nama Tour Guide</label
          >
          <div class="col-sm-9">
            <input
              required
              type="text"
              class="form-control"
              id="inputTourGuide"
              placeholder="TourGuide"
            />
          </div>
        </div>

        <div class="form-group row" style="padding-top: 3%">
          <label for="inputAlamat" class="col-sm-2 col-form-label"
            >Alamat</label
          >
          <div class="col-sm-9">
            <input
              required
              type="text"
              class="form-control"
              id="inputAlamat"
              placeholder="Alamat"
            />
          </div>
        </div>

        <div class="form-group row" style="padding-top: 3%">
          <label for="inputAlamat" class="col-sm-2 col-form-label"
            >Destinasi</label
          >
          <div class="col-sm-9">
            <model-select
              class="form-control"
              ref="select"
              :options="options"
              v-model="item"
              placeholder="Pilih Destinasi Guide berada"
            >
            </model-select>
            
          </div>
        </div>

        <div class="form-group row" style="padding-top: 3%">
          <label for="inputHarga" class="col-sm-2 col-form-label"
            >Harga Jasa</label
          >
          <div class="col-sm-9">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <span class="input-group-text">Rp.</span>
              </div>
              <input type="number" class="form-control" />
              <span class="input-group-text">Perhari</span>
            </div>
          </div>
        </div>

        <div class="form-group row" style="padding-top: 3%">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Deskripsi</label
          >
          <div class="col-sm-9">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div class="form-group row" style="padding-top: 3">
          <label for="exampleFormControlFile1">Masukkan Gambar</label>
          <div class="col-sm-9">
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </div>

        <div class="btn-container" style="padding-top: 3%; padding-bottom: 4%">
          <button
            id="btn"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Submit
          </button>
        </div>
      </form>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import { ModelSelect } from "vue-search-select";
import axios from "axios";
import "vue-search-select/dist/VueSearchSelect.css";

export default {
  components: { ModelSelect },
  data() {
    return {
      options: [],
      item: "",
    };
  },
  mounted() {
    this.getAllDestination();
  },
  methods: {
    async getAllDestination() {
      try {
        const response = await axios.get("http://localhost:9090/destination/", {
          params: {
            limit: "1000",
          },
        });
        const destinations = response.data.data;
        destinations.forEach((el) => {
          this.options.push({ value: el.id, text: el.name });
        });
      } catch (error) {
        Swal.fire("error", error, "error");
      }
    },
  },
};
</script>