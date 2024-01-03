<template>
  <button class="btn bg-dark text-white " @click="loginWithGitHub"> <i class="fab fa-github"></i> Login with GitHub</button>
</template>

<script>
export default {
  methods: {
    loginWithGitHub() {
      const redirectUri = 'http://localhost:9090/user/OAuthGithub'; // Set your redirect URI
      const clientId = '6c8b6cca99c86cefb942';
      const oauthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user`;

      window.location.replace(oauthUrl);
    },
  },
};
</script>