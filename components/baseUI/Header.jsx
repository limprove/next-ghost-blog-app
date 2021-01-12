import React from 'react';
import Link from 'next/link';

const Header = () => (
  <nav className="w-full flex flex-nowrap items-center h-16">
    {/* Left Logo */}
    <div className="md:hidden w-8 ml-2">
      <Link href="/">
        <a>
          <img src="/profile.png" alt="profile" />
        </a>
      </Link>
    </div>
    <h1 className="w-1/2 pl-36 align-middle font-semibold text-2xl font-pop  text-gray-900 md:flex hidden">
      <Link href="/">
        <a>Prove Project</a>
      </Link>
    </h1>

    {/* Rigth Menu */}
    <div className="cursor-pointer w-full flex justify-end  mr-4 md:hidden">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>

    <ul className="w-1/2 pr-36 align-middle justify-end md:flex hidden">
      <li className="mr-12 text-lg font-pop font-normal text-gray-800">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="mr-12 text-lg font-pop font-normal text-gray-800">
        <Link href="/">
          <a>Posts</a>
        </Link>
      </li>
      <li className="text-lg font-pop font-normal text-gray-800">
        <Link href="/">
          <a>Log In</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;
