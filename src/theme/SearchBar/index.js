import React, { useEffect, useState } from 'react'
import './style.css'
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: "https://meilisearch-1n6r.onrender.com",
  headers: {
      Authorization: `Bearer securepassword`,
      "Content-Type": "application/json",
  },
});

export default function Component() {
  const [documents, setDocuments] = useState([]);
   const [search, setSearch] = useState("");
 
   useEffect(() => {
      //search documents index based on search value
      client
          .index("grid-documentation")
          .search(search)
          .then((results) => {
            console.log(results)
            setDocuments(results.hits);
          });
   }, [search]);
 
  return (
    <div className="relative">
      <div className="relative border-solid border-2 transition-colors duration-300 flex ring-offset-blue-700 items-center bg-secondary rounded-md">
        <div className="rounded-l px-1 flex items-center">
          <svg
            className=" text-gray-400 transition-colors duration-300 w-5 h-5
            p-0.5 fill-current "
            viewBox="0 0 58 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.7213 58.7832C55.5127 59.9165 53.6142 59.8555 52.4809 58.6469L41.8165
              47.2738C31.1978 54.9121 16.3065 53.4956 7.34571 43.5538C-2.26801 32.8876 -1.41476
              16.4474 9.2515 6.83369C19.9177 -2.78003 36.3579 -1.92678 45.9716 8.73947C54.8795 18.6226
              54.801 33.463 46.2562 43.2368L56.8577 54.5428C57.991 55.7514 57.9299 57.6499 56.7213
              58.7832ZM40.6347 40.4534C48.2808 32.9944 48.7299 20.7615 41.5148 12.7565C34.1196 4.5517
              21.4733 3.89536 13.2685 11.2905C5.06372 18.6857 4.40738 31.332 11.8025 39.5368C19.1977
              47.7416 31.844 48.3979 40.0488 41.0028C40.2486 40.8227 40.4439 40.6395 40.6347 40.4534Z" />
          </svg>
        </div>
        <input
          className="w-full rounded-r py-2 border-none focus:outline-none bg-secondary text-black"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search as you type..."
        />
		  </div>



      <div className="w-full absolute z-50">
        <div className="mt-2 bg-gray-400 border border-black rounded shadow flex flex-col px-4 py-2
            first:pt-0 ">
            {documents?.map((doc) => (
                <div key={doc.id}>
                  <a href={doc.path}	className="text-white border-b border-gray-700 last:border-none ">
                  <div className="my-2 hover:bg-primary-900 px-4 py-2 rounded">
                    <div className="py-2 text-base font-bold">
                    {doc.title}
                    </div>
                    <div className="text-sm py-2 text-gray-300">
                      <span className="px-2 py-1 rounded-full bg-gray-900 mr-1">
                        {JSON.stringify(doc.tags)}
                      </span>
                    </div>
                    <div className="py-2 text-base">
                      {doc.body}
                    </div>
                  </div>
                  </a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}