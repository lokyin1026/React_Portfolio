import { useEffect } from "react";
import WebFont from "webfontloader";
import map from "../../assets/map.png";
import microservices from "../../assets/microservices.jpg";
import database from "../../assets/database.jpg";

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
        <div className="tw:bg-[#1a2a44] tw:p-14 tw:rounded-lg tw:max-w-[900px] tw:mx-auto tw:text-center tw:mt-12 tw:relative">
          <div className="tw:bg-[#1a2a44] tw:rounded-full tw:mx-auto tw:w-30 tw:h-30 tw:absolute tw:left-[43.6%] tw:top-[-50px]"></div>
          <img
            src="https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg" // Replace with your profile image URL
            className="tw:w-24 tw:h-24 tw:rounded-full tw:mx-auto tw:mb-4 tw:object-cover tw:absolute tw:left-[45%] tw:top-[-40px]"
          />
          <div
            className="tw:text-2xl tw:mt-6 tw:mb-6 tw:font-extrabold tw:text-white"
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
        <div className="tw:bg-[#1a2a44] tw:p-14 tw:rounded-lg tw:max-w-[900px] tw:mx-auto tw:text-center tw:mt-12">
          <div
            className="tw:text-2xl tw:mb-6 tw:font-extrabold tw:text-white"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Featured Projects
          </div>
          <div>
            Brief intro goes here. My main experience lies in developing
            services and layout for different systems. And able to use different
            framework on different projects.
          </div>
          <div className="tw:flex tw:justify-between tw:mt-4">
            <div className="tw:flex tw:justify-around tw:mt-4">
              <div className="tw:basis-1/3 tw:p-2">
                <img
                  src={map}
                  className="tw:w-full tw:h-48 tw:object-cover tw:rounded-lg"
                  alt="Map Application"
                />
                <div className="tw:font-extrabold tw:text-left tw:text-xl tw:text-white tw:mt-2">
                  Map Application
                </div>
                <div className="tw:text-left tw:mt-2">
                  Creating snapshots and 3d objects onto the map.
                </div>
              </div>
              <div className="tw:basis-1/3 tw:p-2">
                <img
                  src={microservices}
                  className="tw:w-full tw:h-48 tw:object-cover tw:rounded-lg"
                  alt="Microservices Development"
                />
                <div className="tw:font-extrabold tw:text-left tw:text-xl tw:text-white tw:mt-2">
                  Microservices Development
                </div>
                <div className="tw:text-left tw:mt-2">
                  Creating multiservices to break down complex systems into
                  manageable and independent components.
                </div>
              </div>
              <div className="tw:basis-1/3 tw:p-2">
                <img
                  src={database}
                  className="tw:w-full tw:h-48 tw:object-cover tw:rounded-lg"
                  alt="Database Project"
                />
                <div className="tw:font-extrabold tw:text-left tw:text-xl tw:text-white tw:mt-2">
                  Database Structure
                </div>
                <div className="tw:text-left tw:mt-2">
                  Managing and optimizing data storage for efficient retrieval
                  and processing.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tw:bg-[#1a2a44] tw:p-14 tw:rounded-lg tw:max-w-[900px] tw:mx-auto tw:text-center tw:mt-12">
                    <div
            className="tw:text-2xl tw:mb-6 tw:font-extrabold tw:text-white"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Clients I Worked With
          </div>
        </div>
      </div>
    </>
  );
};
