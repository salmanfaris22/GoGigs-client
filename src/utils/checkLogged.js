

export function CheckLogged() {
    const token = localStorage.getItem("local_token");
    return token !== null && token !== undefined;
  }
  