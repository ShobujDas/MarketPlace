const { createToken, verifyToken } = require("../util/jwt");

exports.cookieMaker = (tokenPayload) => {
  let cookieOption = {
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    httpOnly: false,
    sameSite: "none",
    secure: true,
  }

  return { token: createToken(tokenPayload), cookieOption }
}
