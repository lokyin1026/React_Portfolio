import "bootstrap-icons/font/bootstrap-icons.css";
import { Page } from "../layouts/Page";
import { Divbox } from "../layouts/Divbox";
import {
  projects,
  firms,
  skills,
  experiences,
} from "../constants/PagesConstants";
import Slider from "../layouts/Slider";

export const About = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap');
        `}
      </style>

      <div className="tw:text-center">
        <Page
          name="Nelson Ng Lok Yin"
          description="Hi! I'm a Software Developer with 2 - 3 years of experience working
            in various firms. Welcome to my online portfolio! Check out my
            previous experience and tech stack."
          childrenSlot={() => (
            <>
              <Divbox
                childrenSlot={() => (
                  <>
                    <div
                      className="div-subtitle tw:text-2xl tw:mb-6 tw:font-extrabold "
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Featured Projects
                    </div>
                    <div>
                      Brief intro goes here. My main experience lies in
                      developing services and layout for different systems. And
                      able to use different framework on different projects.
                    </div>
                    <Slider itemList={projects} />
                  </>
                )}
              />
              <Divbox
                childrenSlot={() => (
                  <>
                    <div
                      className="div-subtitle tw:text-2xl tw:mb-6 tw:font-extrabold "
                      style={{ fontFamily: "'Merriweather', serif" }}
                    >
                      Firms I Worked In
                    </div>
                    <div className="tw:mt-2 tw:flex tw:justify-around">
                      {firms.map((firm, index) => (
                        <div key={index} className="tw:basis-1/3 tw:p-2">
                          <img
                            src={firm.src}
                            className="tw:w-full tw:h-48 tw:object-cover tw:rounded-lg"
                            alt={firm.alt}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Skills Section */}
                    <div className="tw:mt-6">
                      <div
                        className="div-subtitle tw:text-2xl tw:mb-6 tw:font-extrabold "
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        Skills & Experience
                      </div>
                      <div className="tw:mt-2">
                        Listed below are the proficiencies I am presently
                        cultivating in both front-end and back-end disciplines.
                      </div>
                      <div className="tw:mt-8 tw:flex tw:justify-evenly tw:flex-wrap">
                        {skills.map((skill, index) => (
                          <div key={index} className="tw:basis-auto tw:p-2">
                            <img
                              src={skill.src}
                              className="tw:object-contain tw:rounded-lg"
                              alt={skill.alt}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="tw:flex tw:justify-around tw:p-8">
                        {experiences.map((iconClass, index) => (
                          <div key={index} className="tw:text-center tw:flex-1">
                            <i
                              className={`${iconClass.icon} tw:text-[24px] tw:border-2 tw:p-2 tw:overflow-hidden tw:rounded-full`}
                            ></i>
                            <div className="tw:mt-4">
                              {iconClass.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              />
            </>
          )}
        />
      </div>
    </>
  );
};
