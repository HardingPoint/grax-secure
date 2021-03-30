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

module.exports = {
  getBaseUrlHost,
  getBaseUrlPath
};
