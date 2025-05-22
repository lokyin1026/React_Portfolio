import React from "react";

interface IntroProp {
  name: string;
  description: string;
}

export const Intro: React.FC<IntroProp> = ({ name, description }) => {
  return (
    <>
      <div className="div-bg tw:p-14 tw:rounded-lg tw:max-w-[1100px] tw:mx-auto tw:text-center tw:mt-12 tw:relative">
        <div className="div-bg tw:rounded-full tw:mx-auto tw:w-30 tw:h-30 tw:absolute tw:left-[43.6%] tw:top-[-50px]"></div>
        <img
          src="https://imgv3.fotor.com/images/blog-cover-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg"
          className="tw:w-24 tw:h-24 tw:rounded-full tw:mx-auto tw:mb-4 tw:object-cover tw:absolute tw:left-[45%] tw:top-[-40px]"
          alt="Profile"
        />
        <div
          className="div-subtitle tw:text-2xl tw:mt-6 tw:mb-6 tw:font-extrabold "
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          {name}
        </div>
        <div>{description}</div>
      </div>
    </>
  );
};
