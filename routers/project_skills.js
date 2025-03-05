import * as project_skills from "../controllers/project_skill.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post(
    "/project_skills/:apikey",
    protect,
    project_skills.createProjectSkills
  );
  //   router.get("/projects/:apikey", protect, users.getme);
};
