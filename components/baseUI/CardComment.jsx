import React from 'react';

const CardComment = () => (
  <section className="my-4 tracking-wide leading-10 md:mx-36 md:my-8 ">
    <header className="border-b ">Comment</header>

    {/* Comment List */}
    <div className="flex">
      <img
        src="/main-profile.png"
        alt="profile"
        className="h-16 mt-4 shadow-lg rounded-full"
      />
      <div className="flex-col w-full">
        <p className="my-7 ml-4 mr-0 text-sm">
          Limprove{' '}
          <span className="text-gray-400">&nbsp;Today at 5:42PM</span>
        </p>
        <p className="-mt-7 ml-4 mr-0 text-md leading-7">
          좋은 글 입니다.
        </p>
      </div>
    </div>

    {/* <div className="flex ml-12">
      <img
        src="/main-profile.png"
        alt="profile"
        className="h-16 mt-4 shadow-lg rounded-full"
      />
      <div className="flex-col w-full">
        <p className="my-7 ml-4 mr-0 text-sm">
          Limprove{' '}
          <span className="text-gray-400">&nbsp;Today at 5:42PM</span>
        </p>
        <p className="-mt-7 ml-4 mr-0 text-md leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div className="flex ml-24">
      <img
        src="/main-profile.png"
        alt="profile"
        className="h-16 mt-4 shadow-lg rounded-full"
      />
      <div className="flex-col w-full">
        <p className="my-7 ml-4 mr-0 text-sm">
          Limprove{' '}
          <span className="text-gray-400">&nbsp;Today at 5:42PM</span>
        </p>
        <p className="-mt-7 ml-4 mr-0 text-md leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div className="flex">
      <img
        src="/main-profile.png"
        alt="profile"
        className="h-16 mt-4 shadow-lg rounded-full"
      />
      <div className="flex-col w-full">
        <p className="my-7 ml-4 mr-0 text-sm">
          Limprove{' '}
          <span className="text-gray-400">&nbsp;Today at 5:42PM</span>
        </p>
        <p className="-mt-7 ml-4 mr-0 text-md leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div> */}

    {/* MyComment textarea */}
    <div className="flex">
      <textarea
        className="w-8/12 sm:w-10/12 border my-10 leading-8 tracking-normal px-2"
        name="comment"
        id="comment"
        rows="6"
      />

      <div className="w-4/12 mt-28 pt-3 sm:w-2/12 sm:mt-0 sm:pt-0 flex-wrap px-3">
        <img
          src="/main-profile.png"
          alt="profile"
          className="w-0 sm:w-6/12 mx-auto mt-10 shadow-lg rounded-full"
        />
        <h2 className="absolute -left-96 sm:w-auto sm:relative sm:left-0 text-center">
          limprove
        </h2>

        <button
          type="submit"
          className="bg-blue-500 active:bg-blue-700 focus:outline-none
        text-white w-full h-12 rounded-lg shadow-md font-medium my-6"
        >
          Comment
        </button>
      </div>
    </div>
  </section>
);

export default CardComment;
