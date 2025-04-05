

export function CheckLogged() {
    const token = sessionStorage.getItem("local_token");
    return token !== null && token !== undefined;
  }
  