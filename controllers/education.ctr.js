import {
  createEducationQuery,
  getEducationQuery,
} from "../modules/education.qr.js";
import { sqlQuery } from "../config/db.config.js";
import { successResponse } from "../middlewares/response.js";

export const createEducation = async (req, res, next) => {
  try {
    const userid = req.user.id;

    const { course, institution, grade, description, startDate, endDate } =
      req.body;

    const values = [
      userid,
      course,
      institution,
      grade,
      description,
      startDate,
      endDate,
    ];

    const [response] = await sqlQuery(createEducationQuery, values);
    const [result] = await sqlQuery(getEducationQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};
