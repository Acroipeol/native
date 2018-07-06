var path = require("path");

/**
 * GET /listings/43?
 *
 * host: localhost:4000
 * accept: application/json
 * content-type: application/json
 * connection: keep-alive
 * cookie: _re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIGFjNzE4ZTRjYzFhZGExODI5MWIzYjA1NjU3N2IwMWY3.5Ao8hz5vG8DELGkyGx5FenaDqVGXhxa20nHd8W1PT2o
 * accept-language: en-us
 * authorization: undefined
 * accept-encoding: gzip, deflate
 * user-agent: EmCasa/1 CFNetwork/893.14 Darwin/16.7.0
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Cowboy");
  res.setHeader("date", "Wed, 04 Jul 2018 19:42:42 GMT");
  res.setHeader("content-length", "2862");
  res.setHeader("set-cookie", ["_re_key=SFMyNTY.g3QAAAABbQAAABJfdGltYmVyX3Nlc3Npb25faWRtAAAAIGFjNzE4ZTRjYzFhZGExODI5MWIzYjA1NjU3N2IwMWY3.5Ao8hz5vG8DELGkyGx5FenaDqVGXhxa20nHd8W1PT2o; path=/; HttpOnly"]);
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("cache-control", "max-age=0, private, must-revalidate");
  res.setHeader("x-request-id", "gqae6sjg3sv99v3ct05lo8vqdqsmmuqu");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "");
  res.setHeader("access-control-allow-credentials", "true");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("eyJsaXN0aW5nIjp7InVzZXJfaWQiOjMsInR5cGUiOiJBcGFydGFtZW50byIsInN1aXRlcyI6bnVsbCwicm9vbXMiOjMsInJlc3Ryb29tcyI6bnVsbCwicHJvcGVydHlfdGF4IjpudWxsLCJwcmljZSI6MjYwMDAwMCwibWF0dGVycG9ydF9jb2RlIjoiWkZaM3gyNFJiSFAiLCJtYWludGVuYW5jZV9mZWUiOm51bGwsImlzX3JlbGVhc2UiOm51bGwsImlzX2V4Y2x1c2l2ZSI6ZmFsc2UsImlzX2FjdGl2ZSI6dHJ1ZSwiaW5zZXJ0ZWRfYXQiOiIyMDE4LTAxLTE4VDE5OjQzOjQ4LjIzOTg0NiIsImltYWdlcyI6W3sicG9zaXRpb24iOjAsImlkIjoxNjg3LCJmaWxlbmFtZSI6Inh1YmVtdGZvaWF0aHNybHM3Zm5xLmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjoxLCJpZCI6MTY4NCwiZmlsZW5hbWUiOiJsazV1bmIyYjhzMWlyYzF6bHlxZC5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6MiwiaWQiOjU3MCwiZmlsZW5hbWUiOiJqZHJyYmRtdTA5cWdlbXV0dTBiZC5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6MiwiaWQiOjE2ODIsImZpbGVuYW1lIjoidmNpbGlscmhyZXkxbjZ2ZDV0a2wuanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjMsImlkIjoxNjg1LCJmaWxlbmFtZSI6Im91d2d1cHBzMnhheHl5MmlqeXFzLmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjo0LCJpZCI6MTY4MywiZmlsZW5hbWUiOiJ0eXkybm9naHQxc3hqaHpicWJ3NS5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6NSwiaWQiOjE2ODgsImZpbGVuYW1lIjoiZGhpbXVncGZiZXk3cXIzZWs5NXguanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjYsImlkIjoxNjg2LCJmaWxlbmFtZSI6Imt5cjM5Y2hycWt1dHA2bXB2ZWxsLmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjo3LCJpZCI6MTcwMSwiZmlsZW5hbWUiOiJ0ZXdoNG9sMTZwZG1lenVhYmFudy5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6OCwiaWQiOjE3MDAsImZpbGVuYW1lIjoidjlvYWhpZXFnZmZkYXZvNzRoYW4uanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjksImlkIjoxNjk5LCJmaWxlbmFtZSI6Im1oYnBqd2JnbWN2enVib2t4YmV5LmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjoxMCwiaWQiOjE2OTgsImZpbGVuYW1lIjoieG5jNmpueW5kMnA0eWxxY2htb3MuanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjExLCJpZCI6NTYxLCJmaWxlbmFtZSI6InViZGR1MHg3bHpxd3Z2M3Frbm15LmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjoxMSwiaWQiOjE2OTcsImZpbGVuYW1lIjoia3Z5cXN6dW40bXN5dGFxa2R4djIuanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjEyLCJpZCI6MTY5NiwiZmlsZW5hbWUiOiJsNWVmY3FqdGxhc25rdjlkM25mZS5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6MTMsImlkIjo1NTksImZpbGVuYW1lIjoibmZlNnJkdXpoaDhqYWl6a2JjaHQuanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjEzLCJpZCI6MTY5NSwiZmlsZW5hbWUiOiJka2xudGFuNGVuaTlvdXNyMDRmay5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6MTQsImlkIjoxNjk0LCJmaWxlbmFtZSI6InVtaW5sbWdsZTNhZ2N0dGF3NWlzLmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjoxNSwiaWQiOjE2OTMsImZpbGVuYW1lIjoiY3N4YmJ4Mnc2aGF6MGtmbm9zdXkuanBnIiwiZGVzY3JpcHRpb24iOm51bGx9LHsicG9zaXRpb24iOjE2LCJpZCI6MTY5MiwiZmlsZW5hbWUiOiJkbXlrYXcxandsZmdudnFhb2w1bi5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6MTcsImlkIjoxNjkxLCJmaWxlbmFtZSI6InJseDVhY2wwdGFpcXZlYnZiZ3BqLmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjoxNywiaWQiOjU1MSwiZmlsZW5hbWUiOiJnaXJ4bHVrY2V0bmplc3hsc2hwai5qcGciLCJkZXNjcmlwdGlvbiI6bnVsbH0seyJwb3NpdGlvbiI6MTgsImlkIjoxNjkwLCJmaWxlbmFtZSI6InB0bnl1cXZpbGNwYm94OHlieHptLmpwZyIsImRlc2NyaXB0aW9uIjpudWxsfSx7InBvc2l0aW9uIjoxOSwiaWQiOjE2ODksImZpbGVuYW1lIjoicHZ2ZWR2ZmN3MWd6aHRpZGppc2cuanBnIiwiZGVzY3JpcHRpb24iOm51bGx9XSwiaWQiOjQzLCJoYXNfZWxldmF0b3IiOm51bGwsImdhcmFnZV9zcG90cyI6MiwiZmxvb3IiOiIzIiwiZGVzY3JpcHRpb24iOiJBcGFydGFtZW50byBwcm9udG8gcGFyYSBtb3JhciwgcHLDqWRpbyBjb20gMyBhbm9zIGUgYWluZGEgbmEgZ2FyYW50aWEgZGEgY29uc3RydXRvcmEgKDUgYW5vcykuIE9yaWdpbmFsbWVudGUgMyBxdWFydG9zLCByZWZvcm11bGFkbyBwYXJhIDIgcXVhcnRvcyAoZsOhY2lsIHJldG9tYXIgcGFyYSAzKS4gIiwiZGVwZW5kZW5jaWVzIjpudWxsLCJiYXRocm9vbXMiOjQsImJhbGNvbmllcyI6bnVsbCwiYXJlYSI6MTU2LCJhZGRyZXNzIjp7InN0cmVldF9zbHVnIjoicnVhLXRpbW90ZW8tZGEtY29zdGEiLCJzdHJlZXQiOiJSdWEgVGltw7N0ZW8gZGEgQ29zdGEiLCJzdGF0ZV9zbHVnIjoicmoiLCJzdGF0ZSI6IlJKIiwicG9zdGFsX2NvZGUiOiIyMjQ1MC0xMzAiLCJuZWlnaGJvcmhvb2Rfc2x1ZyI6ImxlYmxvbiIsIm5laWdoYm9yaG9vZCI6IkxlYmxvbiIsImxuZyI6LTQzLjIzMTUxMjY5OTk5OTk5NiwibGF0IjotMjIuOTg0NzU1MiwiY2l0eV9zbHVnIjoicmlvLWRlLWphbmVpcm8iLCJjaXR5IjoiUmlvIGRlIEphbmVpcm8ifX19", "base64"));
  res.end();

  return __filename;
};