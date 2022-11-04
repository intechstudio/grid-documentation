import fs from 'fs';
import {v4 as uuidv4} from 'uuid';
import { dirname } from "path";
import parseMD from 'parse-md';
import { MeiliSearch } from 'meilisearch';
import dotenv from 'dotenv';
dotenv.config();

let data = [];

const meiliClient = new MeiliSearch({
  host: process.env['MEILI_ADMIN_HOST'],
  apiKey: process.env['MEILI_ADMIN_KEY'],
  headers: {'Access-Control-Allow-Origin': '*'}
})

function readFilesSync(dirname){
  fs.readdirSync(dirname).forEach((filename) => {

    if(!fs.lstatSync(dirname + filename).isDirectory()) {

      const fileContent = fs.readFileSync(dirname + filename, 'utf-8');

      if(filename.endsWith('.md') || filename.endsWith('.mdx')) {

        const { content, metadata } = parseMD(fileContent);

        data.push({
          id: uuidv4(),
          path: generatePathName(dirname + filename, metadata.slug),
          ...metadata,
          body: content,
        })
      }

    } else {
      readFilesSync(dirname + filename + '/');
    }

  });
}

function generatePathName(filename, slug){
  const split = filename.split('/docs');
  let path = '';
  // if the slug is present, use it instead of the file path
  if(slug == undefined){
    path = '/docs' + split[1].split('.')[0];
  } else {
    path = '/docs' + dirname(split[1]) + '/' + slug;
  }
  return path;
}

async function indexing(){
      
  try {
    await meiliClient.index(process.env.MEILI_INDEX).delete();
    meiliClient.index(process.env.MEILI_INDEX).addDocuments(data);
    console.info('meilisearch is done');
  } catch (error) {
    console.error('meilisearch is not available', error);
  }
    
}

readFilesSync(process.env.PATH_TO_DOCUMENTS);

indexing();
