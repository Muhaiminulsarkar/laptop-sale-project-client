import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="lg:mb-20 pt-4 max-w-screen-xl mx-auto">
      <section className=" ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-violet-400 capitalize lg:text-4xl pt-10 text-center font-mono">
            Blog Section
          </h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex bg-base-300 bg-opacity-50 rounded-xl ">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/state"
                  className="text-xl font-semibold text-black-300 hover:underline  "
                >
                  What are the different ways to manage a state in a React
                  application?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 20 October 2020
                </span>
              </div>
            </div>

            <div className="lg:flex bg-base-300 bg-opacity-50 rounded-xl">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://dmitripavlutin.com/javascript-prototypal-inheritance/cover.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/work"
                  className="text-xl font-semibold text-black-300 hover:underline  "
                >
                  How does prototypical inheritance work?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 20 October 2022
                </span>
              </div>
            </div>

            <div className="lg:flex bg-base-300 bg-opacity-50 rounded-xl">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://assets.codegrip.tech/wp-content/uploads/2019/10/04113325/1_Y07KF-_laqG2cJ1Squ0Bag.png"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/unit"
                  className="text-xl font-semibold text-black-300 hover:underline  "
                >
                  What is a unit test? Why should we write unit tests?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 25 November 2020
                </span>
              </div>
            </div>

            <div className="lg:flex bg-base-300 bg-opacity-50 rounded-xl">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg"
                alt=""
              />

              <div className="flex flex-col justify-between p-6 lg:mx-6">
                <Link
                  to="/blog/vs"
                  className="text-xl font-semibold text-black-300 hover:underline  "
                >
                  React vs. Angular vs. Vue?
                </Link>

                <span className="text-sm text-gray-400 ">
                  On: 30 September 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
