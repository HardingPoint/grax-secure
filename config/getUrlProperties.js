const URL = require("url");

const getBaseUrlHost = url => {
  if (url) {
    const urlObject = URL.parse(url, true);
    return urlObject.hostname;
  }
  return undefined;
};

const getBaseUrlPath = url => {
  if (url) {
    const urlObject = URL.parse(url, true);
    return urlObject.path;
  }
  return undefined;
};

const getBaseUrlPort = url => {
  if (url) {
    const urlObject = URL.parse(url, true);
    return urlObject.port;
  }
  return undefined;
};

const getBaseUrlProtocol = url => {
  if (url) {
    const urlObject = URL.parse(url, true);
    return urlObject.protocol;
  }
  return undefined;
};

module.exports = {
  getBaseUrlHost,
  getBaseUrlPath,
  getBaseUrlPort,
  getBaseUrlProtocol,
};
