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
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
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
                <div class="col-md-6">
                  <label class="labels">Nama Depan</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="Nama Depan"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Nama Belakang</label
                  ><input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="Nama Belakang"
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
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Email</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="enter email id"
                    value=""
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Country</label
                  ><input
                    type="text"
                    class="form-control"
                    placeholder="country"
                    value=""
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">State/Region</label
                  ><input
                    type="text"
                    class="form-control"
                    value=""
                    placeholder="state"
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
                style="z-index: 1055;"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header"  >
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
                        style="margin-bottom:14px;"
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

