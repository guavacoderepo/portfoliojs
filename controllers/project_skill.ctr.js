import {
  createProjSkillsQuery,
  getProjSkillsQuery,
} from "../modules/projects_skills.qr.js";
import { sqlQuery } from "../config/db.config.js";
import { successResponse } from "../middlewares/response.js";

export const createProjectSkills = async (req, res, next) => {
  try {
    const { projectid, skillid } = req.body;

    const values = [projectid, skillid];

    const [response] = await sqlQuery(createProjSkillsQuery, values);
    const [result] = await sqlQuery(getProjSkillsQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};
