import React, { useEffect } from "react";
import WebFont from "webfontloader";

export const About = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Merriweather:400,700"],
      },
    });
  }, []);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
      </style>

      <div className="tw:text-center">
        <div className="tw:bg-[#1a2a44] tw:text-white tw:p-14 tw:rounded-lg tw:max-w-[900px] tw:mx-auto tw:text-center tw:mt-12 tw:relative">
          <div className="tw:bg-[#1a2a44] tw:rounded-full tw:w-30 tw:h-30 tw:absolute tw:left-[392px] tw:top-[-50px]"></div>
          <img
            src="https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg" // Replace with your profile image URL
            className="tw:w-24 tw:h-24 tw:rounded-full tw:mx-auto tw:mb-4 tw:object-cover tw:absolute tw:left-[45%] tw:top-[-40px]"
          />
          <div
            className="tw:text-2xl tw:mt-6 tw:mb-6 tw:font-extrabold"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Nelson Ng Lok Yin
          </div>
          <div>
            Hi! I'm a Software Developer with 2 - 3 years of experience working
            in various firms. Welcome to my online portfolio! Check out my
            previous experience and tech stack.
          </div>
        </div>
        <div className="tw:bg-[#1a2a44] tw:text-white tw:p-14 tw:rounded-lg tw:max-w-[900px] tw:mx-auto tw:text-center tw:mt-12">
          <div
            className="tw:text-2xl tw:mb-6 tw:font-extrabold"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Featured Projects
          </div>
          <div>
            Brief intro goes here. My main experience lies in developing
            services and layout for different systems. And able to use different
            framework on different projects.
          </div>
        </div>
      </div>
    </>
  );
};
