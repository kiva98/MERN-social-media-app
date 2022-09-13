import jwt from "jsonwebtoken";

// user want to like post
// click the like button => auth middleware (next) => like controller...
// auth middleware confirms/denies that request

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test1");

      req.userId = decodedData?.id;
    } else {
      decodedData.jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
