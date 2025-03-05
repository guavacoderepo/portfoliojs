import express from "express";
import users from "./users.js";
import projects from "./projects.js";
import skills from "./skills.js";
import experience from "./experience.js";
import project_skills from "./project_skills.js";
import activities from "./activities.js";
import documents from "./documents.js";
import education from "./education.js";

const router = express.Router();

export default () => {
  users(router);
  projects(router);
  skills(router);
  experience(router);
  project_skills(router);
  activities(router);
  documents(router);
  education(router);

  return router;
};
