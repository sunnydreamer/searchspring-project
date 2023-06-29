import React from "react";

const Banner = () => {
  return (
    <section className="bg-banner bg-cover ">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white mb-5">
            The Spring Sale ends tonight
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block mx-auto w-1/2 rounded bg-red-500 px-12 py-3 text-sm text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto font-bold"
              href="/trending"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
