import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Seo from "../components/seo";
import Social from "../common/Social";
import PostList from "../common/PostList";
import Layout5 from "../common/layout/Layout5";
import { callApi } from "../services/apiHandler";
import { SinglePostSkeleton } from "../common/Loader";

const SinglePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();

  const id = searchParams.get("id");
  const model = searchParams.get("model");

  const isHTML = (str) => /<\/?[a-z][\s\S]*>/i.test(str);

  useEffect(() => {
    if (!id || !model) return;

    const fetchData = async () => {
      try {
        const urlMap = {
          blog: `/blogs/${id}`,
          news: `/news/${id}`,
          story: `/story/${id}`,
          category: `/categories/${id}`,
        };

        const url = urlMap[model];
        if (!url) return;

        const res = await callApi(url);
        setData(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, model]);

  if (loading) return <Layout5><SinglePostSkeleton /></Layout5>;

  if (!data)
    return (
      <Layout5>
        <div className="text-center py-20 text-xl text-red-500">No Data Found</div>
      </Layout5>
    );

  return (
    <Layout5>
      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="font-semibold text-3xl mb-4 text-black dark:text-white">
              {data.title || data.name}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 dark:text-gray-400">
              {data.author && (
                <span><i className="ri-user-fill"></i> {data.author}</span>
              )}
              {data.reporter && (
                <span><i className="ri-user-fill"></i> {data.reporter}</span>
              )}
              {data.createdAt && (
                <span><i className="ri-calendar-fill"></i> {new Date(data.createdAt).toDateString()}</span>
              )}
              {data.category?.name && (
                <span><i className="ri-bookmark-fill"></i> {data.category.name}</span>
              )}
            </div>

            <hr className="dark:border-slate-800" />

            {data.images?.[0]?.url && (
              <div className="flex justify-center mt-6 mb-6">
                <img
                  className="w-full max-w-full h-96 object-cover rounded-lg"
                  src={data.images[0].url}
                  alt={data.title || "image"}
                />
              </div>
            )}

            <div className="text-gray-700 dark:text-gray-300 leading-7 whitespace-pre-line">
              {isHTML(data.description || data.content) ? (
                <span dangerouslySetInnerHTML={{ __html: data.description || data.content }} />
              ) : (
                data.description || data.content
              )}
            </div>

            {data.sourceUrl && (
              <p className="mt-4">
                Source:{" "}
                <a
                  href={data.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 underline"
                >
                  {data.sourceUrl}
                </a>
              </p>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <form className="flex gap-1 mb-6">
              <input
                type="search"
                className="form-input px-4 py-3 rounded-lg w-full border dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="search..."
              />
              <button className="btn rounded-lg px-4 py-1 bg-black hover:bg-[#ff3750] text-xl dark:bg-[#ff3750] dark:hover:bg-gray-700">
                <i className="ri-search-line"></i>
              </button>
            </form>

            <Social />
            <PostList />
          </div>
        </div>
      </div>
    </Layout5>
  );
};

export const Head = () => <Seo title="Single Post" />;

export default SinglePost;
