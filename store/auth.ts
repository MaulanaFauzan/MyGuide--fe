import { defineStore } from "pinia";
import Swal from "sweetalert2";

interface UserPayloadInterface {
  email: string;
  name: string;
  password: string;
  address: string;
  confirmPassword: string;
  role: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    setLoggedIn(authenticated: boolean): void {
      this.authenticated = authenticated;
    },
    async authenticateUser({ email, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "http://127.0.0.1:8000/api/login",
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
      console.log(data.value.data);

      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        const user = useCookie("user"); // useCookie new hook in nuxt 3
        user.value = data.value.data.user;
        token.value = data.value.data.token; // set token to cookie
        if (token.value) {
          this.authenticated = true; // set authenticated  state value to true
        }
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
    },
    async registerUser({
      email,
      name,
      password,
      address,
      confirmPassword,
      role,
    }: UserPayloadInterface) {
      const config = useRuntimeConfig();
      const { data, pending }: any = await useFetch(
        `http://127.0.0.1/api/register`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            name,
            email,
            address,
            password,
            confirmPassword,
            role,
          },
        }
      );
      this.loading = pending;

      if (data.value.data) {
        const token = useCookie("token");
        token.value = data?.value?.data?.access_token;
        this.authenticated = true;
      }
    },
    logUserOut() {
      Swal.fire({
        icon: "question",
        title: "Confirmation",
        text: "Are you sure you want to logout?",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          const token = useCookie("token"); // useCookie new hook in nuxt 3
          const user = useCookie("user"); // useCookie new hook in nuxt 3
          this.authenticated = false; // set authenticated  state value to false
          token.value = null; // clear the token cookie
          user.value = null;
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Logout successfully!",
            confirmButtonText: "OK",
          }).then((result) => {
            if (result.isConfirmed) {
              const router = useRouter();
              router.push("/login");
            }
          });
        }
      });
    },
  },
});
