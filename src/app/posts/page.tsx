import PostLists from "@/components/postlists";
import { Suspense } from "react";

// we can use async functions in Next.js pages to fetch data from an API or database.
export default async function page() {
  return (
    <div className="text-center pt-35 px-5">
      <h1 className="text-3xl md:text-4xl font-bold mt-6">All Posts</h1>

{/* Suspense in nextjs is used to lazy load components. It is used to wrap the component that is being lazy loaded. The fallback prop is used to show a loading spinner or any other component while the component is being loaded. */}
<Suspense fallback="loading..." >
      <PostLists />
</Suspense>
    </div>
  )
}
