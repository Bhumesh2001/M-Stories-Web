import React, { useState, useEffect } from "react"
import Layout5 from "../common/layout/Layout5"
import Seo from "../components/seo"
import blogPosts from "../common/data/blogData"
import postData from "../common/data/postData"
import blogImg from "../assets/images/blog_img.jpeg"

const BlogPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
    blogImage: null,
  })
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = ({ target: { files } }) => {
    const file = files[0]
    if (file) {
      setFormData(prev => ({ ...prev, blogImage: file }))

      // Clean old URL
      if (previewUrl) URL.revokeObjectURL(previewUrl)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()

    const newBlog = {
      id: Date.now(),
      image: blogImg,
      title: formData.title,
      author: formData.author,
      date: formData.date,
      comments: 0,
      excerpt: formData.content.slice(0, 150) + "...",
    }

    // console.log("New Blog Entry:", newBlog);

    // Example: push to local blog list
    blogPosts.push(newBlog)
    postData.push(newBlog)

    alert("Blog added successfully!")

    // Reset form
    setFormData({
      title: "",
      author: "",
      date: "",
      content: "",
      blogImage: null,
    })
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl)
      setPreviewUrl(null)
    }
  }

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl)
    }
  }, [previewUrl])

  return (
    <Layout5>
      <div className="max-w-3xl mx-auto p-4 md:p-8 bg-white shadow-lg rounded-2xl mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Blog</h2>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium mb-1">
              Author
            </label>
            <input
              id="author"
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-1">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter content"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="blogImage"
              className="block text-sm font-medium mb-1"
            >
              Blog Image
            </label>
            <input
              id="blogImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>

          {formData.blogImage && (
            <div className="mt-2">
              <p className="text-sm text-gray-600">Preview:</p>
              <img
                src={previewUrl}
                alt="Preview"
                className="mt-2 max-h-60 rounded-lg"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black transition"
          >
            Publish Post
          </button>
        </form>
      </div>
    </Layout5>
  )
}

export const Head = () => <Seo title="Blog tag" />

export default BlogPostForm
