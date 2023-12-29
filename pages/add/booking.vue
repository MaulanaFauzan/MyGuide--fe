<template>
    
    <div>
      <div class="" style="position: absolute">
        <div class="bg"></div>
      </div>
      <div class="container-pemesanan">
        <div
          class="pemesanan"
          style="padding-top: 2%; padding-bottom: 0%; border-bottom: 0cap"
        >
          <h2 style="color: aliceblue; font-size: 30px">Form Pemesanan</h2>
        </div>
        <form>
          <label for="name" style="color: aliceblue">Nama:</label>
          <input
            type="text"
            id="nama"
            name="nama"
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
            style="
              background-color: rgba(255, 255, 255, 0.07);
              border-radius: 3px;
            "
          />
          <br />
          <div class="btn-container">
            <button
              id="btn"
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Pesan TourGuide
            </button>
          </div>
        </form>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img
              src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
              alt="Treble Bar"
              class="w-100"
            />
            <h2><b>Try Prasetyo</b></h2>
            <p class="rating">4.8</p>
            <p class="price">Rp.460k / day</p>
            <p>Bandung</p>
            <p>Bandung adalah tempat kita menemukan cinta</p>
  
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary">cari Lain</button>
              <a href="Maps.html"
                ><button type="button" class="btn btn-primary">Pilih</button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div id="body">
      <div id="chat-circle" class="btn btn-raised">
        <div id="chat-overlay"></div>
        <i class="material-icons">chat</i>
      </div>
  
      <div class="chat-box">
        <div class="chat-box-header">
          ChatBot
          <span class="chat-box-toggle"><i class="material-icons">close</i></span>
        </div>
        <div class="chat-box-body">
          <div class="chat-box-overlay"></div>
          <div class="chat-logs"></div>
          <!--chat-log -->
        </div>
        <div class="chat-input">
          <form>
            <input type="text" id="chat-input" placeholder="Send a message..." />
            <button type="submit" class="chat-submit" id="chat-submit">
              <i class="material-icons">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  export default {
    // Component options
  }
  </script>
  