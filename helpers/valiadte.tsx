
import router from "next/router";
import { useEffect } from "react";

export class ValidateUser {
  static clearToken = async () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };
  static validateUser = async () => {
    if (localStorage.getItem('token') === null) {
      localStorage.clear();
      router.push("/");
    }
    return;
  };
  static validateUserLogin = async () => {
    if (!!localStorage.getItem('token')) {     
      router.push("/users");
    }
    return;
  };
}
