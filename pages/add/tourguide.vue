<template>
  <div>
    <div class="container-fluid">
      <form style="padding-top: 5%; padding-left: 5%">
        <div class="form-group row">
          <label for="inputTourGuide" class="col-sm-2 col-form-label"
            >Nama Tour Guide</label
          >
          <div class="col-sm-9">
            <input
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
              type="text"
              class="form-control"
              id="inputAlamat"
              placeholder="Alamat"
            />
          </div>
        </div>

        <div class="form-group row" style="padding-top: 3%">
          <div class="form-group col-sm-9">
            <SelectS :options="options" label="Select an option" />
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
export default {
  data(){
    return {
      options:[
        {label:"DAN"},{label:"Cow"}
      ]
      };
  }
}
</script>