import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostLists() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const posts = await prisma.post.findMany();
 
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          className="text-left mt-5 hover:text-zinc-500 transition-all"
        > 
          <Link href={`/posts/${post.id}`}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
