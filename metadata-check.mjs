import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { dirname } from "path";
import parseMD from "parse-md";
import { MeiliSearch } from "meilisearch";
import dotenv from "dotenv";
dotenv.config();

export function readFilesSync(dirname) {
  fs.readdirSync(dirname).forEach((filename) => {
    if (!fs.lstatSync(dirname + filename).isDirectory()) {
      const fileContent = fs.readFileSync(dirname + filename, "utf-8");

      if (filename.endsWith(".md") || filename.endsWith(".mdx")) {
        const { content, metadata } = parseMD(fileContent);
        console.log(fiename);
      }
    } else {
      readFilesSync(dirname + filename + "/");
    }
  });
}
