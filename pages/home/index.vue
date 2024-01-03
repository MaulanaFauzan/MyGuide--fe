<template>
    <div>
        <div class="">
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
                        <input type="text" name="destinasi" id="destinasi" style="margin-bottom: 0" />
                        <a href="Maps.html">
                            <div class="btn-container">
                                <button type="button" class="btn" style="margin-top: 18%;">Search</button>
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
                        <div v-for="item in 3" class="col-12 col-md-6 col-lg-4">
                            <div class="item">
                                <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                                    alt="Treble Bar" class="w-100" style="height: 250px;" />
                                <h2>Try Prasetyo</h2>
                                <p class="rating">4.8</p>
                                <p class="price">Rp.460k / day</p>
                                <p>Bandung</p>
                                <p>Bandung adalah tempat kita menemukan cinta</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container" style="padding-top: 5%" id="BestDestination">
                    <h2 style="text-align: center">Best Destination</h2>
                    <h6 style="text-align: center">Temukan destinasi Impianmu</h6>

                    <div class="row gx-4 gy-4">
                        <div v-for="item in 10" class="col-12 col-md-6 col-lg-4">
                            <div class="item">
                                <img src="https://images.unsplash.com/photo-1608814453525-d325f2ff6b1f?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Tokojawa" class="w-100" style="height: 250px;" obj />
                                <h2>Kopi Toko Djawa</h2>
                                <p class="rating">5.0</p>
                                <p class="price">Start From Rp.18k - Rp.30k</p>
                                <div style="padding-top: 5%">
                                    <button type="button" class="btn btn-primary text-white">
                                        Selengkapnya
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- -------------modal---------------- -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fHww"
                                alt="Treble Bar" class="w-100 img-fluid" />
                            <h2><b>Try Prasetyo</b></h2>
                            <p class="rating">4.8</p>
                            <p class="price">Rp.460k / day</p>
                            <p>Bandung</p>
                            <p>Bandung adalah tempat kita menemukan cinta</p>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary">
                                    cari Lain
                                </button>
                                <a href="Maps.html"><button type="button" class="btn btn-primary">
                                        Pilih
                                    </button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <footer>
        <p>footer</p>
      </footer> -->
        </div>
    </div>
</template>

<script>

definePageMeta({
    // this should match the name of the file inside the middleware directory 
    layout: 'default'
})
</script>
