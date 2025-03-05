import { successResponse } from "../middlewares/response.js";
import generateapikey from "../helpers/apikey.js";
import { sqlQuery } from "../config/db.config.js";
import { createAccountQuery, getAccountQuery } from "../modules/users.qr.js";

export const createAccount = async (req, res, next) => {
  try {
    const { name, role, address, phone, email, linkedin, github } = req.body;
    // generate api key
    const key = generateapikey();

    // call the sql query
    const values = [name, role, address, phone, email, linkedin, github, key];
    const [response] = await sqlQuery(createAccountQuery, values);
    const [result] = await sqlQuery(getAccountQuery, response.insertId);

    successResponse(res, result[0], 201);
  } catch (err) {
    next(err);
  }
};

export const getme = async (req, res, next) => {
  try {
    successResponse(res, req.user);
  } catch (err) {
    next(err);
  }
};
