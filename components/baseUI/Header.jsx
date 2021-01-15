import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const onChange = ({ target: { value } }) => {
    setSearchText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchText}`);
    setSearchText('');
  };

  return (
    <nav
      className="flex w-full items-center justify-between flex-wrap bg-white py-4 lg:px-12"
    >

      {/* Left Logo Bar */}
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-gray-300 lg:pb-0">
        <Link href="/">
          <a>
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
              <span className="font-semibold text-xl tracking-tight">Prove Project</span>
            </div>
          </a>
        </Link>

        {/* Mobile Hamberger button */}
        <div className="block lg:hidden ">
          <button
            type="submit"
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-gray-700 border-gray-700 hover:text-gray-700 hover:border-gray-700"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right Component  */}
      <div className="menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-gray-700 lg:flex-grow" />
        <div className="relative mx-auto text-gray-600 lg:block lg:mx-4 hidden">
          <form onSubmit={onSubmit}>
            <input
              className="border-2 border-gray-300 bg-white h-10 pl-2 pr-12 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="검색어를 입력하세요"
              onChange={onChange}
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg
                className="text-gray-600 h-4 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex ">
          <Link href="/">
            <a className="hidden lg:block text-md px-4  ml-2 py-2 rounded font-bold text-white mt-4 bg-gray-700 hover:text-white hover:bg-gray-800 lg:mt-0">
              로그인
            </a>
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Header;
