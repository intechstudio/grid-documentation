import React, { useEffect, useState } from 'react'
import './style.css'
import { MeiliSearch } from 'meilisearch';
import { marked } from 'marked'

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
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    //search documents index based on search value
    client
      .index("grid-documentation")
      .search(search, { limit: 4, attributesToHighlight: ['*'] })
      .then((results) => {
        setDocuments(results.hits);
      });
  }, [search]);


  return (
    <div className="relative">
      <button className="relative flex rounded-full p-1.5 dark:bg-gray-400 bg-transparent border-none ring-2 ring-violet-400 shadow-none items-center">
        <svg
          className=" text-gray-700 transition-colors duration-300 w-5 h-5
          p-0.5 fill-current "
          viewBox="0 0 58 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M56.7213 58.7832C55.5127 59.9165 53.6142 59.8555 52.4809 58.6469L41.8165
            47.2738C31.1978 54.9121 16.3065 53.4956 7.34571 43.5538C-2.26801 32.8876 -1.41476
            16.4474 9.2515 6.83369C19.9177 -2.78003 36.3579 -1.92678 45.9716 8.73947C54.8795 18.6226
            54.801 33.463 46.2562 43.2368L56.8577 54.5428C57.991 55.7514 57.9299 57.6499 56.7213
            58.7832ZM40.6347 40.4534C48.2808 32.9944 48.7299 20.7615 41.5148 12.7565C34.1196 4.5517
            21.4733 3.89536 13.2685 11.2905C5.06372 18.6857 4.40738 31.332 11.8025 39.5368C19.1977
            47.7416 31.844 48.3979 40.0488 41.0028C40.2486 40.8227 40.4439 40.6395 40.6347 40.4534Z" />
        </svg>
        <input
          className="w-20 rounded-r border-none focus:outline-none text-black dark:bg-gray-400 bg-transparent"
          type="text"
          value={search}
          onClick={() => { setSearchFocus(true) }}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
      </button>
      {(searchFocus && documents.length > 0) ?
        <div className='mt-2 absolute w-96 overflow-y-scroll shadow-2xl rounded-lg max-h-[calc(100vh-100px)] right-0 z-10'>
          <div className="dark:bg-slate-700 bg-white rounded-lg shadow-xl  dark:text-white relative flex flex-col px-4 py-2 first:pt-0 ">
            <button onClick={() => setSearchFocus(false)} className="mt-4 rounded cursor-pointer  px-4 py-2 border border-solid">Close</button>
            {documents?.map((doc) => (
              <div key={doc.id}>
                <a href={doc.path} className="dark:text-white text-black border-solid border-b border-gray-700 last:border-none ">
                  <div className="my-1 hover:bg-primary-900 px-4 py-1 rounded">
                    <div className="py-1 text-base font-bold">
                      {doc.title}
                    </div>
                    {doc.tags &&
                      <div className="text-sm my-1 py-1 dark:text-white text-black">
                        <span className="px-1 py-1 rounded-full bg-blue-400 mr-1">
                          {JSON.stringify(doc.tags)}
                        </span>
                      </div>
                    }
                    <div dangerouslySetInnerHTML={{ __html: marked(doc.body) }} className="text-base line-clamp-3">
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        : documents.length > 0 ?
          null
          :
          <div className='mt-2 absolute w-96 overflow-y-scroll shadow-2xl rounded-lg max-h-[calc(100vh-100px)] right-0 z-10'>
            <div className="dark:bg-slate-700 bg-white rounded-lg shadow-xl  dark:text-white relative flex flex-col px-4 py-2 first:pt-0 ">
              <div className="my-4">
                Sorry no results.
              </div>
              <button onClick={() => { setSearchFocus(false); setSearch('') }} className="rounded cursor-pointer  px-4 py-2 border border-solid">Close</button>

            </div>
          </div>
      }

    </div>

  );

}