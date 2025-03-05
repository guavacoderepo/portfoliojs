import * as projects from "../controllers/projects.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post("/projects/:apikey", protect, projects.createProjects);
  router.get("/projects/:apikey", protect, projects.fetchProjects);
};
