import {
  createExperienceQuery,
  getExperienceQuery,
} from "../modules/experience.qr.js";
import { sqlQuery } from "../config/db.config.js";
import { successResponse } from "../middlewares/response.js";

export const createExperience = async (req, res, next) => {
  try {
    const userid = req.user.id;

    const { title, organization, description, startDate, endDate } = req.body;

    const values = [
      userid,
      title,
      organization,
      description,
      startDate,
      endDate,
    ];

    const [response] = await sqlQuery(createExperienceQuery, values);
    const [result] = await sqlQuery(getExperienceQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};
