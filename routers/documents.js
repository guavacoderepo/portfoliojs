import * as documents from "../controllers/document.ctr.js";
import protect from "../middlewares/protect.js";

export default (router) => {
  router.post("/documents/:apikey", protect, documents.createDocuments);
  //   router.get("/projects/:apikey", protect, users.getme);
};
