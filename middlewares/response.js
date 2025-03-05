import ErrorHandler from "../helpers/errorHanler.js";

const errorResponse = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  if (err.sqlMessage) {
    const message = err.sqlMessage;
    error = new ErrorHandler(message, 404);
  }

  res.status(error.statusCode || 500).json({
    status: "failed",
    message: error.message || "server error",
  });
};

const successResponse = (res, payload = {}, statusCode = 200, msg = "") => {
  return res.status(statusCode).json({
    status: "success",
    payload,
    msg,
  });
};

export { errorResponse, successResponse };
