import prisma from "@/lib/db"
import { notFound } from "next/navigation"

// params in nextjs is a special variable that is used to get the dynamic route parameters
export default  async function Page({ params } : {
  params : {id : string}
}) {

  const post = await prisma.post.findUnique({
    where : {
      id : parseInt(params.id)
    }
  })

  if(!post) {
    // notFound is a function that is used to return a 404 page
    notFound();
  }




  return (
    <main className="px-7 pt-24">
      <h1 className="text-center text-3xl font-semibold">{post.title}</h1>

      <p className="max-w-[700px mx-auto] mt-6">{post.body}</p>
    </main>
  )
}

