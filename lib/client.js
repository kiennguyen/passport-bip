
const calculateCacheKey = require("./calculateCacheKey");

function Client(providerUrl, clientId, clientSecret) {
  this._providerUrl = providerUrl;
  this._clientId = clientId;
  this._clientSecret = clientSecret;
}
