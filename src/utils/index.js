export const TOKEN_KEY = "todo_access_token";

export const setCookie = (cname, cvalue, exdays) => {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export const getCookie = (cname, cookie) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const destroyToken = () => {
  setCookie(TOKEN_KEY, "", 0);
};

export const getToken = () => {
  const token = getCookie(TOKEN_KEY, document.cookie);
  return `Bearer ${token}`
};

export const setToken = token => {
  setCookie(TOKEN_KEY, token, 7)
}