import React from "react";
import aboutImg from "../../../Assets/img/aboutUs-new.png";
import Layout from "../Layout/Layout";

const AboutSingle = () => {
  return (
    <Layout>
      <section class="text-gray-600 body-font lg:mt-24">
        <h1 className="text-sky-500 text-center text-5xl font-bold">
          ABOUT US
        </h1>
        <hr className="w-5/6 mx-auto mt-7" />
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded w-full"
              alt="hero"
              src={aboutImg}
            />
          </div>
          <div class="mt-20 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="font-bold title-font text-5xl md:text-3xl lg:text-5xl sm:text-3xl mb-6  text-yellow-400">
              About Us: Your Trusted
              <br class="hidden lg:inline-block" />
              Business Card Management Solution
            </h1>
            <p class="mt-5 leading-relaxed text-white text-lg">
              Discover our story at the forefront of digital business card
              management. We're dedicated to simplifying contact management,
              offering innovative solutions that streamline your networking
              experience. At the heart of our mission lies a commitment to
              revolutionizing contact management. With a passion for innovation,
              we've built a dynamic platform that simplifies business card
              storage and access. Our journey is rooted in making networking
              effortless and efficient, empowering you to connect, engage, and
              grow your professional relationships with ease.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutSingle;
