import path from "path";

import { fileURLToPath } from "url";

//returns the current directory path

export const getCurrentDir = () => {
  return path.dirname(fileURLToPath(import.meta.url));
};
