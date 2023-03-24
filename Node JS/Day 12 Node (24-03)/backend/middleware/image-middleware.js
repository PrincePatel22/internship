import multer from "multer";
import { getCurrentDir } from "../static/static-paths.js";
import { join } from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, join(getCurrentDir(), "../../client/public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });
