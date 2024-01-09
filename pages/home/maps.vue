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
                    <div class="srch">
                        <p style="margin-bottom: 0; font-size: 25px">Kota</p>
                        <input type="text" name="" id="" style="margin-bottom: 0" />
                    </div>
                    <div class="srch" style="align-items: center">
                        <p style="margin-bottom: 0; font-size: 25px">Destinasi</p>
                        <input type="text" name="destinasi" id="destinasi" style="margin-bottom: 0" />
                        <a href="Maps.html">
                            <div class="btn-container">
                                <button type="button" class="btn" style="margin-top: 18%;">Search</button>
                            </div>
                        </a>
                    </div>
                </div>
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3084698590833!2d107.63588297462859!3d-6.972886868276794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9b3ccd961b7%3A0x1ec8ad28e2a2498d!2sPermata%20Buah%20Batu!5e0!3m2!1sid!2sid!4v1701156355869!5m2!1sid!2sid"
            width="1247"
            height="600"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
      </div>
      <div class="container-info-budaya">
        <div class="info-budaya">
          <h2>Informasi Budaya</h2>
          <p>Sebelum Berkunjung, Pahami Budaya Setempat Dulu Yuk</p>
        </div>
        <div class="des-info-budaya">
          <p>
            Ketika Berkunjung ke Bandung, Wisatawan akan
            <b>jarang mendengar bunyi klakson</b> dari kendaraan terutama ketika
            berada di Trafic Light
          </p>
          <p>
            Beberapa warga bandung masih menggunakan bahasa daerah untuk saling
            berkomunikasi. Berikut kosa kata yang mungkin wisatawan perlukan
            ketika berada di Kota bandung
          </p>
          <ol>
            <li>Terimakasih = Haturnuhun</li>
            <li>Makasih = Nuhun</li>
            <li>Sapaan Pria (sebaya) = Aa`</li>
            <li>Sapaan Wanita (sebaya) = Teteh</li>
            <li>Permisi = Punten</li>
            <li>Silahkan = Mangga</li>
          </ol>
          <p>
            Cara Berbicara warga bandung cenderung lambat dan lembut. Maka
            ketika sedang berbicara, jangan gunakan nada yang tinggi
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  router: {
    middleware: "auth"
  }
}

</script>

