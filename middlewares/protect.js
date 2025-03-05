import { sqlQuery } from "../config/db.config.js";
import ErrorHandler from "../helpers/errorHanler.js";
import { getCurrentUserQuery } from "../modules/users.qr.js";

export default async (req, res, next) => {
  // verify api key
  const { apikey } = req.params;

  const [result] = await sqlQuery(getCurrentUserQuery, apikey);

  if (result < 1) return next(new ErrorHandler("Unauthorized user", 404));

  req.user = result[0];

  next();
};
