import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { callApi } from "../../../services/apiHandler";
import { HotStorySkeleton_, TopNewsSkeleton_ } from '../../Loader';

const Section8 = () => {
  const [hotStories, setHotStories] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define a color map for categories
  const categoryColors = {
    Technology: "#4ade80", // green
    Health: "#f87171",     // red
    Sports: "#60a5fa",     // blue
    Travel: "#fbbf24", // yellow
    Adventure: "#a78bfa",   // purple
    General: "#9ca3af",    // gray
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch story data for Hot News & Stories
        const storyResponse = await callApi("/story");
        setHotStories(storyResponse.data.stories.slice(0, 5)); // show first 5 stories

        // Fetch news data for Top Rated News
        const newsResponse = await callApi("/news");
        setTopNews(newsResponse.data.newsList.slice(0, 5)); // first 5 news items

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-32">
        Loading content...
      </div>
    );
  }

  return (
    <section className="mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hot News & Stories - LEFT */}
          <div className="order-1" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
              Hot News & Stories
            </h3>
            <ul>
              {loading ?
                [...Array(5)].map((_, i) => <HotStorySkeleton_ key={i} />)
                : hotStories?.map(item => (
                  <li key={item._id} className="py-3">
                    <div className="flex items-start gap-4">
                      <img
                        className="w-20 h-20 object-cover rounded-2xl flex-shrink-0"
                        src={item.images?.[0]?.url || "/default.jpg"}
                        alt={item.title}
                      />
                      <div className="flex-1">
                        <span
                          className="text-xs font-normal uppercase dark:text-white"
                          style={{ color: categoryColors[item.category?.name] || "#f7573d" }}
                        >
                          {item.category?.name || "General"}
                        </span>
                        <Link
                          to={`/single-post?id=${item._id}&model=story`}
                          className="block text-sm font-medium text-gray-900 dark:text-white hover:text-[#f7573d] dark:hover:text-[#f7573d]"
                        >
                          {item.title}
                        </Link>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2">{item.author}</span>
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Top Rated News - RIGHT */}
          <div className="order-2" data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold tracking-normal capitalize dark:text-white">
              Top Rated News
            </h3>
            <ul>
              {loading ? [...Array(5)].map((_, i) => <TopNewsSkeleton_ key={i} />)
                : topNews?.map(item => (
                  <li key={item._id} className="py-3">
                    <div className="flex items-start gap-4">
                      <img
                        className="w-20 h-20 object-cover rounded-2xl flex-shrink-0"
                        src={item.images?.[0]?.url || "/default.jpg"}
                        alt={item.title}
                      />
                      <div className="flex-1">
                        <span
                          className="text-xs font-normal uppercase dark:text-white"
                          style={{ color: categoryColors[item.category?.name] || "#f7573d" }}
                        >
                          {item.category?.name || "General"}
                        </span>
                        <Link
                          to={`/single-post?id=${item._id}&model=news`}
                          className="block text-sm font-medium text-gray-900 dark:text-white hover:text-[#f7573d] dark:hover:text-[#f7573d]"
                        >
                          {item.title}
                        </Link>
                        <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase">
                          <span className="me-2">{item.reporter}</span>
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
