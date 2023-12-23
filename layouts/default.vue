
<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style="padding-left: 1%">GAMA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar" style="padding-right: 1%">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="login">Login</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <div>

            <slot />
        </div>
    </div>
</template>
<script lang="ts">

import '~/assets/style.css'
import '~/assets/maps.css'


// export default {
//     data() {
//         return {
//             title: 'Hello World!'
//         }
//     },
//     head() {
//         return {
//             title: this.title,
//             meta: [
//                 { charset: 'utf-8' },
//                 { name: 'viewport', content: 'width-device-width, initial=scale=1' }
//             ],
//             link: [
//                 { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/favicon.ico' },
//                 { rel: 'stylesheet', href: '~/assets/style.css' },
//                 { rel: 'stylesheet', href: '~/assets/maps.css' },
//                 { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", rel: "stylesheet", integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossorigin: "anonymous" },

//             ],
//             script: [
//                 { href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL", crossorigin: "anonymous" },

//             ]
//         }
//     }
// }
</script>