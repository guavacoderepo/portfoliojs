import * as education from "../controllers/education.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post("/education/:apikey", protect, education.createEducation);
  //   router.get("/projects/:apikey", protect, users.getme);
};
