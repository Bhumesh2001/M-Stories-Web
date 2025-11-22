import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { callApi } from "../../../services/apiHandler";
import { HotStorySkeleton_, TopNewsSkeleton_ } from "../../Loader";

const Section8 = () => {
  const [hotStories, setHotStories] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryColors = {
    Technology: "#4ade80",
    Health: "#f87171",
    Sports: "#60a5fa",
    Travel: "#fbbf24",
    Adventure: "#a78bfa",
    General: "#9ca3af",
  };

  useEffect(() => {
    let active = true;

    const loadData = async () => {
      try {
        const storyRes = await callApi("/story");
        const newsRes = await callApi("/news");

        if (!active) return;

        setHotStories(storyRes?.data?.stories?.slice(0, 5) || []);
        setTopNews(newsRes?.data?.newsList?.slice(0, 5) || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadData();
    return () => {
      active = false;
    };
  }, []);

  const placeholder = "/default.jpg";

  // Reusable card for both lists
  const renderItem = (item, model) => (
    <li key={item._id} className="py-3">
      <div className="flex items-start gap-4">
        <img
          className="w-20 h-20 object-cover rounded-2xl flex-shrink-0"
          src={item.images?.[0]?.url || placeholder}
          alt={item.title}
        />

        <div className="flex-1">
          <span
            className="text-xs uppercase dark:text-white"
            style={{
              color: categoryColors[item.category?.name] || "#f7573d",
            }}
          >
            {item.category?.name || "General"}
          </span>

          <Link
            to={`/single-post?id=${item._id}&model=${model}`}
            className="block text-sm font-medium text-gray-900 dark:text-white hover:text-[#f7573d]"
          >
            {item.title}
          </Link>

          <div className="text-[11px] text-gray-500 dark:text-gray-400 uppercase">
            <span className="mr-2">
              {model === "story" ? item.author : item.reporter}
            </span>
            <span>{new Date(item.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <section className="mt-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hot News & Stories */}
          <div data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold capitalize dark:text-white">
              Hot News & Stories
            </h3>

            <ul>
              {loading
                ? [...Array(5)].map((_, i) => <HotStorySkeleton_ key={i} />)
                : hotStories.map((item) => renderItem(item, "story"))}
            </ul>
          </div>

          {/* Top Rated News */}
          <div data-aos="fade-up">
            <h3 className="mb-4 text-2xl font-bold capitalize dark:text-white">
              Top Rated News
            </h3>

            <ul>
              {loading
                ? [...Array(5)].map((_, i) => <TopNewsSkeleton_ key={i} />)
                : topNews.map((item) => renderItem(item, "news"))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
