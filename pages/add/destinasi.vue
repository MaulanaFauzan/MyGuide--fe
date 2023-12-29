<template>
  <div>
    <div>
      <div class="container-fluid">
        <div class="main">
          <form style="padding-top: 5%; padding-left: 5%">
            <div class="form-group row">
              <label for="inputDestinasi" class="col-sm-2 col-form-label"
                >Nama Destinasi</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  id="inputDestinasi"
                  placeholder="Destinasi"
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
              <label for="inputEmail3" class="col-sm-2 col-form-label"
                >Kota</label
              >
              <div class="form-group col-sm-9">
                <select
                  class="custom-select my-1 mr-sm-9"
                  id="inlineFormCustomSelectPref"
                >
                  <option selected>Choose...</option>
                  <option value="1">Bandung</option>
                  <option value="2">Yogyakarta</option>
                  <option value="3">Malang</option>
                  <option value="4">Makassar</option>
                  <option value="5">Surabaya</option>
                </select>
              </div>
            </div>

            <div class="form-group row" style="padding-top: 3%">
              <label for="inputHarga" class="col-sm-2 col-form-label"
                >Rentan harga</label
              >
              <div class="col-sm-9">
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Rp.</span>
                  </div>
                  <input type="number" class="form-control" />
                  <span class="input-group-text">-</span>
                  <span class="input-group-text">Rp.</span>
                  <input type="number" class="form-control" />
                </div>
              </div>
            </div>

            <div style="padding-top: 3%">
              <label for="appt" class="col-sm-2 col">Jam Operasional</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineCheckbox1"
                  >Senin</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox2"
                  value="option2"
                />
                <label class="form-check-label" for="inlineCheckbox2"
                  >Selasa</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox3"
                  value="option3"
                />
                <label class="form-check-label" for="inlineCheckbox3"
                  >Rabu</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox4"
                  value="option4"
                />
                <label class="form-check-label" for="inlineCheckbox4"
                  >Kamis</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox5"
                  value="option5"
                />
                <label class="form-check-label" for="inlineCheckbox5"
                  >Jumat</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox6"
                  value="option6"
                />
                <label class="form-check-label" for="inlineCheckbox6"
                  >Sabtu</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox7"
                  value="option7"
                />
                <label class="form-check-label" for="inlineCheckbox7"
                  >Minggu</label
                >
              </div>

              <label style="padding-left: 2%">Buka</label>
              <input type="time" id="appt" name="appt" />
              <label style="padding-left: 2%">sampai</label>
              <input type="time" id="appt" name="appt" />
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

            <div
              class="btn-container"
              style="padding-top: 3%; padding-bottom: 4%"
            >
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
        </div>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </div>
  </div>
</template>
