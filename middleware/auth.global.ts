import { storeToRefs } from "pinia";
import Swal from "sweetalert2";
import { useAuthStore } from "~/store/auth";
export default defineNuxtRouteMiddleware((to, from) => {
  const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
  const token = useCookie("token"); // get token from cookies
  const user = useCookie("user");
  // @ts-ignore 
  if (token.value) {
    // check if value exists
    authenticated.value = true; // update the state to authenticated
  }

  // if token exists and url is /login redirect to homepage
  // @ts-ignore 
  if (token.value && to?.name === "login") {
    return navigateTo("/home");
  // @ts-ignore 
  } else if (token.value && to?.name == "index") {
    return navigateTo("/home");
  }
  //   } else if (token.value && from?.name === "home-maps") {
  //     return navigateTo("/home/");
  //   } else if (token.value && from?.name === "home-profile") {
  //     return navigateTo("/home/");
  //   } else if (token.value && from?.name === "home-selengkapnya") {
  //     return navigateTo("/home/");
  //   };
  // @ts-ignore 
  if (!token.value) {
    if (to?.name === "home") {
      return navigateTo("/");
    } else if (to?.name === "home-profile") {
      return navigateTo("/");
    } else if (to?.name === "home-maps") {
      return navigateTo("/");
    } else if (to?.name === "home-selengkapnya") {
      return navigateTo("/");
    } else if (to?.name === "add-booking") {
      return navigateTo("/");
    } else if (to?.name === "add-destinasi") {
      return navigateTo("/");
    } else if (to?.name === "add-tourguide") {
      return navigateTo("/");
    }
    return;
  }
});
