const { getBaseUrlHost, getBaseUrlPath } = require("./getUrlProperties");

describe("getting base url", () => {
  it("get base url host", () => {
    expect(getBaseUrlHost("https://api.grax.io/test/api")).toEqual("api.grax.io");
  });

  it("get base url path", () => {
    expect(getBaseUrlPath("https://api.grax.io/test/api")).toEqual("/test/api");
  });

  it("get base url host negative testcase", () => {
    expect(getBaseUrlHost(undefined)).toBeUndefined();
  });

  it("get base url path negative testcase", () => {
    expect(getBaseUrlPath(undefined)).toBeUndefined();
  });
});
