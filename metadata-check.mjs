import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import { dirname } from "path";
import parseMD from "parse-md";
import { MeiliSearch } from "meilisearch";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const fields = [
  { name: "slug", stat: undefined },
  { name: "title", stat: undefined },
  { name: "pageImg", stat: undefined },
  { name: "description", stat: undefined },
];

let filesWithError = [];

function readFilesSync(dirname) {
  fs.readdirSync(dirname).forEach((filename) => {
    if (!fs.lstatSync(dirname + filename).isDirectory()) {
      const fileContent = fs.readFileSync(dirname + filename, "utf-8");

      if (filename.endsWith(".md") || filename.endsWith(".mdx")) {
        const { metadata } = parseMD(fileContent);

        fields.forEach((field) => {
          if (!metadata.hasOwnProperty(field)) {
            console.info(
              `${dirname}${filename}: '${field.name}' field is missing from metadata`
            );
            field.stat = false;
            filesWithError = [
              ...filesWithError,
              `${filename}:  ${field.name} field is missing fr`,
            ];
          } else {
            field.stat = true;
          }
        });
      }
    } else {
      readFilesSync(dirname + filename + "/");
    }
  });
}

readFilesSync("./docs/");

if (filesWithError.length > 0) {
  console.error(
    `Please fix the metadata issue(s). Always include the following meta data fields: 'description', 'title', 'pageImg', 'slug'.`
  );
}
