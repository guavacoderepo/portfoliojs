import { createSkillsQuery, getSkillsQuery } from "../modules/skills.qr.js";
import { sqlQuery } from "../config/db.config.js";
import { successResponse } from "../middlewares/response.js";

export const createSkills = async (req, res, next) => {
  try {
    const userid = req.user.id;

    const { title, rate, url, size } = req.body;

    const values = [userid, title, rate, url, size];

    const [response] = await sqlQuery(createSkillsQuery, values);
    const [result] = await sqlQuery(getSkillsQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};
