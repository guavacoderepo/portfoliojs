import * as skills from "../controllers/skills.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post("/skills/:apikey", protect, skills.createSkills);
  //   router.get("/projects/:apikey", protect, users.getme);
};
