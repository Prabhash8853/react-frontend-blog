export const createCookie = (name, value, expiry) => {
  var date = new Date();
  date.setTime(date.getTime() + expiry * 1000);
  var expires = "; expires=" + date.toUTCString();

  document.cookie = name + "=" + value + expires + "; path=/";
};

export const getCookie = cname => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
