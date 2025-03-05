import crypto from "crypto";

export default () => {
  return crypto.randomBytes(12).toString("hex");
};
