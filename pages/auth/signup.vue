<template>
  <div>
    <div class="backgroundlgn">
      <div class="shape"></div>
      <div class="shape"></div>
    </div>

    <div class="p-3 py-4">
      <form>
        <h4>SIGN UP!</h4>

        <div class="row mt-2">
          <div class="col-md-6">
            <label class="labels">Nama Depan</label>
            <input type="text" placeholder="Nama Depan" id="NamaDepan" />
          </div>
          <div class="col-md-6">
            <label class="labels">Nama Belakang</label>
            <input type="text" placeholder="Nama Belakang" id="NamaBelakang" />
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-12">
            <label class="labels">Alamat</label>
            <input type="text" placeholder="Alamat" id="Alamat" />
          </div>
          <div class="col-md-12">
            <label class="labels">Email</label
            ><input type="text" placeholder="Email" id="Email" />
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-md-6">
            <label class="labels">Password</label>
            <input type="text" placeholder="Password" id="Password" />
          </div>
          <div class="col-md-6">
            <label class="labels">Ulang Password</label>
            <input type="text" placeholder="Ulang Password" id="ulang" />
          </div>
        </div>

        <a href="login.html"
          ><div class="btn-container">
            <button type="button" class="btn">Sign Up</button>
          </div></a
        >
      </form>
    </div>
  </div>
</template>
