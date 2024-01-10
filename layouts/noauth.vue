<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" style="padding-left: 1%">GAMA</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar" style="padding-right: 1%">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/"> Home</NuxtLink>
                <!-- <a class="nav-link" aria-current="page" href="/">Home</a> -->
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/login"> Login</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/signup"> Sign Up</NuxtLink>
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
