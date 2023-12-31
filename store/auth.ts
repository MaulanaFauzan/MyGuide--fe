import { defineStore } from "pinia";
import Swal from "sweetalert2";

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
    setLoggedIn(authenticated: boolean): void {
      this.authenticated = authenticated;
    },
    async authenticateUser({ email, password }: UserPayloadInterface) {
      console.log("sebelom login", this.authenticated);

      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch(
        "http://localhost:9090/user/login",
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
            confirmButtonText: "OK"
          }).then((result) => {
            if (result.isConfirmed) {
              const router = useRouter();
              router.push("/auth/login");
            }
          });
        }
      });
    },
  },
});
