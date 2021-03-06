/* eslint-disable no-undef */
const grax = "grax";
const lastBreakVersion = "3.30";

const getParam = function (name, defaultValue = null) {
  const regexp = new RegExp(`[&?]${name}=([^&?]*)`);

  if (regexp.test(document.location.search)) {
    return decodeURIComponent(document.location.search.match(regexp)[1]);
  }

  return defaultValue;
};

const urlParams = {
  opener: getParam("opener"),
  parent: getParam("parent"),
  version: getParam("version", lastBreakVersion)
};

const getCookie = function (name) {
  const regexp = new RegExp(`[^;]?${name}=([^;]*)`);

  if (regexp.test(document.cookie)) {
    return document.cookie.match(regexp)[1];
  }

  return null;
};

const setCookie = function (name, value, exdays = 365) {
  if (name != null && value != null) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;

    document.cookie = `${name}=${value};${expires};path=/;Secure;SameSite=None`;
  }
};

const getIsAuthenticated = () => {
  return getCookie(grax) === urlParams.version;
};

const sendVerificationToFrame = function (frame, type, origin) {
  if (frame != null && frame.location != null) {
    frame.postMessage(
      {
        type,
        isAuthenticated: getIsAuthenticated()
      },
      origin
    );
  }
};

const tryToSetGraxCookie = function () {
  if (getIsAuthenticated() === false) {
    setCookie(grax, urlParams.version);
  }
};

// Communicate when is embedded on popup
if (window.opener != null && window.location.href !== urlParams.opener) {
  document.getElementById("origin").innerText = window.location.origin;
  document.getElementById("year").innerText = new Date().getFullYear();
  document.getElementById("accept_cookies").style.display = "";

  if (
    navigator.userAgent.indexOf("Safari") !== -1 &&
    navigator.userAgent.indexOf("Chrome") === -1
  ) {
    document.getElementById("extra_safari_requirements").style.display = "";
  }

  document.getElementById("accept_cookies_button").onclick = function (e) {
    // Try to generate cookie to confirm permissions
    tryToSetGraxCookie();

    sendVerificationToFrame(window.opener, "cookie_authentication", urlParams.opener);

    e.preventDefault();
  };

  document.getElementById("deny_cookies_button").onclick = function (e) {
    window.close();

    e.preventDefault();
  };
}

// Communicate when is embedded on iframe
if (window.parent != null && window.location.href !== urlParams.parent) {
  sendVerificationToFrame(window.parent, "cookie_verification", urlParams.parent);
}
