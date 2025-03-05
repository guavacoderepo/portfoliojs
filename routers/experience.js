import * as experience from "../controllers/experince.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post("/experience/:apikey", protect, experience.createExperience);
  //   router.get("/projects/:apikey", protect, users.getme);
};
