import {
  createDocumentQuery,
  getDocumentQuery,
} from "../modules/documents.qr.js";
import { sqlQuery } from "../config/db.config.js";
import { successResponse } from "../middlewares/response.js";

export const createDocuments = async (req, res, next) => {
  try {
    const userid = req.user.id;

    const { projectid, url, size } = req.body;

    const values = [projectid, url, size];

    const [response] = await sqlQuery(createDocumentQuery, values);
    const [result] = await sqlQuery(getDocumentQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};
