<template>
  <div>Logging in</div>
</template>
<script>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/store/auth";
import Swal from "sweetalert2";

export default {
  async mounted() {
    const { authenticateUserOauth } = useAuthStore(); // use auth store
    const router = useRouter();
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const currentUrl = window.location.href;
    const urlSearchParams = new URLSearchParams(currentUrl.split("?")[1]);
    const queryParamsObject = {};
    urlSearchParams.forEach((value, key) => {
      queryParamsObject[key] = value;
    });
    await authenticateUserOauth(queryParamsObject);
    if (authenticated.valu1e) {
      Swal.fire({
        title: "Success",
        text: "Login Success!",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        this.$router.push("/")
      });
    } else if (!authenticated.value) {
      Swal.fire({
        title: "Failed!",
        text: "Wrong email or password!",
        icon: "error",
        confirmButtonText: "Try Again!",
      }).then((result) => {
      });
    }
  },
};
</script>