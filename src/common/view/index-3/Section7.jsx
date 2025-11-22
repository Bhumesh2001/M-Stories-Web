import React, { useState, useEffect } from "react";
import { callApi } from '../../../services/apiHandler'
import { Link } from "gatsby"
import AOS from "aos";
import "aos/dist/aos.css";
import { TopNewsSkeleton } from '../../Loader';

const Section7 = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ HTML check karne ke liye helper
  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await callApi("/news");
        setNewsItems(response.data.newsList.slice(0, 3));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, [newsItems]);


  return (
    <React.Fragment>
      <section className="mt-10" data-aos="fade-up">
        <div className="container px-4 mx-auto">
          <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
            Top Of The Week News & Stories
          </h3>

          {isLoading ? (
            <TopNewsSkeleton />
          ) : error ? (
            <p className="text-center text-red-500">Error: {error}</p>
          ) : (
            <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6">
              {newsItems.length > 0 ? (
                newsItems.map((item) => (
                  <div
                    key={item._id}
                    className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4"
                  >
                    <img
                      src={item.images?.[0]?.url || "https://placehold.co/600x400/000000/FFFFFF?text=No+Image"}
                      alt={item.title}
                      className="w-full h-64 max-w-full transition duration-300 ease-in-out cursor-move rounded-2xl hover:brightness-50"
                    />
                    <div className="mt-3 flex justify-between gap-4 text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                      <div className="text-md">
                        <span className="text-white text-xs uppercase bg-[#FF0000] pt-[6px] px-2.5 py-1 rounded-full">
                          {item.category?.name || "Uncategorized"}
                        </span>
                      </div>
                      <div>
                        <span className="me-2 lg:me-1">by {item.reporter}</span>
                        <span>
                          <i className="ri-time-line"></i>{" "}
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <h4 className="my-2 text-md font-medium text-gray-900 dark:text-white hover:text-[#E32C26] dark:hover:text-[#E32C26]">
                      <Link
                        to={`/single-post?id=${item._id}&model=news`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.title}
                      >
                        {item.title}
                      </Link>
                    </h4>
                    <p className="mb-1 text-sm text-gray-500 dark:text-gray-300">
                      {item.content ? (
                        isHTML(item.content) ? (
                          <span dangerouslySetInnerHTML={{ __html: item.content }} />
                        ) : (
                          item.content
                        )
                      ) : (
                        ""
                      )}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400 col-span-12">
                  No news articles found.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Section7;
