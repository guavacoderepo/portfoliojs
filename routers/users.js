import * as users from "../controllers/users.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post("/account", users.createAccount);
  router.get("/account/:apikey", protect, users.getme);
};
