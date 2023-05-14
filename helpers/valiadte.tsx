
import router from "next/router";

// Validate User Aithentication
export class ValidateUser {
  static clearToken = async () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  };
  static validateUser = async () => {
    if (sessionStorage.getItem('token') === null) {
      sessionStorage.clear();
      router.push("/");
    }
    return;
  };
  static validateUserLogin = async () => {
    if (!!sessionStorage.getItem('token')) {     
      router.push("/users");
    }
    return;
  };
}
