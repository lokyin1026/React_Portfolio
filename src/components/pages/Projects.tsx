import { Intro } from "../layouts/Intro";
import { projects } from "../constants/PagesConstants";
import Slider from "../layouts/Slider";

export const Projects = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
        `}
      </style>
      <div className="tw:text-center">
        <Intro
          name="Nelson Ng Lok Yin"
          description="Intro about projects goes here, following are the details of all projects that I have involved in it previously."
        />
        <div className="div-bg tw:rounded-lg tw:max-w-[1100px] tw:mx-auto tw:text-center tw:mt-12">
          <Slider itemList={projects} />
        </div>
      </div>
    </>
  );
};
