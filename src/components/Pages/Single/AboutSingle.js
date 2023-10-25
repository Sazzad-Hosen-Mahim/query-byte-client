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
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font text-5xl md:text-3xl lg:4xl sm:text-3xl mb-6 font-medium text-yellow-400">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="leading-relaxed text-white">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutSingle;
