// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/textFilter.js',
  ],
  css: ["~/assets/style.css", "~/assets/maps.css", "~/assets/pemesanan.css"],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore',
        ],
      },
    ],
    [
      "@pinia/nuxt",

      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore",
          "nuxt-sweetalert2",
          {
            confirmButtonColor: "#FFFFFF",
          },
        ],
      },
    ],
    "nuxt-vue3-google-signin",
  ],
  googleSignIn: {
      clientId: "476230501485-d8r0pa7jt1978a059t667ruhm0m8vdbn.apps.googleusercontent.com",
    },
    // <link
    //   rel="stylesheet"
    //   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    // />
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
    //   rel="stylesheet"
    // />
  app: {
    
    head: {
      link: [
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
          rel: "stylesheet",
          
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap",
          rel: "stylesheet"
        },

        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: "http://localhost:9090/",
      appSecret: "",
    },
  },
} 
);
