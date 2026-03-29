const validate = (req, res, next) => {
  if (!req.ip) {
    return res.status(400).json({
      message: "Invalid request"
    });
  }
  next();
};

export default validate;