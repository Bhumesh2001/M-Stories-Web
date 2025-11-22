// import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
// import { callApi } from '../services/apiHandler'
// import { PostListSkeleton } from './Loader';

// const PostList = () => {
//   const [categories, setCategories] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const data = await callApi("/categories") // <-- API endpoint
//         setCategories(data.data.categories.slice(0, 10))
//       } catch (error) {
//         console.error("Error fetching categories:", error)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchCategories()
//   }, [])

//   if (loading) {
//     return (
//       <React.Fragment>
//         {[...Array(6)].map((_, i) => (
//           <PostListSkeleton key={i} />
//         ))}
//       </React.Fragment>
//     );
//   }

//   return (
//     <React.Fragment>
//       {categories.map((cat) => (
//         <div
//           key={cat._id}
//           className="relative bg-cover bg-center rounded-lg mb-3 overflow-hidden group"
//           style={{
//             backgroundImage: cat.images?.length
//               ? `url(${cat.images[0].url})`
//               : "none",
//           }}
//         >
//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

//           {/* Text content */}
//           <Link
//             to={`/blog-tag?id=${cat._id}&model=category`}
//             className="relative z-10 flex justify-between items-center p-4 text-white font-semibold"
//           >
//             <span>{cat.name}</span>
//           </Link>
//         </div>
//       ))}
//     </React.Fragment>
//   )
// };

// export default PostList


import React, { useEffect, useState, useMemo } from "react"
import { Link } from "gatsby"
import { callApi } from "../services/apiHandler"
import { PostListSkeleton } from "./Loader"

// Memoized component wrapper
const PostList = React.memo(function PostList() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function fetchCategories() {
      try {
        const data = await callApi("/categories")
        if (mounted) {
          setCategories(data.data.categories.slice(0, 10))
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchCategories()
    return () => { mounted = false }   // prevents state updates on unmounted
  }, [])

  // Pre-memoize sliced categories (avoids recalculating)
  const memoCats = useMemo(() => categories, [categories])

  if (loading) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <PostListSkeleton key={i} />
        ))}
      </>
    )
  }

  return (
    <>
      {memoCats.map((cat) => {
        const imageUrl = cat.images?.[0]?.url || ""

        return (
          <div
            key={cat._id}
            className="relative bg-cover bg-center rounded-lg mb-3 overflow-hidden group"
            style={{
              backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
              willChange: "transform",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

            <Link
              to={`/blog-tag?id=${cat._id}&model=category`}
              className="relative z-10 flex justify-between items-center p-4 text-white font-semibold"
            >
              <span>{cat.name}</span>
            </Link>
          </div>
        )
      })}
    </>
  )
})

export default PostList
