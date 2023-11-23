const { verifyToken } = require("../util/jwt");

module.exports = (req, res, next) => {

  let token = req.headers['token']
  if (!token) {
    token = req.cookies['token']
  }

  let decoded = verifyToken(token);

  if (decoded === null) {
    return res.status(401).json({
      success: false,
      status: 0,
      code: 401,
      data: "Unauthorized"
    })
  }
  else {
    let email = decoded['user']['email'];
    let id = decoded['user']['id'];
    let isSeller = decoded['user']['isSeller'];
    req.headers.email = email;
    req.headers.id = id;
    req.headers.isSeller = isSeller;
    next();
  }
}

// completed