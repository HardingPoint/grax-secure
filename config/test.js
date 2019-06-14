module.exports = {
  elastic: {
    bonsaiUrl: process.env["TEST_OFFLINE"]
      ? "http://localhost:9200"
      : process.env["BONSAI_URL"]
  }
};
