import {
  createProjectQuery,
  fetchProjectQuery,
  getProjectQuery,
} from "../modules/projects.qr.js";
import { sqlQuery } from "../config/db.config.js";
import { successResponse } from "../middlewares/response.js";

export const createProjects = async (req, res, next) => {
  try {
    const userid = req.user.id;

    const { title, description, liveLink, github } = req.body;

    const values = [userid, title, description, liveLink, github];

    const [response] = await sqlQuery(createProjectQuery, values);
    const [result] = await sqlQuery(getProjectQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};

export const fetchProjects = async (req, res, next) => {
  try {
    const userid = req.user.id;

    const [result] = await sqlQuery(fetchProjectQuery, [userid]);

    successResponse(res, result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
