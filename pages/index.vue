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

      <div class="container-fluid" id="TourGuideProfile">
        <div class="container" style="padding-top: 50px; padding-bottom: 0%">
          <h2 style="text-align: center">Best TourGuide</h2>
          <h6 style="text-align: center">TourGuide terbaik kami</h6>
          <div class="row w-100 justify-content-center gx-4">
            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Treble Bar"
                  class="w-100"
                />
                <h2>Faris Akbar</h2>
                <p class="rating">5.0</p>
                <p class="price">Rp.500k / day</p>
                <p>Malang</p>
                <p>Mari menikmati keindahan alam kota malang</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                  alt="Treble Bar"
                  class="w-100"
                />
                <h2>Try Prasetyo</h2>
                <p class="rating">4.8</p>
                <p class="price">Rp.460k / day</p>
                <p>Bandung</p>
                <p>Bandung adalah tempat kita menemukan cinta</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Treble Bar"
                  class="w-100"
                />
                <h2>Imelda Kiyan</h2>
                <p class="rating">4.8</p>
                <p class="price">Rp.400k / day</p>
                <p>Yogyakarta</p>
                <p>Nikmati wisata menyenangkan di kota Yogyakarta ini</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container" style="padding-top: 5%" id="BestDestination">
          <h2 style="text-align: center">Best Destination</h2>
          <h6 style="text-align: center">Temukan destinasi Impianmu</h6>

          <div class="row gx-4 gy-4">
            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://images.unsplash.com/photo-1608814453525-d325f2ff6b1f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tokojawa"
                  class="w-100"
                  obj
                />
                <h2>Kopi Toko Djawa</h2>
                <p class="rating">5.0</p>
                <p class="price">Start From Rp.18k - Rp.30k</p>
                <p>Bandung</p>
                <div style="padding-top: 5%">
                  <button type="button" class="btn btn-outline-dark">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
                  alt="Tokojawa"
                  class="w-100"
                />
                <h2>FarmHouse Bandung</h2>
                <p class="rating">5.0</p>
                <p class="price">Start From Rp.18k - Rp.30k</p>
                <p>Bandung</p>
                <div style="padding-top: 5%">
                  <button type="button" class="btn btn-outline-dark">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
                  alt="Tokojawa"
                  class="w-100"
                />
                <h2>FarmHouse Bandung</h2>
                <p class="rating">5.0</p>
                <p class="price">Start From Rp.18k - Rp.30k</p>
                <p>Bandung</p>
                <div style="padding-top: 5%">
                  <button type="button" class="btn btn-outline-dark">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
                  alt="Tokojawa"
                  class="w-100"
                />
                <h2>FarmHouse Bandung</h2>
                <p class="rating">5.0</p>
                <p class="price">Start From Rp.18k - Rp.30k</p>
                <p>Bandung</p>
                <div style="padding-top: 5%">
                  <button type="button" class="btn btn-outline-dark">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
                  alt="Tokojawa"
                  class="w-100"
                />
                <h2>FarmHouse Bandung</h2>
                <p class="rating">5.0</p>
                <p class="price">Start From Rp.18k - Rp.30k</p>
                <p>Bandung</p>
                <div style="padding-top: 5%">
                  <button type="button" class="btn btn-outline-dark">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-4">
              <div class="item">
                <img
                  src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
                  alt="Tokojawa"
                  class="w-100"
                />
                <h2>Kopi Toko Djawa</h2>
                <p class="rating">5.0</p>
                <p class="price">Start From Rp.18k - Rp.30k</p>
                <p class="kota">Bandung</p>
                <div style="padding-top: 5%">
                  <button type="button" class="btn btn-outline-dark">
                    Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- -------------modal---------------- -->
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
                class="w-100 img-fluid"
              />
              <h2><b>Try Prasetyo</b></h2>
              <p class="rating">4.8</p>
              <p class="price">Rp.460k / day</p>
              <p>Bandung</p>
              <p>Bandung adalah tempat kita menemukan cinta</p>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary">
                  cari Lain
                </button>
                <a href="Maps.html">
                  <button type="button" class="btn btn-primary">Pilih</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-alamat">
    <div class="alamat">
      <div class="">
        <p style="margin-bottom: 0; font-size: 25px">Kota</p>
        <input
          type="text"
          name=""
          id=""
          style="margin-bottom: 0; padding: 10px; border-radius: 4px"
        />
      </div>
      <div class="" style="align-items: center">
        <p style="margin-bottom: 0; font-size: 25px">Destinasi</p>
        <input
          type="text"
          name="destinasi"
          id="destinasi"
          style="margin-bottom: 0; padding: 10px; border-radius: 4px"
        />
        <a href="Maps.html"
          ><div class="btn-container">
            <button type="button" class="btn">Search</button>
          </div></a
        >
      </div>
    </div>
    <div style="padding-top: 1%"></div>
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
  <section>
    <div
      style="
        float: left;
        width: 50%;
        justify-content: center;
        padding-left: 10%;
        padding-top: 1%;
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

  <div class="container-fluid" id="TourGuideProfile">
    <div class="container" style="padding-top: 50px; padding-bottom: 0%">
      <div class="row w-100 justify-content-center gx-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Treble Bar"
              class="w-100"
            />
            <h2>Faris Akbar</h2>
            <p class="rating">5.0</p>
            <p class="price">Rp.500k / day</p>
            <p>Malang</p>
            <p>Mari menikmati keindahan alam kota malang</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
              alt="Treble Bar"
              class="w-100"
            />
            <h2>Try Prasetyo</h2>
            <p class="rating">4.8</p>
            <p class="price">Rp.460k / day</p>
            <p>Bandung</p>
            <p>Bandung adalah tempat kita menemukan cinta</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://images.unsplash.com/photo-1463725876303-ff840e2aa8d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Treble Bar"
              class="w-100"
            />
            <h2>Imelda Kiyan</h2>
            <p class="rating">4.8</p>
            <p class="price">Rp.400k / day</p>
            <p>Yogyakarta</p>
            <p>Nikmati wisata menyenangkan di kota Yogyakarta ini</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container" style="padding-top: 0%" id="BestDestination">
      <div class="row gx-4">
        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://images.unsplash.com/photo-1608814453525-d325f2ff6b1f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Tokojawa"
              class="w-100"
              obj
            />
            <h2>Kopi Toko Djawa</h2>
            <p class="rating">5.0</p>
            <p class="price">Start From Rp.18k - Rp.30k</p>
            <div style="padding-top: 5%">
              <button type="button" class="btn btn-outline-dark">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
              alt="Tokojawa"
              class="w-100"
            />
            <h2>FarmHouse Bandung</h2>
            <p class="rating">5.0</p>
            <p class="price">Start From Rp.18k - Rp.30k</p>
            <div style="padding-top: 5%">
              <button type="button" class="btn btn-outline-dark">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
              alt="Tokojawa"
              class="w-100"
            />
            <h2>FarmHouse Bandung</h2>
            <p class="rating">5.0</p>
            <p class="price">Start From Rp.18k - Rp.30k</p>
            <div style="padding-top: 5%">
              <button type="button" class="btn btn-outline-dark">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
              alt="Tokojawa"
              class="w-100"
            />
            <h2>FarmHouse Bandung</h2>
            <p class="rating">5.0</p>
            <p class="price">Start From Rp.18k - Rp.30k</p>
            <div style="padding-top: 5%">
              <button type="button" class="btn btn-outline-dark">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
              alt="Tokojawa"
              class="w-100"
            />
            <h2>FarmHouse Bandung</h2>
            <p class="rating">5.0</p>
            <p class="price">Start From Rp.18k - Rp.30k</p>
            <div style="padding-top: 5%">
              <button type="button" class="btn btn-outline-dark">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-md-4">
          <div class="item">
            <img
              src="https://manual.co.id/wp-content/uploads/2021/01/manual_kopi-toko-djawa-6-980x719.jpg"
              alt="Tokojawa"
              class="w-100"
            />
            <h2>Kopi Toko Djawa</h2>
            <p class="rating">5.0</p>
            <p class="price">Start From Rp.18k - Rp.30k</p>
            <div style="padding-top: 5%">
              <button type="button" class="btn btn-outline-dark">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- -------------modal---------------- -->
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
            class="w-100 img-fluid"
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
