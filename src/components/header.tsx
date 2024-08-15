"use client";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navlinks = [
  {
    href : "/",
    label : "Home"
  },
  {
    href : "/posts",
    label : "Posts" 
  },
  {
    href : "/create-post",
    label : "Create Post"
  }
]

function Header() {

  // usePathname is a hook from next/navigation that returns the current pathname of the page
  const pathName = usePathname();

  return (
    <div className='flex justify-between py-4 px-7 items-center border-b-4'>
      {/* Link tag in Next.js is used to navigate between pages */}
      <Link  href="/">  
      {/* Image tage in Next.js is used to display images */}
      <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
       </Link >


       <nav >
          <ul className='flex gap-x-4 text-[15px] font-bold'>
            {navlinks.map((link) => (
              <li key={link.href}>
                <Link 
                className={`${pathName === link.href ? 'text-zinc-900' : 'text-zinc-400'}`}
                href={link.href
                }>
                 {link.label}
                </Link>
                </li>
            ))}
          </ul>
       </nav>
    </div>
  )
}

export default Header 