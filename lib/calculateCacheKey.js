"use strict";

const crypto = require("crypto");

module.exports = function calculateCacheKey(url, body) {
  function stringHash(str) {
    return crypto.createHash("md5").update(str).digest("hex");
  }

  if (!body || body.length === 0) {
    return url;
  }

  if (typeof body === "object") {
    return `${url} ${stringHash(JSON.stringify(body))}`;
  }

  return `${url} ${stringHash(String(body))}`;
};
