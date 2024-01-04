<template>
  <div>
    <div>
      <div class="bg"></div>
    </div>
    <div class="main">
      <div class="sambutan">
        <h1>SOLO TRAVELING BERSAMA TOUR GUIDE!</h1>
        <p>
          eksplor tempat wisata terbaik di indonesia bersama tour guide yang
          berpengalaman
        </p>
      </div>
      <div class="container-alamat">
        <div class="alamat">
          <div class="">
            <p style="margin-bottom: 0; font-size: 25px">Kota</p>
            <input type="text" name="" id="" style="margin-bottom: 0" />
          </div>
          <div class="" style="align-items: center">
            <p style="margin-bottom: 0; font-size: 25px">Destinasi</p>
            <input
              type="text"
              name="destinasi"
              id="destinasi"
              style="margin-bottom: 0"
            />
            <a href="Maps.html">
              <div class="btn-container">
                <button type="button" class="btn" style="margin-top: 18%">
                  Search
                </button>
              </div>
            </a>
          </div>
        </div>
        <div style="padding-top: 1%"></div>
      </div>
    </div>
  </div>

  

  <!-- ----------testimoni---------- -->
  <div class="carousel">
    <div class="card">
      <h6>Ahmad Muflih</h6>
      <p>Web ini sangat membantu ketika saya sedang ingin solo travel</p>
    </div>
    <div class="card">
      <h6>Fransisca Saras</h6>
      <p>GAMA telah membuat saya dapat menjelajahi tempat-tempat yang jauh.</p>
    </div>
    <div class="card">
      <h6>Reza Habibie</h6>
      <p>Wow! Akhirnya saya bisa merasakan perjalanan tanpa batas!</p>
    </div>
    <div class="card">
      <h6>Risma Kurniawan</h6>
      <p>Selain berwisata, Saya juga telah belajar banyak mengenai budaya!</p>
    </div>
    <div class="card">
      <h6>Jonathan Cloe</h6>
      <p>Aku harap semakin banyak kota yang dapat aku eksplor</p>
    </div>
    <div class="card">
      <h6>Reskiawan Noor</h6>
      <p>Para tour guide disini sangat ramah dan bisa diandalkan!!!</p>
    </div>
  </div>
  <!-- -----animasi------- -->
  <section style="padding-top: 10%; padding-bottom: 30%;">
    <div
      style="
        float: left;
        width: 50%;
        justify-content: center;
        padding-left: 10%;
        padding-top: 1%;
        padding-bottom: 6%;
      "
    >
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-treasure-hunt-illustration_52683-82324.jpg?w=740&t=st=1703874311~exp=1703874911~hmac=5abfd9e68b95a645487a1d9f5fa3caa8bbd9ebc73a848b29fbf5148c7d350f1c"
        alt=""
        style="width: 100%"
      />
    </div>

    <article style="padding-top: 15%; padding-left: 53%; padding-right: 10%">
      <h1 class="jargon">
        <b>Jelajahi <span style="color: red">tanpa batas:</span></b>
      </h1>
      <h1 class="jargon"><b>Pendamping Petualangan Virtualmu</b></h1>
    </article>
  </section>

  <!-- Footer -->
  <footer
    class="text-center text-lg-start bg-body-tertiary text-muted"
    data-bs-theme="dark"
  >
    <!-- Section: Social media -->
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <!-- Left -->

      <!-- Left -->

      <!-- Right -->

      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>GAMA
            </h6>
            <p>Nikmati jalan-jalan sendirian bersama TourGuide Virtualmu</p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">PBO</h6>
            <p>
              <a href="#!" class="text-reset">Imelda Tyas Melati</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Fariz Akbar</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Try Prasetyo Adi</a>
            </p>
            <p>
              <a href="#!" class="text-reset">A. muh. Maulana Fausan</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">RPL</h6>
            <p>
              <a href="#!" class="text-reset">Imelda Tyas Melati</a>
            </p>
            <p>
              <a href="#!" class="text-reset">A. Muh. Maulana Fausan</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Novian Early Pradanaputra</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Alamat</h6>
            <p><i class="fas fa-home me-3"></i> indonesia, Bandung</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              Telkomuniversity
            </p>
            <p><i class="fas fa-phone me-3"></i> JL. Telekomunikasi No.1</p>
            <p><i class="fas fa-print me-3"></i> Bandung</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->
  </footer>
  <!-- Footer -->
</template>

<script>
function scrollToNextCard() {
  var carousel = document.querySelector(".carousel");
  var cards = document.querySelectorAll(".card");
  var currentIndex = 0;

  currentIndex = (currentIndex + 1) % cards.length;
  carousel.scrollTo(cards[currentIndex].offsetLeft, 0);
}

// Scroll every 3 seconds
setInterval(scrollToNextCard, 3000);

definePageMeta({
  layout: "noauth",
});
</script>
