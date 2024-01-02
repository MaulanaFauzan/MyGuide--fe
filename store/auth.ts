import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }: UserPayloadInterface) {
      console.log("sebelom login", this.authenticated);

      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "http://192.168.0.102:9090/user/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        const user = useCookie("user"); // useCookie new hook in nuxt 3
        user.value = data.value.data;
        token.value = data.value.data._token; // set token to cookie
        if (token.value) {
          console.log("setelah 1 login", this.authenticated);

          this.authenticated = true; // set authenticated  state value to true
        }
        console.log("setelah login", this.authenticated);
      }
    },
    async authenticateUserOauth(userOauth: any) {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const user = useCookie("user"); // useCookie new hook in nuxt 3
      user.value = userOauth;
      token.value = userOauth._token; // set token to cookie
      if (token.value) {
        this.authenticated = true; // set authenticated  state value to true
      }
      console.log("setelah login", this.authenticated);
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
