<template>
  <div>
    <div>
      <div class="container-fluid">
        <div class="main">
          <form
            @submit.prevent="onSubmit"
            style="padding-top: 5%; padding-left: 5%"
          >
            <div class="form-group row">
              <label for="inputDestinasi" class="col-sm-3 col-form-label"
                >Nama Destinasi</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="inputDestinasi"
                  placeholder="Destinasi"
                  v-model="name"
                />
              </div>
            </div>

            <div class="form-group row" style="padding-top: 3%">
              <label for="inputAlamat" class="col-sm-3 col-form-label"
                >Alamat</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="inputAlamat"
                  placeholder="Alamat"
                  v-model="alamat"
                />
              </div>
            </div>

            <div class="form-group row" style="padding-top: 3%">
              <label for="inputEmail3" class="col-sm-3 col-form-label"
                >Lokasi</label
              >
              <div class="form-group col-sm-9">Masukan lokasi</div>
              <ClientOnly>
                <MapPicker @lnglt="getLongLat"/>
              </ClientOnly>
              <input type="text" readonly required :value="latitude">
              <input type="text" readonly required :value="longitude">
            </div>

            <div class="form-group row" style="padding-top: 3%">
              <label for="inputHarga" class="col-sm-3 col-form-label"
                >Harga</label
              >
              <div class="col-sm-9">
                <div class="d-flex">
                  <div class="input-group">
                    <span class="input-group-text">Rp.</span>
                    <input
                      type="number"
                      class="form-control m-0"
                      aria-label="Amount (to the nearest dollar)"
                      v-model="hargaAwal"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row" style="padding-top: 3%">
              <label for="inputPassword3" class="col-sm-3 col-form-label"
                >Deskripsi</label
              >
              <div class="col-sm-9">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="deskripsi"
                ></textarea>
              </div>
            </div>

            <div class="form-group row" style="padding-top: 3">
              <div class="col-sm-9">
                <button
                  type="button"
                  class="btn btn-link text-white"
                  style="padding-top: 1%"
                  @click="changePhoto()"
                >
                  Masukkan Gambar
                </button>
              </div>
            </div>

            <div
              class="btn-container"
              style="padding-top: 3%; padding-bottom: 4%"
            >
              <button id="btn" type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      name: "",
      alamat: "",
      longitude: "",
      latitude: "",
      hargaAwal: "",
      hargaAkhir: "",
      deskripsi: "",
      pathFoto: "",
      writerID: useCookie("user")?.value?.id,
    };
  },

  methods: {
    getLongLat(e){
      this.longitude = e.lng
      this.latitude = e.lat
    },
    async onSubmit() {
      try {
        const formData = {
          name: this.name,
          alamat: this.alamat,
          kota: this.kota,
          rangeHarga: `${this.hargaAwal} - ${this.hargaAkhir}`,
          deskripsi: this.deskripsi,
          pathFoto: this.pathFoto,
          writerId: this.writerID,
        };

        await axios.post("http://localhost:9090/destination/save", formData);

        Swal.fire("Success", "Destination saved successfully!", "success");
      } catch (error) {
        console.error("Error saving destination:", error);
        Swal.fire(
          "Error",
          "Failed to save destination. Please try again later.",
          "error"
        );
      }
    },

    async changePhoto() {
      try {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";

        const fileChangeEvent = () =>
          new Promise((resolve) => {
            fileInput.addEventListener("change", resolve, { once: true });
            fileInput.click();
          });

        await fileChangeEvent();

        const file = fileInput.files?.[0];

        if (file) {
          const shouldUpdate = await Swal.fire({
            title: "Confirmation",
            text: "Are you sure you want to upload this photo?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
          });

          if (shouldUpdate.isConfirmed) {
            const reader = new FileReader();

            const readAsDataURL = () =>
              new Promise((resolve) => {
                reader.onload = () => {
                  resolve(reader.result);
                };
                reader.readAsDataURL(file);
              });

            this.pathFoto = await readAsDataURL();
            Swal.fire("Success", "Success Upload Photo!", "success");
          }
        }
      } catch (error) {
        console.error("Error changing user photo:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to upload photo. Please try again later.",
        });
      }
    },
  },
};
</script>
