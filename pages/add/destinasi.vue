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
                >Kota</label
              >
              <div class="form-group col-sm-9">
                <select
                  class="custom-select my-1 mr-sm-9"
                  id="inlineFormCustomSelectPref"
                  v-model="kota"
                >
                  <option selected>Choose...</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Malang">Malang</option>
                  <option value="Makassar">Makassar</option>
                  <option value="Surabaya">Surabaya</option>
                </select>
              </div>
            </div>

            <div class="form-group row" style="padding-top: 3%">
              <label for="inputHarga" class="col-sm-3 col-form-label"
                >Rentan harga</label
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
                  <div class="align-items-center">
                    <span class="input-group-text">-</span>
                  </div>
                  <div class="input-group">
                    <span class="input-group-text">Rp.</span>
                    <input
                      type="number"
                      class="form-control m-0"
                      aria-label="Amount (to the nearest dollar)"
                      v-model="hargaAkhir"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- <div style="padding-top: 3%">
              <label for="appt" class="col-sm-3 col">Jam Operasional</label>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">Senin</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label class="form-check-label" for="inlineCheckbox2">Selasa</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">Rabu</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
                <label class="form-check-label" for="inlineCheckbox4">Kamis</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" />
                <label class="form-check-label" for="inlineCheckbox5">Jumat</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6" />
                <label class="form-check-label" for="inlineCheckbox6">Sabtu</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox7" value="option7" />
                <label class="form-check-label" for="inlineCheckbox7">Minggu</label>
              </div>

              <label style="padding-left: 2%">Buka</label>
              <input class="form-control" type="time" id="appt" name="appt" />
              <label style="padding-left: 2%">sampai</label>
              <input class="form-control" type="time" id="appt" name="appt" />
            </div> -->

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
<!-- <script lang="ts">
import axios from "axios"
import Swal from "sweetalert2";



definePageMeta({
  name: "default"
})
export default {
  methods: {
    onSubmit() {
      // Assuming you have data properties for your form fields
      const formData = {
        name: this.name,
        alamat: this.alamat,
        kota: this.kota,
        rangeHarga: `${this.hargaAwal} - ${this.hargaAkhir}`,
        deskripsi: this.deskripsi,
        pathFoto: '', // You will update this with the actual pathFoto later
      };

      const writerId = getUserFromCookie().id; // Replace with your actual cookie retrieval logic

      axios.post('http://localhost:9090/destination.save', {
        name: formData.name,
        writer_id: writerId,
        alamat: formData.alamat,
        rate: 0, // Assuming you want to set the initial rate as 0
        rangeHarga: formData.rangeHarga,
        pathFoto: formData.pathFoto,
      })
      .then(response => {
        // Handle success, you may want to show a success message
        console.log(response.data);
        Swal.fire('Success', 'Destination saved successfully!', 'success');
      })
      .catch(error => {
        // Handle error, you may want to show an error message
        console.error('Error saving destination:', error);
        Swal.fire('Error', 'Failed to save destination. Please try again later.', 'error');
      });
    },

const changePhoto = async () => {
  try {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    fileInput.addEventListener('change', async (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const shouldUpdate = await Swal.fire({
          title: 'Confirmation',
          text: 'Are you sure you want to change your photo?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
        });

        if (shouldUpdate.isConfirmed) {
          const reader = new FileReader();
          reader.onload = () => {
            //destinasi.value.pathFoto = reader.result as string; // Update the user's pathFoto with base64 data
          };
          reader.readAsDataURL(file);
          Swal.fire('success', 'Success Update Foto Profile!', 'success')
        }
      }
    });

    fileInput.click();
  } catch (error) {
    console.error('Error changing user photo:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Failed to change user photo. Please try again later.',
    });
  }
};


</script> -->

<script lang="ts">
import axios from "axios";
import Swal from "sweetalert2";

declare const definePageMeta: (meta: { name: string }) => void;
declare const useCookie: (
  cookieName: string
) => { value: { id: string } } | null;

export default {
  data() {
    return {
      name: "",
      alamat: "",
      kota: "",
      hargaAwal: "",
      hargaAkhir: "",
      deskripsi: "",
      pathFoto: "",
      writerID: useCookie("user")?.value?.id,
    };
  },

  methods: {
    async onSubmit() {
      try {
        const formData = {
          name: this.name,
          alamat: this.alamat,
          kota: this.kota,
          rangeHarga: `${this.hargaAwal} - ${this.hargaAkhir}`,
          deskripsi: this.deskripsi,
          pathFoto: this.pathFoto,
          writerId: this.writerID as string,
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

        const fileChangeEvent = (): Promise<Event> =>
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

            const readAsDataURL = (): Promise<string | ArrayBuffer | null> =>
              new Promise((resolve) => {
                reader.onload = () => {
                  resolve(reader.result);
                };
                reader.readAsDataURL(file);
              });

            this.pathFoto = (await readAsDataURL()) as string;
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
